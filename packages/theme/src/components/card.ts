import { mode } from "@chakra-ui/theme-tools"

const baseStyle = {
  display: "flex",
  flexDirection: "column",
  background: "white",
  border: "1px solid",
  borderColor: "gray.200",
  borderRadius: "md",
}

const variants = {
  outline: (props: any) => ({
    border: "1px solid",
    borderColor: mode("gray.200", "whiteAlpha.300")(props),
  }),
  solid: (props: any) => ({
    bg: mode("gray.100", "whiteAlpha.200")(props),
  }),
}

const defaultProps = {
  variant: "outline",
}

export default {
  baseStyle,
  variants,
  defaultProps,
}
