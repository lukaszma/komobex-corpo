import styled from "styled-components"

export const MenuWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const StyledMenuList = styled.ul`
  text-align: center;
`
export const StyledMenuItem = styled.li`
  padding: 10px 0;
  font-size: 35px;
  cursor: pointer;
  list-style: none;
  padding: 20px 0;

  &:hover {
    color: #ff431f;
  }

  a {
    color: inherit;
  }
`

export const StyledSidebar = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  position: fixed;
  z-index: 30;
`

export const CloseButton = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;

  &:hover {
    &::after,
    &::before {
      background-color: #ff431f;
    }
  }

  &::after,
  &::before {
    content: " ";
    width: 38px;
    height: 3px;
    background-color: #4a4a4a;
    position: absolute;
    top: 14px;
    right: -4px;
  }

  &::after {
    transform: rotate(45deg);
  }

  &::before {
    transform: rotate(-45deg);
  }
`
