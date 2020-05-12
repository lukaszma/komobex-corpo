import styled from "styled-components"

export const ServiceItemList = styled.ul`
  margin-top: 15px;
  padding-left: 1.2rem;

  li {
    position: relative;
    list-style-type: none;
    padding-left: 2.5rem;
    margin-bottom: 0.5rem;

    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 3px;
      width: 5px;
      height: 11px;
      border-width: 0 2px 2px 0;
      border-style: solid;
      border-color: #f86040;
      transform-origin: bottom left;
      transform: rotate(45deg);
    }
  }
`
