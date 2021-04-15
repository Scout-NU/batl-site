import React from "react";
import Circles from "../../images/sprinkles/vertical-navy.svg";
import Image from "./images/image";
import {
  ColorSection,
  Container,
  Images,
  ImageWrapper,
  Sprinkle,
  SprinkleContainer,
} from "./styled";

const IndustryPartners = ({ content, color }) => {
  return (
    <Container>
      <ColorSection color={color}>
        <ImageWrapper>
          <Images>
            {content.map((image, i) => (
              <Image
                key={i}
                content={image.fields.file.url}
                alt={image.fields.description}
              />
            ))}
          </Images>
        </ImageWrapper>
        <SprinkleContainer>
          <Sprinkle src={Circles} />
        </SprinkleContainer>
      </ColorSection>
    </Container>
  );
};

export default IndustryPartners;
