const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");
const progressController = require("./controllers/progressController");
const oopsCppProgressController = require("./controllers/oopsCppProgressController");

// ── User Auth Routes ─────────────────────────────────────────────────────────

/** POST /api/auth/register */
router.post("/register", userController.register);

/** POST /api/auth/login */
router.post("/login", userController.login);

/** GET /api/auth/me  — returns current user from Bearer token */
router.get("/me", userController.getMe);

/** GET /api/auth/user/:id */
router.get("/user/:id", userController.getUserProfile);

/** PUT /api/auth/user/:id */
router.put("/user/:id", userController.updateProfile);

/** POST /api/auth/change-password */
router.post("/change-password", userController.changePasswordHandler);

/** DELETE /api/auth/user/:id */
router.delete("/user/:id", userController.deleteAccount);

// ── Progress Routes ───────────────────────────────────────────────────────────

router.get(
  "/progress/:userId/:language",
  progressController.getLanguageProgress,
);
router.get("/progress/:userId", progressController.getAllProgress);
router.post("/progress/mark-module", progressController.markModuleComplete);
router.post("/progress/mark-document", progressController.markDocumentComplete);
router.post("/progress/bookmark", progressController.toggleBookmark);
router.post("/progress/add-time", progressController.addTimeSpent);
router.post(
  "/progress/mark-language-complete",
  progressController.markLanguageComplete,
);
router.get("/progress/dashboard/:userId", progressController.getDashboardStats);

// ── Learn: OOP C++ Progress Routes ───────────────────────────────────────────

router.get("/learn/oops-cpp/progress", oopsCppProgressController.getProgress);
router.post(
  "/learn/oops-cpp/progress/last-lesson",
  oopsCppProgressController.setLastLesson,
);
router.post(
  "/learn/oops-cpp/progress/complete",
  oopsCppProgressController.completeLesson,
);
router.post(
  "/learn/oops-cpp/progress/code",
  oopsCppProgressController.saveCode,
);
router.post(
  "/learn/oops-cpp/progress/note",
  oopsCppProgressController.saveNote,
);
router.post(
  "/learn/oops-cpp/progress/bookmark",
  oopsCppProgressController.toggleBookmark,
);
router.post(
  "/learn/oops-cpp/progress/time",
  oopsCppProgressController.addTime,
);

module.exports = router;
