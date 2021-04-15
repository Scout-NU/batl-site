import styled from "styled-components";
import {
  MIN_LG_DESKTOP_SIZE,
  MIN_MOBILE_SIZE,
  MIN_SM_DESKTOP_SIZE,
  MIN_TABLET_SIZE,
  OVERLAY_ZINDEX,
} from "../../../constants/constants";
import { BG_WHITE, PRIMARY_NAVY } from "../../styles/styles";

export const ColorBlock = styled.div`
  color: ${BG_WHITE};
  background-color: ${PRIMARY_NAVY};
  position: relative;
  margin-bottom: 10em;
`;

export const Container = styled.div.attrs({ className: "container" })`
  padding: 15px 0;
  position: relative;

  @media (min-width: ${MIN_MOBILE_SIZE}) {
    padding: 55px 0;
  }
`;

export const ContentContainer = styled.div.attrs({
  className: "col-12 col-md-6 col-lg-5 px-md-0",
})``;

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
  right: 0;
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
    right: 0;
    bottom: -75px;
  }
`;

export const FullBleedImage = styled.img.attrs({ className: "d-md-none" })`
  margin-bottom: 0;
`;

export const Sprinkle = styled.img.attrs({ alt: "" })`
  position: absolute;
  right: 0;
  width: 40px;
  z-index: ${OVERLAY_ZINDEX};

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    width: 68px;
  }
`;
