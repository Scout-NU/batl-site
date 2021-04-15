import React from "react";
import { BottomImageContainer, Container, Image } from "./styled";
const BottomImage = ({ content }) => {
  return (
    <Container>
      <BottomImageContainer>
        <Image
          role="img"
          aria-label={content.fields.description}
          image={content.fields.file.url}
        ></Image>
      </BottomImageContainer>
    </Container>
  );
};

export default BottomImage;
