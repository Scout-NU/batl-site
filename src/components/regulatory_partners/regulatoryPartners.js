import React from "react";
import Image from "./images/image";
import { Container, Heading, Images, ImageWrapper } from "./styled";

const RegulatoryPartners = ({ content }) => {
  return (
    <Container>
      <ImageWrapper>
        <Heading>Regulatory Partners</Heading>
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
    </Container>
  );
};

export default RegulatoryPartners;
