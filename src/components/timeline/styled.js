import styled from "styled-components";
import { RoundImage, TEXT_BLACK } from "../../components/styles/styles";
import { MIN_SM_DESKTOP_SIZE } from "../../constants/constants";

export const Container = styled.div.attrs({ className: "container" })`
  margin-top: 5em;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    margin-top: 10em;
  }
`;

export const Line = styled.div`
  border-left: 1px solid ${TEXT_BLACK};
`;

export const ImageContainer = styled.div`
  position: relative;
  text-align: center;
`;

export const MediumImage = styled(RoundImage).attrs({ className: "col-8" })``;

export const Sprinkle = styled.img.attrs({
  alt: "A decorative element",
  className: "col-4 position-absolute",
})`
  left: 50%;
  top: -10%;
`;
