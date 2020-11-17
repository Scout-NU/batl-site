import styled from 'styled-components'
import { RoundImage } from '../../styles/styles'

export const LargeImage = styled(RoundImage).attrs((props) => ({
  className: "col-10 col-md-7 col-lg-12"
}))``

export const SmallImage = styled(RoundImage).attrs((props) => ({
  className: "col-6"
}))``

export const MediumImage = styled(RoundImage).attrs((props) => ({
  className: "col-8"
}))``

export const DoubleImageContainer = styled.div.attrs((props) => ({
  className: "mt-n5 mt-lg-auto"
}))``

export const RowOne = styled.div.attrs((props) => ({
  className: `row ${!props.variant && 'justify-content-end'}`
}))``

export const RowTwo = styled.div.attrs((props) => ({
  className: `row ${props.variant && 'justify-content-end'}`
}))``