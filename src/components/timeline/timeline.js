import React from "react";
import FilledNavy from "../../images/sprinkles/filled-navy.svg";
import FilledYellow from "../../images/sprinkles/filled-yellow.svg";
import GreenWedge from "../../images/sprinkles/left-wedge-green.svg";
import NavyWedge from "../../images/sprinkles/left-wedge-navy.svg";
import YellowWedge from "../../images/sprinkles/left-wedge-yellow.svg";
import OutlinedGreen from "../../images/sprinkles/outlined-green-large.svg";
import OutlinedNavy from "../../images/sprinkles/outlined-navy-large.svg";
import {
  Container,
  ImageContainer,
  Line,
  MediumImage,
  Sprinkle,
} from "./styled";
import TimelineMoment from "./timeline_moment/timelineMoment";

const Timeline = ({ moments, image }) => {
  const sprinkles = [
    OutlinedNavy,
    GreenWedge,
    YellowWedge,
    FilledNavy,
    YellowWedge,
    GreenWedge,
    OutlinedGreen,
    NavyWedge,
  ];
  return (
    <Container>
      <Line>
        {moments.map((moment, i) => (
          <TimelineMoment
            key={i}
            indent={i % 3}
            content={moment.fields}
            sprinkle={sprinkles[i % 8]}
          />
        ))}
      </Line>
      <ImageContainer>
        <Sprinkle src={FilledYellow} />
        <MediumImage src={image.file.url} alt={image.description} />
      </ImageContainer>
    </Container>
  );
};

export default Timeline;
