const { analyzeCodeLocally } = require("./analyzeLocally");

function analyzeCode({ code, language = "python", context = {} }) {
  return analyzeCodeLocally(code, language, context);
}

module.exports = { analyzeCode };
