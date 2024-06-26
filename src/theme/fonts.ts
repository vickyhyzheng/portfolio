import { TypographyOptions } from "@mui/material/styles/createTypography"

const sharedTypographyStyles = {
  color: "#1B1B1B",
}

export const fonts: TypographyOptions = {
  fontFamily: '"Archivo Black", "Calibri", sans-serif',
  h1: {
    fontSize: "64px",
    fontFamily: '"Archivo Black", sans-serif',
    fontWeight: 400,
    ...sharedTypographyStyles,
  },
  h2: {
    fontSize: "32px",
    fontFamily: '"Archivo Black", sans-serif',
    fontWeight: 400,
    ...sharedTypographyStyles,
  },
  h3: {
    fontSize: "24px",
    fontFamily: '"Archivo Black", sans-serif',
    fontWeight: 400,
    ...sharedTypographyStyles,
  },
  h4: {
    fontSize: "44px",
    fontFamily: '"Calibri", sans-serif',
    fontWeight: 700,
    ...sharedTypographyStyles,
  },
  h5: {
    fontSize: "32px",
    fontFamily: '"Calibri", sans-serif',
    fontWeight: 700,
    ...sharedTypographyStyles,
  },
  h6: {
    fontSize: "16px",
    fontFamily: '"Archivo Black", sans-serif',
    fontWeight: 400,
    ...sharedTypographyStyles,
  },
  body1: {
    fontSize: "16px",
    fontFamily: '"Calibri", sans-serif',
    lineHeight: "150%",
    ...sharedTypographyStyles,
  },
  body2: {
    fontSize: "20px",
    fontFamily: '"Calibri", sans-serif',
    lineHeight: "150%",
    ...sharedTypographyStyles,
  },
  tag: {
    fontSize: "12px",
    fontFamily: '"Calibri", sans-serif',
    ...sharedTypographyStyles,
  },
  button: {
    fontSize: "20px",
    fontFamily: '"Calibri", sans-serif',
    fontStyle: "normal",
    textTransform: "none",
    lineHeight: "normal",
    ...sharedTypographyStyles,
  },
}
