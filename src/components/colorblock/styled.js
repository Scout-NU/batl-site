import styled from "styled-components";
import {
  MIN_LG_DESKTOP_SIZE,
  MIN_MOBILE_SIZE,
  MIN_SM_DESKTOP_SIZE,
  MIN_TABLET_SIZE,
} from "../../constants/constants";

export const ColorBlockWrapper = styled.div.attrs({
  className: "container-fluid p-0",
})`
  margin-top: 10%;
  margin-bottom: 0;
`;

export const ColorSection = styled.div.attrs({
  className: "col-11 my-5 py-5",
})`
  background-color: ${(props) => props.color};
`;

export const TwoColumn = styled.div.attrs({
  className: "d-none d-sm-block col-11 col-md-10 col-lg-8 col-xl-8",
})`
  column-count: 2;
  column-gap: 50px;
`;

export const OneColumn = styled.div.attrs({
  className: "d-block d-sm-none d-col-12",
})``;

export const Header = styled.div.attrs({
  className: "col-12 col-md-8 col-lg-12",
})`
  position: relative;
  top: -75px;
  padding-left: 0 !important;

  @media (min-width: ${MIN_MOBILE_SIZE}) {
    top: -78px;
    padding-left: 5.5% !important;
  }

  @media (min-width: ${MIN_TABLET_SIZE}) {
    top: -91px;
  }

  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    padding-left: 6.5% !important;
  }
`;

export const Content = styled.div.attrs({ className: "container" })`
  padding-left: 0 !important;
  margin-top: -10% !important;

  @media (min-width: ${MIN_MOBILE_SIZE}) {
    padding-left: 4.5% !important;
    margin-top: inherit !important;
  }
`;

export const ButtonText = styled.div`
  margin: 0;
  padding: 15px 25px;
`;

export const Container = styled.div.attrs({ className: "container p-0" })``;

export const SprinkleContainer = styled.div`
  position: relative;
`;

export const SprinkleYellow = styled.img.attrs({
  className: "d-none d-md-block",
  alt: "A yellow decorative element in the shape of a circle.",
})`
  position: absolute;
  width: 197px;
  right: 12px;
  bottom: 445px;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    width: 197px;
    right: -108px;
    bottom: 273px;
  }
`;
export const SprinkleNavy = styled.img.attrs({
  className: "d-none d-md-block",
  alt: "A navy decorative element in the shape of an outlined circle.",
})`
  position: absolute;
  width: 87px;
  right: 141px;
  bottom: 429px;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    width: 87px;
    right: 19px;
    bottom: 250px;
  }
`;
