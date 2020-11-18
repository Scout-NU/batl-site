import styled from 'styled-components'
import { PRIMARY_YELLOW } from "../../styles/styles"

export const ColorBlock = styled.div`
  background-color: ${PRIMARY_YELLOW};
  position: relative;
`

export const Container = styled.div`
  padding: 15px 0;
  position: relative;

  @media (min-width: 576px) {
    padding: 55px 0;
  }

  @media (min-width: 992px) {
    max-width: 960px;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const ContentContainer = styled.div.attrs((props) => ({
  className: "col-md-6 col-lg-5",
}))``

export const SideImage = styled.img.attrs((props) => ({
  className: 'd-none d-md-block'
}))`
  margin-bottom: 0;
  width: 50%;
  height: 600px;
  object-fit: cover;
  position: absolute;
  right: 0;
  bottom: -75px;
`

export const FullBleedImage = styled.img.attrs((props) => ({
  className: 'd-md-none'
}))`
  margin-bottom: 0;`