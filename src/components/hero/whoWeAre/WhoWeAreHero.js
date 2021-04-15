import React from "react";
import Circles from "../../../images/sprinkles/vertical-navy.svg";
import { H1, H2, RichText } from "../../styles/styles";
import {
  ColorBlock,
  Container,
  ContentContainer,
  FullBleedImage,
  SideImage,
  Sprinkle,
  XLImage,
} from "./styled";

const WhoWeAreHero = ({ content }) => (
  <ColorBlock>
    <FullBleedImage
      src={content.image.fields.file.url}
      alt={content.image.fields.description}
    />
    <Container>
      <ContentContainer>
        <H2>Who We Are</H2>
        <H1>{content.heading}</H1>
        <RichText document={content.richDescription} />
      </ContentContainer>
      <XLImage
        src={content.image.fields.file.url}
        alt={content.image.fields.description}
      />
      <Sprinkle src={Circles} />
    </Container>
    <SideImage
      src={content.image.fields.file.url}
      alt={content.image.fields.description}
    />
  </ColorBlock>
);

export default WhoWeAreHero;
