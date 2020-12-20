import styled from "styled-components";
import { MIN_MOBILE_SIZE } from '../../constants/constants'

export const Images = styled.div.attrs({
  className: "col-12 p-0 d-flex row",
})`
  justify-content: space-between;
  flex-wrap: wrap;

`;

export const ImageWrapper = styled.div.attrs({ className: "container my-5" })`
`;

export const Container = styled.div.attrs({
  className: "container",
})`
  margin-bottom: 10%;
`;