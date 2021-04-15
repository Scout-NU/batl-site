import { navigate } from "gatsby";
import React from "react";
import { Button, H1, H2, P2, RichText } from "../styles/styles";
import Images from "./images/images";
import {
  ButtonText,
  Container,
  ContentContainer,
  ImagesContainer,
} from "./styled";

const ImageInfoSection = ({ id, section, content, variant }) => {
  const buttonContent = content.callToAction
    ? content.callToAction.fields
    : null;

  return (
    <Container id={id}>
      <ImagesContainer>
        <Images images={content.images} variant={variant} />
      </ImagesContainer>
      <ContentContainer>
        <H2>{section}</H2>
        <H1>{content.heading}</H1>
        <RichText document={content.richDescription} />
        {buttonContent && (
          <Button
            className="mt-4"
            onClick={() => navigate(`${buttonContent.buttonLink}`)}
          >
            <ButtonText>
              <P2>{buttonContent.label}</P2>
            </ButtonText>
          </Button>
        )}
      </ContentContainer>
    </Container>
  );
};

export default ImageInfoSection;
