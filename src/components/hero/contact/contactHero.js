import React from "react";
import { H1, RichText } from "../../styles/styles";
import Images from "./images/images";
import {
  BottomAligner,
  Container,
  Content,
  HeroContainer,
  ImagesContainer,
} from "./styled";

const ContactHero = ({ content }) => {
  return (
    <HeroContainer className="container-fluid">
      <BottomAligner></BottomAligner>
      <Container>
        <Content>
          <H1>{content.heading}</H1>
          <RichText document={content.richDescription} />
        </Content>
        {content.images && (
          <ImagesContainer>
            <Images images={content.images} />
          </ImagesContainer>
        )}
      </Container>
    </HeroContainer>
  );
};

export default ContactHero;
