import React from "react";
import DotGrid from "../../images/sprinkles/dot-grid.svg";
import FilledYellow from "../../images/sprinkles/filled-yellow.svg";
import { H1, H2, RichText } from "../styles/styles";
import {
  ColorBlockWrapper,
  ColorSection,
  Container,
  Content,
  Header,
  Header2,
  OneColumn,
  Sprinkle,
  SprinkleContainer,
  SprinkleYellow,
  TwoColumn,
} from "./styled";

const Education = ({ content, color }) => {
  return (
    <>
      <ColorBlockWrapper className="container-fluid p-0">
        <ColorSection color={color}>
          <Container>
            <Header2>
              <H2>Education</H2>
            </Header2>
            <Header>
              <H1>{content.heading}</H1>
            </Header>
          </Container>
          <Content>
            <OneColumn>
              <RichText document={content.richDescription} />
            </OneColumn>
            <TwoColumn>
              <RichText document={content.richDescription} />
            </TwoColumn>
          </Content>
        </ColorSection>
        <SprinkleContainer>
          <SprinkleYellow src={FilledYellow} />
          <Sprinkle src={DotGrid} />
        </SprinkleContainer>
      </ColorBlockWrapper>
    </>
  );
};

export default Education;
