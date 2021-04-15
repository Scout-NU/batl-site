import React from "react";
import { H2, RichText } from "../styles/styles";
import {
  Banner,
  Columns,
  Container,
  Content,
  Heading,
  HideOverflow,
} from "./styled";

const ColorBanner = ({ section, content, splitColumns, left, wide }) => (
  <HideOverflow>
    <Container>
      <Content left={left} wide={wide}>
        <H2>{section}</H2>
        <Banner left={left}>
          <Heading>{content.heading}</Heading>
        </Banner>
        {splitColumns ? (
          <Columns>
            <RichText document={content.richDescription} />
          </Columns>
        ) : (
          <RichText document={content.richDescription} />
        )}
      </Content>
    </Container>
  </HideOverflow>
);

export default ColorBanner;
