import { Link } from "gatsby";
import styled from "styled-components";
import { MAX_ZINDEX } from "../../constants/constants";
import { PRIMARY_YELLOW, TEXT_BLACK } from "../styles/styles";

export const NavButton = styled.button`
  background-color: transparent;
  border: 1px solid ${TEXT_BLACK};
  padding: 8px 20px;

  :hover {
    color: white;
    background-color: ${TEXT_BLACK};
  }
`;

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 0;
`;

export const NavContainer = styled.div.attrs({
  className:
    "container align-items-center align-items-md-baseline pb-2 pb-md-0",
})`
  display: flex;
  justify-content: space-between;
  padding: 15px 0 0 0;
  color: ${TEXT_BLACK};
  align-items: end;
`;

export const NavPages = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: baseline;
`;

export const NavItem = styled.div`
  color: black;
  text-decoration: none;
  padding-bottom: 15px;d
`;

export const LogoContainer = styled.div``;

export const NavLink = styled(Link).attrs({ className: "pb-2 m-0" })`
  border-bottom: 4px solid rgba(56, 206, 194, 0);
  width: 95px;
  text-align: center;

  :hover {
    text-decoration: none;
    border-bottom: 4px solid ${PRIMARY_YELLOW};
  }
`;

export const FixedContainer = styled.div.attrs({
  className: "container-fluid",
})`
  position: fixed;
  z-index: ${MAX_ZINDEX};
  background-color: white;
  top: 48px; // Height of the Northeastern header
`;

export const OffsetBody = styled.div`
  height: 100px;
`;

export const StyledHeader = styled.header`
  margin-bottom: -18px;
`;
