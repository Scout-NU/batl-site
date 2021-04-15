import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import DotGrid from "../../images/sprinkles/dot-grid.svg";
import { H1, H2, P1 } from "../styles/styles";
import {
  ColorWrapper,
  Container,
  QuotationMark,
  Sprinkle,
  SprinkleContainer,
} from "./styled";

const Testimonial = ({ content, color }) => {
  return (
    <>
      <ColorWrapper color={color}>
        <Container>
          <QuotationMark>&ldquo;</QuotationMark>
          <H1>{documentToReactComponents(content.richDestimonial)}</H1>
          <P1>{content.name}</P1>
          {content.position && <H2>{content.position}</H2>}
        </Container>
      </ColorWrapper>
      <SprinkleContainer>
        <Sprinkle src={DotGrid} alt="" />
      </SprinkleContainer>
    </>
  );
};

export default Testimonial;
