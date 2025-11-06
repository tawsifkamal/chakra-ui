import { Container } from "@chakra-ui/layout"
import * as React from "react"
import { Card, CardBody, CardHeader } from "../src"

export default {
  title: "Components / Data Display / Card",
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
}

export const Basic = () => (
  <Card>
    <CardHeader>
      <h2>Card Header</h2>
    </CardHeader>
    <CardBody>
      <p>Card Body</p>
    </CardBody>
  </Card>
)

export const Outline = () => (
  <Card variant="outline">
    <CardHeader>
      <h2>Card Header</h2>
    </CardHeader>
    <CardBody>
      <p>Card Body</p>
    </CardBody>
  </Card>
)

export const Solid = () => (
  <Card variant="solid">
    <CardHeader>
      <h2>Card Header</h2>
    </CardHeader>
    <CardBody>
      <p>Card Body</p>
    </CardBody>
  </Card>
)

export const WithFooter = () => (
  <Card>
    <CardHeader>
      <h2>Card Header</h2>
    </CardHeader>
    <CardBody>
      <p>Card Body</p>
    </CardBody>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
)
