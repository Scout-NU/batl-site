import React from "react";
import DotGrid from "../../images/sprinkles/dot-grid.svg";
import { H1, H2, RichText } from "../styles/styles";
import {
  BleedBreakPoint,
  Container,
  Content,
  ContentDescription,
  Description,
  FlexWrapper,
  ImageWrapper,
  Sprinkle,
  SprinkleWrapper,
} from "./styled";

const MissionStatement = ({ content }) => {
  return (
    <>
      <FlexWrapper>
        <Container>
          <H2>Our Vision</H2>
          <H1>{content.statement}</H1>
          <Description className="d-block d-md-none">
            <RichText document={content.richDescription} />
          </Description>
        </Container>
        <BleedBreakPoint>
          <Content>
            <Description className="col-xl-4">
              <ContentDescription>
                <RichText document={content.richDescription} />
              </ContentDescription>
            </Description>
            <ImageWrapper className="col-xl-7">
              <img
                alt={content.imageSrc.description}
                src={content.imageSrc.file.url}
              />
            </ImageWrapper>
          </Content>
        </BleedBreakPoint>
        <ImageWrapper className="d-block d-md-none mb-5 align-self-end">
          <img
            alt={content.imageSrc.description}
            src={content.imageSrc.file.url}
          />
        </ImageWrapper>
        <SprinkleWrapper>
          <Sprinkle src={DotGrid} alt="" />
        </SprinkleWrapper>
      </FlexWrapper>
    </>
  );
};

export default MissionStatement;
