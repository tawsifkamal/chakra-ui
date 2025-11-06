import { HTMLChakraProps, chakra, forwardRef } from "@chakra-ui/system"
import { cx, __DEV__ } from "@chakra-ui/utils"

export interface CardBodyProps extends HTMLChakraProps<"div"> {}

export const CardBody = forwardRef<CardBodyProps, "div">((props, ref) => {
  const { className, ...rest } = props
  return (
    <chakra.div
      ref={ref}
      width="100%"
      className={cx("chakra-card__body", className)}
      {...rest}
    />
  )
})

if (__DEV__) {
  CardBody.displayName = "CardBody"
}

export interface CardHeaderProps extends HTMLChakraProps<"div"> {}

export const CardHeader = forwardRef<CardHeaderProps, "div">((props, ref) => {
  return <chakra.div ref={ref} {...props} />
})

if (__DEV__) {
  CardHeader.displayName = "CardHeader"
}

export interface CardFooterProps extends HTMLChakraProps<"div"> {}

export const CardFooter = forwardRef<CardFooterProps, "div">((props, ref) => {
  return <chakra.div ref={ref} {...props} />
})

if (__DEV__) {
  CardFooter.displayName = "CardFooter"
}
