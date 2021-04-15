import styled from "styled-components";
import {
  MIN_SM_DESKTOP_SIZE,
  OVERLAY_ZINDEX,
} from "../../../constants/constants";
import { H3, RoundImage, TEXT_BLACK } from "../../styles/styles";

export const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 5em;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    margin-bottom: 15em;
  }
`;

export const Indent = styled.div.attrs((props) => ({
  className: `col-1 ${props.size === 0 ? "col-md-3" : "col-md-6"}`,
}))`
  border-top: 1px dashed ${TEXT_BLACK};
  margin-top: ${(props) => (props.dateExists ? "48px" : "9px")};

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    margin-top: ${(props) => (props.dateExists ? "61px" : "13px")};
  }
`;

export const Dot = styled.span`
  background-color: ${TEXT_BLACK};
  border-radius: 50%;
  width: 12px;
  height: 12px;
  top: -6px;
  right: 0px;
  position: absolute;
`;

export const Content = styled.div.attrs({ className: "col-10 col-md-5" })``;

export const Title = styled(H3)`
  margin-bottom: 1.5em;
`;

export const Graphic = styled.div.attrs({
  className: "d-none d-md-block col-4 position-absolute",
})`
  ${(props) => (props.indent === 0 ? "right" : "left")}: 0;
`;

export const Sprinkle = styled.img.attrs({ alt: "" })`
  position: absolute;
  ${(props) =>
    props.indent === 0
      ? `
  width: 50%;
  right: 0;
  top: -15%;
  `
      : `
  width: 100%;
  transform: translate(-15px, -15px);
  `}
`;

export const Image = styled(RoundImage)`
  margin-bottom: 0;
  z-index: ${OVERLAY_ZINDEX};
  position: relative;
`;

export const MobileImageContainer = styled.div.attrs({
  className: "d-md-none row position-relative",
})`
  flex-direction: ${(props) => (props.indent === 0 ? "row-reverse" : "row")};
`;

export const SizeContainer = styled.div.attrs({ className: "col-8" })``;

export const MobileImage = styled(RoundImage)`
  z-index: ${OVERLAY_ZINDEX};
  position: relative;
`;

export const MobileSprinkle = styled.img.attrs({
  alt: "",
})`
  position: absolute;
  ${(props) =>
    props.indent === 0
      ? `
  width: 33%;
  right: 0;
  top: -15%;
  `
      : `
  width: 66.67%;
  transform: translate(0px, -15px);
  `}
`;
