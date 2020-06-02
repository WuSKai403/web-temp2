const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/skai/gatsby/my-blog-starter/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/skai/gatsby/my-blog-starter/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/skai/gatsby/my-blog-starter/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/skai/gatsby/my-blog-starter/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/skai/gatsby/my-blog-starter/src/pages/index.js"))),
  "component---src-pages-work-js": hot(preferDefault(require("/home/skai/gatsby/my-blog-starter/src/pages/work.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/skai/gatsby/my-blog-starter/src/templates/blog-post.js"))),
  "component---src-templates-work-project-js": hot(preferDefault(require("/home/skai/gatsby/my-blog-starter/src/templates/work-project.js")))
}

