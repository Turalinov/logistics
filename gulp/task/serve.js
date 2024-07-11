const browserSync = require("browser-sync");

module.exports = function serve() {
  browserSync({
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match;
        }
      }
    },
    server: {
      baseDir: './docs',
      tunnel: true,
      port: 9000
    }
  });
}
