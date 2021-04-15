import React from "react";
import { H2, RichText } from "../../styles/styles";
import {
  Content,
  ContentWrapper,
  Dot,
  Graphic,
  Image,
  Indent,
  MobileImage,
  MobileImageContainer,
  MobileSprinkle,
  SizeContainer,
  Sprinkle,
  Title,
} from "./styled";

const TimelineMoment = ({ indent, content, sprinkle }) => {
  return (
    <div>
      {content.image && (
        <MobileImageContainer indent={indent}>
          <MobileSprinkle indent={indent} src={sprinkle} />
          <SizeContainer>
            <MobileImage
              src={content.image.fields.file.url}
              alt={content.image.fields.description}
            />
          </SizeContainer>
        </MobileImageContainer>
      )}
      <ContentWrapper>
        <Indent dateExists={content.year} size={indent}>
          <Dot />
        </Indent>
        <Content>
          {content.year && <H2>{content.year}</H2>}
          <Title>{content.title}</Title>
          <RichText document={content.richDescription} />
        </Content>
        {content.image && (
          <Graphic indent={indent}>
            <Image
              src={content.image.fields.file.url}
              alt={content.image.fields.description}
            />
            <Sprinkle indent={indent} src={sprinkle} />
          </Graphic>
        )}
      </ContentWrapper>
    </div>
  );
};

export default TimelineMoment;
