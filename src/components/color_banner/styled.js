import styled from "styled-components";
import {
  MIN_SM_DESKTOP_SIZE,
  MIN_TABLET_SIZE,
} from "../../constants/constants";
import { H1, PRIMARY_YELLOW } from "../styles/styles";

export const HideOverflow = styled.div`
  overflow-x: hidden;
`;

export const Container = styled.div.attrs({
  className: "container",
})`
  // margin: 10em 0;
`;

export const Content = styled.div.attrs((props) => ({
  className: `${!props.left && "col-11"} ${
    props.wide ? "col-md-9" : "col-md-7 col-lg-6"
  }`,
}))`
  left: ${(props) => (props.left ? 0 : "8.33%")};

  @media (min-width: ${MIN_TABLET_SIZE}) {
    left: ${(props) => (props.left ? 0 : "18.75%")};
  }

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    left: 4%;
  }
`;

export const Banner = styled.div`
  background-color: ${PRIMARY_YELLOW};
  margin-top: 24px;
  ${(props) =>
    props.left
      ? `margin-left: -5000px;
    padding-left: 5000px;
    margin-right: -15px;
    padding-right: 15px;`
      : `margin-left: -15px;
    padding-left: 15px;
    margin-right: -5000px;
    padding-right: 5000px;`}

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    margin-top: 36px;
  }
`;

export const Heading = styled(H1)`
  top: -24px;
  position: relative;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    top: -36px;
  }
`;

export const Columns = styled.span`
  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    column-count: 2;
  }
`;
