import React from "react"
import { Link, Typography } from "@material-ui/core"

export const renderers = {
  link: ({ href, children }) => (
    <Link href={href} color="primary" target="_blank" rel="noopener">
      {children}
    </Link>
  ),
  paragraph: ({ children }) => (
    <Typography variant="body1" gutterBottom>
      {children}
    </Typography>
  ),
  listItem: ({ children }) => (
    <Typography variant="body1" component='li' gutterBottom>
      {children}
    </Typography>
  ),
}
