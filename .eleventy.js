module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/bundle.css");
  eleventyConfig.addPassthroughCopy("src/bundle.js");

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};