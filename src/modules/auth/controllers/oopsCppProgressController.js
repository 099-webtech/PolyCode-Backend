const jwt = require("jsonwebtoken");
const oopsProgress = require("../services/oopsCppProgressService");

function getUserIdFromRequest(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("No token provided");
  }

  const token = authHeader.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET || "dev_secret");
  return decoded.id;
}

async function getProgress(req, res) {
  try {
    const userId = getUserIdFromRequest(req);
    const progress = await oopsProgress.getProgress(userId);
    res.json({ progress });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

async function setLastLesson(req, res) {
  try {
    const userId = getUserIdFromRequest(req);
    const { lessonId } = req.body;
    if (!lessonId) return res.status(400).json({ error: "lessonId is required" });

    const progress = await oopsProgress.setLastLesson(userId, lessonId);
    res.json({ progress });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function completeLesson(req, res) {
  try {
    const userId = getUserIdFromRequest(req);
    const { lesson } = req.body;
    if (!lesson?.lessonId || !lesson?.title || !lesson?.chapterId) {
      return res.status(400).json({ error: "lesson metadata is required" });
    }

    const progress = await oopsProgress.completeLesson(userId, lesson);
    res.json({ progress });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function saveCode(req, res) {
  try {
    const userId = getUserIdFromRequest(req);
    const { lessonId, code } = req.body;
    if (!lessonId) return res.status(400).json({ error: "lessonId is required" });

    const progress = await oopsProgress.saveCode(userId, lessonId, code || "");
    res.json({ progress });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function saveNote(req, res) {
  try {
    const userId = getUserIdFromRequest(req);
    const { lessonId, note } = req.body;
    if (!lessonId) return res.status(400).json({ error: "lessonId is required" });

    const progress = await oopsProgress.saveNote(userId, lessonId, note || "");
    res.json({ progress });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function toggleBookmark(req, res) {
  try {
    const userId = getUserIdFromRequest(req);
    const { lessonId } = req.body;
    if (!lessonId) return res.status(400).json({ error: "lessonId is required" });

    const progress = await oopsProgress.toggleBookmark(userId, lessonId);
    res.json({ progress });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function addTime(req, res) {
  try {
    const userId = getUserIdFromRequest(req);
    const { minutes } = req.body;
    const progress = await oopsProgress.addTime(userId, minutes);
    res.json({ progress });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getProgress,
  setLastLesson,
  completeLesson,
  saveCode,
  saveNote,
  toggleBookmark,
  addTime,
};
