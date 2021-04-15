import { Link, navigate } from "gatsby";
import React from "react";
import {
  CONTACT_LINK,
  HOMEPAGE_LINK,
  WHATWEDO_LINK,
  WHOWEARE_LINK,
} from "../../constants/constants";
import * as logo from "../../images/batl-logo.svg";
import { P1 } from "../styles/styles";
import Hamburger from "./hamburger/hamburger";
import {
  FixedContainer,
  Logo,
  LogoContainer,
  NavButton,
  NavContainer,
  NavItem,
  NavLink,
  NavPages,
  OffsetBody,
  StyledHeader,
} from "./styled";

const Nav = () => (
  <StyledHeader>
    <FixedContainer>
      <NavContainer>
        <LogoContainer>
          <Link to={HOMEPAGE_LINK}>
            <Logo
              src={logo}
              alt="The BATL logo, which is a beaker inside of a yellow circle."
            />
          </Link>
        </LogoContainer>
        <Hamburger className="col-2" />
        <NavPages className="col-8 col-lg-6 d-none d-md-flex align-middle">
          <NavLink
            to={HOMEPAGE_LINK}
            activeStyle={{ borderBottom: "4px solid #FFD43D" }}
            className="text-decoration-none"
          >
            <NavItem>
              <P1>Home</P1>
            </NavItem>
          </NavLink>
          <NavLink
            to={WHOWEARE_LINK}
            activeStyle={{ borderBottom: "4px solid #FFD43D" }}
            className="text-decoration-none"
          >
            <NavItem>
              <P1>Who We Are</P1>
            </NavItem>
          </NavLink>
          <NavLink
            to={WHATWEDO_LINK}
            activeStyle={{ borderBottom: "4px solid #FFD43D" }}
            className="text-decoration-none"
          >
            <NavItem>
              <P1>What We Do</P1>
            </NavItem>
          </NavLink>
          <NavButton onClick={() => navigate(CONTACT_LINK)}>
            <P1>Contact</P1>
          </NavButton>
        </NavPages>
      </NavContainer>
    </FixedContainer>
    <OffsetBody />
  </StyledHeader>
);

export default Nav;
