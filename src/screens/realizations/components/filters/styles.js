import styled from "styled-components"

export const FilterItem = styled.li`
  font-size: 11px;
  display: inline-block;
  border: 1px solid;
  border-radius: 50px;
  padding: 5px 12px;
  cursor: pointer;
  color: #777;
  border-color: #777;
  text-transform: uppercase;
  background-color: transparent;
  transition: all 0.1s linear;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &.active {
    border-color: #F86040;
    background-color: #F86040;
    color: #fff;

    @media (hover: hover) {
      &:hover {
        border-color: #777;
        background-color: transparent;
        color: #777;
      }
    }
  }
  &:not(.active) {
    @media (hover: hover) {
      &:hover {
        border-color: #F86040;
        background-color: #F86040;
        color: #fff;
      }
    }
  }
`

export const FiltersList = styled.ul`
  list-style-type: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
`
