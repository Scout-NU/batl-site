import { navigate } from "gatsby";
import React from "react";
import FilledYellow from "../../images/sprinkles/filled-yellow.svg";
import OutlinedNavy from "../../images/sprinkles/outlined-navy.svg";
import { Button, H1, P2, PRIMARY_GREY, RichText } from "../styles/styles";
import {
  ButtonText,
  ColorBlockWrapper,
  ColorSection,
  Container,
  Content,
  Header,
  OneColumn,
  SprinkleContainer,
  SprinkleNavy,
  SprinkleYellow,
  TwoColumn,
} from "./styled";

const ColorBlock = ({ content, color }) => {
  const buttonContent = content.callToAction.fields;

  return (
    <ColorBlockWrapper className="container-fluid p-0">
      <ColorSection color={color}>
        <Container>
          <Header>
            <H1>{content.heading}</H1>
          </Header>
        </Container>
        <Content>
          <OneColumn>
            <RichText document={content.richDescription} />
            <Button
              className="mt-4"
              onClick={() => navigate(`${buttonContent.buttonLink}`)}
              color={PRIMARY_GREY}
            >
              <ButtonText>
                <P2>{buttonContent.label}</P2>
              </ButtonText>
            </Button>
          </OneColumn>
          <TwoColumn>
            <RichText document={content.richDescription} />
            <Button
              className="mt-4"
              onClick={() => navigate(`${buttonContent.buttonLink}`)}
              color={color}
            >
              <ButtonText>
                <P2>{buttonContent.label}</P2>
              </ButtonText>
            </Button>
          </TwoColumn>
        </Content>
        <SprinkleContainer>
          <SprinkleYellow src={FilledYellow} />
          <SprinkleNavy src={OutlinedNavy} />
        </SprinkleContainer>
      </ColorSection>
    </ColorBlockWrapper>
  );
};

export default ColorBlock;
