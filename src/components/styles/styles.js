import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import React from "react";
import styled from "styled-components";
import { MIN_SM_DESKTOP_SIZE } from "../../constants/constants";

// Colors
export const PRIMARY_YELLOW = "#FFD43D";
export const PRIMARY_GREEN = "#74D395";
export const PRIMARY_NAVY = "#023047";
export const PRIMARY_RED = "#FF6752";
export const PRIMARY_ORANGE = "#FF9D42";
export const PRIMARY_GREY = "#F4F4F4";

export const TEXT_BLACK = "#1A1A1A";
export const BG_WHITE = "#FFFFFF";

// Fonts
export const H1 = styled.h1`
  font-family: "Work Sans", sans-serif;
  font-size: 36px;
  margin-bottom: 35px;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    font-size: 52px;
    margin-bottom: 30px;
  }
`;

export const H2 = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-style: italic;
  font-weight: 300;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    font-size: 22px;
  }
`;

export const H2Body = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  line-height: 31px;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    font-size: 16px;
  }
`;

export const H3 = styled.h3`
  font-family: "Work Sans", sans-serif;
  font-size: 15px;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    font-size: 24px;
  }
`;

export const P1 = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 32px;
  margin-bottom: 0;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    font-size: 16px;
    line-height: 30px;
  }
`;

export const P2 = styled.p`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin: 0;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    font-size: 16px;
  }
`;

export const SmallText = styled.small`
  font-family: "Open Sans", sans-serif;
`;

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <P1>{children}</P1>,
  },
};

export const RichText = ({ document }) => {
  return <>{documentToReactComponents(document, options)}</>;
};

// Images
export const RoundImage = styled.img`
  border-radius: 50%;
`;

export const Button = styled.button`
  text-transform: uppercase;
  border: 2px solid ${TEXT_BLACK};
  background-color: transparent;
  background-repeat: no-repeat;

  &:hover {
    background-color: ${TEXT_BLACK};
    color: ${(props) => (props.color ? props.color : "white")};
  }
`;
