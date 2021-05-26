module.exports = config => {

  config.addWatchTarget("./src/sass/");
  config.addPassthroughCopy("./src/css/");
  config.addPassthroughCopy('./src/images/');
  config.addPassthroughCopy('./src/js/');
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
}
