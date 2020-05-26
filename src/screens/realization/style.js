import styled from "styled-components"
import { TabPanel } from "react-tabs"

export const ReferenceTab = styled(TabPanel)`
  .descriptionHtml {
    margin-bottom: 50px;
  }

  canvas {
    margin: 0 auto;
  }
`

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 0;
  background-color: #f86040;

  &.left {
    margin-right: 5px;
  }

  &.right {
    margin-left: 5px;
  }

  &:focus,
  &:active {
    border: none !important;
    outline: none !important;
  }

  &:hover {
    background-color: #F8563C;
  }
`
