import React from "react";
import { H1 } from "../../styles/styles";
import {
  ColorBlock,
  ColorOverlay,
  Container,
  HeroImage,
  HeroImageContainer,
  HpHeroContainer,
} from "./styled";

const HpHero = ({ content }) => {
  return (
    <HpHeroContainer>
      <HeroImageContainer>
        <HeroImage
          image={content.imageSrc.file.url}
          role="img"
          aria-label={content.imageSrc.description}
        />
      </HeroImageContainer>
      <ColorOverlay>
        <ColorBlock>
          <Container>
            <H1 className="mb-0">{content.heading}</H1>
          </Container>
        </ColorBlock>
      </ColorOverlay>
    </HpHeroContainer>
  );
};

export default HpHero;
