import styled from "styled-components";
import { MIN_TABLET_SIZE } from "../../constants/constants";

export const FacultyContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5em 0;

  h3 {
    margin-bottom: 12px;
  }
`;

export const Faculty = styled.div`
  flex: 33%;
  max-width: 33%;
  margin-bottom: 36px;
  @media (max-width: ${MIN_TABLET_SIZE}) {
    flex: 50%;
    max-width: 50%;
  }
`;
