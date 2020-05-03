import React from "react"
import PropTypes from "prop-types"
import {
  MenuWrapper,
  StyledMenuList,
  StyledMenuItem,
  StyledSidebar,
  CloseButton,
} from "./styles"
import CustomLink from "@components/customLink/customLink"
import { routes } from "@enums/routesEnum"

const Menu = ({ onCloseClick }) => (
  <StyledSidebar>
    <CloseButton onClick={onCloseClick} />
    <MenuWrapper>
      <StyledMenuList>
        {Object.keys(routes).map(routeKey => (
          <StyledMenuItem key={routes[routeKey].to}>
            <CustomLink to={routes[routeKey].to}>
              {routes[routeKey].title}
            </CustomLink>
          </StyledMenuItem>
        ))}
      </StyledMenuList>
    </MenuWrapper>
  </StyledSidebar>
)

Menu.propTypes = {
  onCloseClick: PropTypes.func,
}

export default Menu
