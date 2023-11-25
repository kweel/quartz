import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function ArticleTitle({ fileData, displayClass }: QuartzComponentProps) {
  const title = fileData.frontmatter?.title
  if (title) {
    return <h2 class={`article-title ${displayClass ?? ""}`}>{title}</h2>
  } else {
    return null
  }
}
ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
