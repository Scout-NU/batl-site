import styled from "styled-components";
import {
  MIN_LG_DESKTOP_SIZE,
  MIN_SM_DESKTOP_SIZE,
  MIN_MD_DESKTOP_SIZE,
  MIN_MOBILE_SIZE,
  MIN_TABLET_SIZE,
} from "../../constants/constants";

export const ColorBlockWrapper = styled.div.attrs({
  className:"container-fluid p-0"
})`
margin: 10% 0;
`

export const ColorSection = styled.div.attrs({
  className: "col-11 my-5 py-5",
})`
  background-color: ${(props) => props.color};
`;

export const TwoColumn = styled.div.attrs({
  className: "d-none d-sm-block col-11 col-md-10 col-lg-8 col-xl-8",
})`
  column-count: 2;
  column-gap: 50px;
`;

export const OneColumn = styled.div.attrs({
  className: "d-block d-sm-none d-col-12",
})``;

export const Header = styled.div.attrs({
  className: "col-sm-8 col-md-7 col-lg-9"   
})`
  position: relative;
  top: -75px;
  padding-left: 0 !important;

  @media (max-width: ${MIN_MOBILE_SIZE}) {
    top: -200px;
    padding-left: 5.5% !important;
  }

  @media (min-width: ${MIN_TABLET_SIZE}) {
    top: -168px;
    left: 40px;
  }

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    left: 50px;  
    top: -200px;
  }

  @media (min-width: ${MIN_MD_DESKTOP_SIZE}) {
    left: 68px;  
    top: -198px;
  }

  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    top: -195px;
    left: 120px;
  }
`;

export const Header2 = styled.div.attrs({
    className: "col-sm-8 col-md-7 col-lg-10"   
  })`
    position: relative;
    top: -75px;
    padding-left: 0 !important;
  
    @media (max-width: ${MIN_MOBILE_SIZE}) {
      top: -190px;
      left: 20px;
    }
  
    @media (min-width: ${MIN_TABLET_SIZE}) {
      top: -150px;
      left: 40px;
    }
  
    @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
      top: -190px;
      left: 50px;  
    }
  
    @media (min-width: ${MIN_MD_DESKTOP_SIZE}) {
      left: 68px;
      top: -190px;
    }
  
    @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
      top: -180px;
      left: 120px;
    }
  `;

export const Content = styled.div.attrs({ className: "container" })`
  padding-left: 0 !important;
  margin-top: -10% !important;

  @media (min-width: ${MIN_MOBILE_SIZE}) {
    padding-left: 4.5% !important;
    margin-top: -10px;
  }
`;

export const ButtonText = styled.div`
  margin: 0;
  padding: 15px 25px;
`;

export const Container = styled.div.attrs({ className: "container p-0" })``;

