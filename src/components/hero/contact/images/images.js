import React from "react";
import FilledYellow from "../../../../images/sprinkles/filled-yellow.svg";
import {
  ImageContainer,
  MediumImage,
  RowOne,
  RowThree,
  RowTwo,
  Sprinkle,
  SprinkleCircle,
} from "./styled";

const Images = ({ images }) => {
  return (
    <ImageContainer>
      <RowOne>
        <MediumImage
          src={images[0].fields.file.url}
          alt={images[0].fields.description}
        />
        <Sprinkle />
      </RowOne>
      <RowTwo>
        <MediumImage
          src={images[1].fields.file.url}
          alt={images[1].fields.description}
        />
      </RowTwo>
      <RowThree>
        <MediumImage
          src={images[2].fields.file.url}
          alt={images[2].fields.description}
        />
        <SprinkleCircle src={FilledYellow} />
      </RowThree>
    </ImageContainer>
  );
};

export default Images;
