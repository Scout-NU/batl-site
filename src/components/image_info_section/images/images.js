import React from "react";
import GreenCirle from "../../../images/sprinkles/green-circle.svg";
import YellowWedge from "../../../images/sprinkles/right-wedge-yellow.svg";
import { RoundImage } from "../../styles/styles";
import {
  DoubleImageContainer,
  LargeImageContainer,
  MediumImageContainer,
  RowOne,
  RowTwo,
  SmallImageContainer,
  SprinkleMedium,
  SprinkleSmall,
} from "./styled";

const Images = ({ images, variant }) => {
  return images.length < 2 ? (
    <LargeImageContainer>
      <RoundImage
        src={images[0].fields.file.url}
        alt={images[0].fields.description}
      />
    </LargeImageContainer>
  ) : (
    <DoubleImageContainer>
      <RowOne variant={variant}>
        <SmallImageContainer>
          <RoundImage
            src={images[0].fields.file.url}
            alt={images[0].fields.description}
          />
        </SmallImageContainer>
        <SprinkleSmall variant={variant} src={GreenCirle} alt="" />
      </RowOne>
      <RowTwo variant={variant}>
        <MediumImageContainer>
          <RoundImage
            src={images[1].fields.file.url}
            alt={images[1].fields.description}
          />
        </MediumImageContainer>
        <SprinkleMedium variant={variant} src={YellowWedge} alt="" />
      </RowTwo>
    </DoubleImageContainer>
  );
};

export default Images;
