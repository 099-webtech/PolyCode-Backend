const express = require("express");
const { analyzeCode } = require("./polyguardService");

const router = express.Router();

router.post("/analyze", (req, res) => {
  try {
    const { code, language = "python", context = {} } = req.body || {};

    if (!code || !String(code).trim()) {
      return res.status(400).json({ error: "code is required" });
    }

    const result = analyzeCode({
      code: String(code),
      language: String(language),
      context: context && typeof context === "object" ? context : {},
    });

    return res.json(result);
  } catch (error) {
    console.error("PolyGuard analyze error:", error.message);
    return res.status(500).json({ error: "PolyGuard analysis failed" });
  }
});

module.exports = router;
