import styled from "styled-components";
import { Link } from "gatsby";
import {
  PRIMARY_NAVY,
  BG_WHITE,
  TEXT_BLACK,
  H1,
  Button,
} from "../styles/styles";
import {
  MIN_SM_DESKTOP_SIZE,
  MIN_TABLET_SIZE,
} from "../../constants/constants";

export const ColorBlock = styled.div`
  background-color: ${PRIMARY_NAVY};
  color: ${BG_WHITE};
`;

export const Container = styled.div.attrs({ className: "container" })`
  padding-top: 50px;
  padding-bottom: 50px;
  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    padding-top: 72px;
    padding-top: 72px;
  }
`;

export const BigColumn = styled.div.attrs({ className: "col-12 col-md-8" })``;

export const Headline = styled(H1).attrs({
  className: "row col-12 col-xl-6",
})``;

export const Row = styled.div.attrs({ className: "row" })`
  align-items: baseline;
`;

export const HalfRow = styled.div.attrs({ className: "col-6" })``;

export const FooterLink = styled(Link)`
  color: ${BG_WHITE};

  :hover {
    color: ${BG_WHITE};
  }
`;

export const SmallColumn = styled.div.attrs({ className: "col-12 col-md-4" })``;

export const Icons = styled.div.attrs({
  className: "col-4 col-md-6 col-lg-5 d-flex",
})`
  justify-content: space-between;
`;

export const Icon = styled.img`
  width: 18px;
  margin-top: 1.45rem;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    width: 25px;
  }
`;

export const CTA = styled(Button).attrs({
  className: "col-8 col-md-12 col-lg-9",
})`
  background-color: ${BG_WHITE};
  color: ${TEXT_BLACK};
  border: 1px solid ${TEXT_BLACK};
  padding: 1em 0;
  margin-top: 1em;

  :hover {
    background-color: ${PRIMARY_NAVY};
    color: ${BG_WHITE};
    border: 1px solid ${BG_WHITE};
  }
`;

export const Logo = styled.img`
  margin-top: 1.45rem;
  height: 28px;

  @media (min-width: ${MIN_TABLET_SIZE}) {
    height: 33px;
  }
`;