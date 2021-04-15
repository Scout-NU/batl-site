import styled from "styled-components";

export const LargeImageContainer = styled.div.attrs({
  className: "col-10 col-md-7 col-lg-12",
})``;

export const SmallImageContainer = styled.div.attrs({
  className: "col-6",
})``;

export const MediumImageContainer = styled.div.attrs({
  className: "col-8",
})``;

export const DoubleImageContainer = styled.div.attrs({
  className: "mt-n5 mt-lg-auto",
})``;

export const RowOne = styled.div.attrs((props) => ({
  className: `row ${!props.variant && "justify-content-end"}`,
}))``;

export const RowTwo = styled.div.attrs((props) => ({
  className: `row ${props.variant && "justify-content-end"}`,
}))``;

export const SprinkleMedium = styled.img`
  position: absolute;
  width: 50%;
  transform: ${(props) =>
    props.variant
      ? "translate(9px, -12px);"
      : "translate(-8px,-12px) scaleX(-1);"};
  z-index: -1;
`;

export const SprinkleSmall = styled.img`
  position: absolute;
  width: 22%;
  transform: translate(-10px, -12px);
  z-index: -1;
`;
