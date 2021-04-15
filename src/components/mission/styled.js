import styled from "styled-components";
import {
  MIN_LG_DESKTOP_SIZE,
  MIN_MD_DESKTOP_SIZE,
  MIN_SM_DESKTOP_SIZE,
  MIN_TABLET_SIZE,
} from "../../constants/constants";

export const ImageWrapper = styled.div.attrs({ className: "mb-5" })`
  float: right;
  padding: 0 !important;
  width: 80%;

  @media (min-width: ${MIN_TABLET_SIZE}) {
    width: 60%;
  }
`;

export const Description = styled.div.attrs({
  className: "col-12 col-md-4 col-lg-3 mb-4 pr-4",
})`
  padding: 0 !important;

  @media (min-width: ${MIN_TABLET_SIZE}) {
    padding-left: 8vw !important;
  }

  @media (min-width: 1440px) {
    padding-left: 11.5vw !important;
  }

  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    padding-left: 0 !important;
  }
`;

export const BleedBreakPoint = styled.div`
  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    max-width: 1140px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Content = styled.div.attrs({
  className: "d-none d-md-inline-flex",
})`
  justify-content: space-between;

  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    max-width: 1140px;
    width: 100%;
    margin-right: auto !important;
    margin-left: auto !important;
  }
`;

export const ContentDescription = styled.span.attrs({ className: "pr-3" })``;

export const Container = styled.div.attrs({ className: "container" })``;

export const FlexWrapper = styled.div.attrs({
  className: "d-flex flex-column my-5",
})`
  margin: 5% 0;
`;

export const SprinkleWrapper = styled.div`
  position: relative;
`;

export const Sprinkle = styled.img`
  position: absolute;
  width: 80%;
  right: 26px;
  bottom: 30px;
  z-index: -1;

  @media (min-width: ${MIN_TABLET_SIZE}) {
    width: 66%;
    right: 26px;
    bottom: 65px;
  }

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    width: 74%;
    right: 41px;
    bottom: 100px;
  }

  @media (min-width: ${MIN_MD_DESKTOP_SIZE}) {
    width: 59%;
    right: 65px;
    bottom: 27px;
  }

  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    width: 690px;
    right: 343px;
    bottom: 23px;
    z-index: -1;
  }
`;
