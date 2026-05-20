const OopsCppProgress = require("../models/OopsCppProgress");

async function getOrCreateProgress(userId) {
  let progress = await OopsCppProgress.findOne({ userId });

  if (!progress) {
    progress = new OopsCppProgress({ userId });
    await progress.save();
  }

  return progress;
}

function touchStreak(progress) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (!progress.lastActiveDate) {
    progress.currentStreak = 1;
  } else {
    const last = new Date(progress.lastActiveDate);
    last.setHours(0, 0, 0, 0);
    const diffDays = Math.floor((today - last) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) progress.currentStreak += 1;
    else if (diffDays > 1) progress.currentStreak = 1;
  }

  progress.lastActiveDate = new Date();
}

async function getProgress(userId) {
  return getOrCreateProgress(userId);
}

async function completeLesson(userId, lesson) {
  const progress = await getOrCreateProgress(userId);
  const existing = progress.completedLessons.find(
    (item) => item.lessonId === lesson.lessonId,
  );

  if (!existing) {
    progress.completedLessons.push({
      lessonId: lesson.lessonId,
      title: lesson.title,
      chapterId: lesson.chapterId,
      chapterTitle: lesson.chapterTitle,
      xp: lesson.xp || 0,
      completedAt: new Date(),
    });
    progress.totalXp += lesson.xp || 0;
  }

  progress.lastLessonId = lesson.lessonId;
  touchStreak(progress);
  await progress.save();
  return progress;
}

async function setLastLesson(userId, lessonId) {
  const progress = await getOrCreateProgress(userId);
  progress.lastLessonId = lessonId;
  touchStreak(progress);
  await progress.save();
  return progress;
}

async function saveCode(userId, lessonId, code) {
  const progress = await getOrCreateProgress(userId);
  const existing = progress.savedCode.find((item) => item.lessonId === lessonId);

  if (existing) {
    existing.code = code;
    existing.updatedAt = new Date();
  } else {
    progress.savedCode.push({ lessonId, code, updatedAt: new Date() });
  }

  progress.lastLessonId = lessonId;
  touchStreak(progress);
  await progress.save();
  return progress;
}

async function saveNote(userId, lessonId, note) {
  const progress = await getOrCreateProgress(userId);
  const existing = progress.notes.find((item) => item.lessonId === lessonId);

  if (existing) {
    existing.note = note;
    existing.updatedAt = new Date();
  } else {
    progress.notes.push({ lessonId, note, updatedAt: new Date() });
  }

  progress.lastLessonId = lessonId;
  touchStreak(progress);
  await progress.save();
  return progress;
}

async function toggleBookmark(userId, lessonId) {
  const progress = await getOrCreateProgress(userId);

  if (progress.bookmarks.includes(lessonId)) {
    progress.bookmarks = progress.bookmarks.filter((id) => id !== lessonId);
  } else {
    progress.bookmarks.push(lessonId);
  }

  progress.lastLessonId = lessonId;
  touchStreak(progress);
  await progress.save();
  return progress;
}

async function addTime(userId, minutes) {
  const progress = await getOrCreateProgress(userId);
  progress.totalMinutesSpent += Math.max(0, Number(minutes) || 0);
  touchStreak(progress);
  await progress.save();
  return progress;
}

module.exports = {
  getProgress,
  completeLesson,
  setLastLesson,
  saveCode,
  saveNote,
  toggleBookmark,
  addTime,
};
