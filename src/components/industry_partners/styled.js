import styled from "styled-components";
import {
  MIN_LG_DESKTOP_SIZE,
  MIN_MD_DESKTOP_SIZE,
  MIN_MOBILE_SIZE,
  MIN_SM_DESKTOP_SIZE,
  MIN_TABLET_SIZE,
  OVERLAY_ZINDEX,
} from "../../constants/constants";

export const Images = styled.div.attrs({
  className: "col-12 p-0 d-flex",
})`
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const ImageWrapper = styled.div.attrs({ className: "container my-5" })``;

export const ColorSection = styled.div.attrs({
  className: "container my-5 py-5",
})`
  background-color: ${(props) => props.color};
`;

export const SprinkleContainer = styled.div`
  position: relative;
`;

export const Sprinkle = styled.img.attrs({ alt: "" })`
  position: absolute;
  right: -30px;
  width: 40px;
  z-index: ${OVERLAY_ZINDEX};
  bottom: -93px;

  @media (min-width: ${MIN_MOBILE_SIZE}) {
    width: 35px;
    right: -18px;
    bottom: 970px;
  }

  @media (min-width: ${MIN_TABLET_SIZE}) {
    width: 50px;
    right: -25px;
    bottom: -180px;
  }

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    width: 68px;
    right: -47px;
    bottom: -145px;
  }

  @media (min-width: ${MIN_MD_DESKTOP_SIZE}) {
    width: 68px;
    right: -50px;
    bottom: -145px;
  }

  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    width: 68px;
    right: -45px;
    bottom: -145px;
  }
`;

export const Container = styled.div.attrs({
  className: "container",
})`
  margin-bottom: 10%;
  margin-top: 10%;
`;
