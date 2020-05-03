import styled from "styled-components"

export const WorkWrapper = styled.ul`
  .remove-btn {
    margin-right: 0.5rem;
  }

  .item-enter {
    opacity: 0;
  }
  .item-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  .item-exit {
    opacity: 1;
  }
  .item-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in;
  }
  .item-enter-done {
    transition: all 4s ease-in 1s;
  }

  /* .work-item {
    transition: all 7500ms ease-in 7000ms;
  } */
`
