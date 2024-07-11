// Пути для тасков

module.exports = {
  clean: {
    src: "./docs/*"
  },
  favicon: {
    src: "./src/img/favicons/*.{jpg,jpeg,png,gif}",
    dest: "./docs/img/favicons/"
  },
  html: {
    src: "src/pages/**/*.html",
    dest: "./docs/",
    watch: "src/**/*.html"
  },
  fonts: {
    src: "./src/fonts/**/*.{woff,woff2}",
    dest: "./docs/fonts/",
    watch: "src/fonts/**/*"
  },
  images: {
    src: ["./src/img/**/*.{jpg,jpeg,png,gif,svg,mp4}", "!./src/img/svg/icons/*", "!./src/img/favicons/*.{jpg,jpeg,png,gif,svg}"],
    dest: "./docs/img/",
    watch: "src/img/**/*"
  },
  style: {
    src: ["src/scss/main.scss", "src/pages/**/*.scss"],
    dest: "docs/css/",
    watch: ["src/scss/**/*.scss", "src/blocks/**/*.scss", "src/pages/**/*.scss"]
  },
  scripts: {
    src: ["src/js/**/*.js", "src/pages/**/*.js"],
    dest: "./docs/js/",
    watch: ["src/js/**/*.js", "src/blocks/**/*.js", "src/pages/**/*.js"]
  },
  sprite: {
    src: "./src/img/icons/svg/*.svg",
    dest: "./docs/img/sprites/",
    watch: "src/img/icons/svg/*"
  },
  webp: {
    src: ["./src/img/**/*.{jpg,jpeg,png,gif}", "!./src/img/svg/icons/*", "!./src/img/favicons/*.{jpg,jpeg,png,gif,svg}"],
    dest: "./docs/img/"
  },
  deploy: {
    dest: "../capitals-wp/web/app/themes/Capitals/resources/assets",
    src: "./docs/**"
  },
  vendor: {
    src: "./src/vendor/**",
    dest: "docs/vendor/"
  }
}
