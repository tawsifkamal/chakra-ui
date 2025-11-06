import {
  chakra,
  forwardRef,
  omitThemingProps,
  ThemingProps,
  useStyleConfig,
  HTMLChakraProps,
} from "@chakra-ui/system"
import { cx, __DEV__ } from "@chakra-ui/utils"
import * as React from "react"

interface CardOptions {
  /**
   * The variant of the card.
   */
  variant?: string
}

export interface CardTheme extends HTMLChakraProps<"div">, ThemingProps {}

export interface CardProps extends CardTheme, CardOptions {}

export const Card = forwardRef<CardProps, "div">((props, ref) => {
  const styles = useStyleConfig("Card", props)
  const { className, ...rest } = omitThemingProps(props)

  return (
    <chakra.div
      ref={ref}
      className={cx("chakra-card", className)}
      __css={styles}
      {...rest}
    />
  )
})

if (__DEV__) {
  Card.displayName = "Card"
}
