import React from "react";
import { H1, H2, P1 } from "../styles/styles";
import {
  BleedBreakPoint,
  Content,
  Description,
  ImageWrapper,
  ContentDescription,
  Container,
  FlexWrapper,
} from "./styled";

const MissionStatement = ({ content }) => {
  return (
    <>
      <FlexWrapper>
        <Container>
          <H2>Our Vision</H2>
          <H1>{content.statement}</H1>
          <Description className="d-block d-md-none">
            <P1>{content.description}</P1>
          </Description>
        </Container>
        <BleedBreakPoint>
          <Content>
            <Description className="col-xl-5">
              <ContentDescription>{content.description}</ContentDescription>
            </Description>
            <ImageWrapper className="col-xl-7">
              <img alt={content.imageSrc.fileName} src={content.imageSrc.url} />
            </ImageWrapper>
          </Content>
        </BleedBreakPoint>
        <ImageWrapper className="d-block d-md-none mb-5 align-self-end">
          <img alt={content.imageSrc.fileName} src={content.imageSrc.url} />
        </ImageWrapper>
      </FlexWrapper>
    </>
  );
};

export default MissionStatement;
