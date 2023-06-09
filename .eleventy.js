module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "src/js": "js",
    "src/style": "style",
    "src/img": "img"
  });

  return {
    dir: {
      input: "src/content",
      includes: "../_includes",
      output: "dist",
    }
  }
};