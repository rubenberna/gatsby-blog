const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/rubenberna/code/Training/Gatsby/gatsby-blog/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/rubenberna/code/Training/Gatsby/gatsby-blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/rubenberna/code/Training/Gatsby/gatsby-blog/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/rubenberna/code/Training/Gatsby/gatsby-blog/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/rubenberna/code/Training/Gatsby/gatsby-blog/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/rubenberna/code/Training/Gatsby/gatsby-blog/src/pages/index.js"))),
  "component---src-pages-services-js": hot(preferDefault(require("/home/rubenberna/code/Training/Gatsby/gatsby-blog/src/pages/services.js")))
}

