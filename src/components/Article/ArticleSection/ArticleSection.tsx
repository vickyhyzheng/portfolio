import { Box } from "@mui/material"
import React from "react"

interface ArticleSectionProps {
  children: React.ReactNode
}

export const ArticleSection = ({ children }: ArticleSectionProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        // px: 12,
        // px: 12,
        flexDirection: "column",
        width: "100%",
        // alignItems: 'flex-start',
        gap: 8,
        mb: 8,
      }}
    >
      {children}
    </Box>
  )
}
