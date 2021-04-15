import styled from "styled-components";
import {
  MIN_LG_DESKTOP_SIZE,
  MIN_MD_DESKTOP_SIZE,
  MIN_MOBILE_SIZE,
  MIN_SM_DESKTOP_SIZE,
  MIN_TABLET_SIZE,
  OVERLAY_ZINDEX,
} from "../../../constants/constants";
import { PRIMARY_NAVY } from "../../styles/styles";

export const ColorBlock = styled.div`
  color: white;
  background-color: ${PRIMARY_NAVY};
  position: relative;
  margin-bottom: 20%;

  @media (max-width: ${MIN_MOBILE_SIZE}) {
    margin-bottom: 20%;
  }

  @media (min-width: ${MIN_TABLET_SIZE}) {
    margin-bottom: 30%;
  }

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    margin-bottom: 28%;
  }

  @media (min-width: ${MIN_MD_DESKTOP_SIZE}) {
    margin-bottom: 25%;
  }
`;

export const Container = styled.div.attrs({ className: "container" })`
  padding: 15px 0;
  position: relative;

  @media (min-width: ${MIN_MOBILE_SIZE}) {
    padding: 55px 0;
  }
`;

export const ContentContainer = styled.div.attrs({
  className: "col-md-6 col-lg-5",
})`
  @media (min-width: ${MIN_TABLET_SIZE}) {
    left: 50%;
  }

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    left: 55%;
  }
`;

export const SideImage = styled.img`
  display: none;

  @media (min-width: ${MIN_TABLET_SIZE}) {
    display: block;
  }

  margin-bottom: 0;
  width: 50%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  bottom: -75px;

  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    display: none;
  }
`;

export const XLImage = styled.img`
  display: none;
  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    display: block;
    margin-bottom: 0;
    width: 50%;
    height: 100%;
    object-fit: cover;
    position: absolute;

    bottom: -75px;
  }
`;

export const FullBleedImage = styled.img.attrs({ className: "d-md-none" })`
  margin-bottom: 0;
`;

export const Sprinkle = styled.img.attrs({
  alt: "A decorative element of three green outlined circles in a row.",
})`
  position: absolute;
  right: 0;
  bottom: -53px;
  width: 150px;
  z-index: ${OVERLAY_ZINDEX};

  @media (max-width: ${MIN_MOBILE_SIZE}) {
    width: 100px;
    right: 0px;
    bottom: -35px;
  }

  @media (min-width: ${MIN_TABLET_SIZE}) {
    width: 150px;
    right: 0px;
    bottom: -50px;
  }

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    width: 200px;
    right: -10px;
    bottom: -60px;
  }

  @media (min-width: ${MIN_MD_DESKTOP_SIZE}) {
    width: 200px;
    right: -20px;
    bottom: -60px;
  }
`;
