import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const StyledOptions = styled.div`
  min-height: 500px;
  position: relative;

  .image-container {
    width: 130%;
    top: 0;
    bottom: 0;
    left: -15%;
    position: absolute;
  }

  .image {
    cursor: pointer;
    background-size: cover;
    position: relative;
    overflow: hidden;
    width: 50%;
    height: 100%;
    display: inline-block;
    color: white;
    transition: filter 0.2s, color 0.2s;

    .label {
      font-family: "Oswald", sans-serif;
      text-shadow: 2px 2px 3px #000000;
      font-weight: bold;
      font-size: 7.5vw;
      margin-left: 5%;
      margin-right: 5%;
      line-height: 1.2;
    }
  }
`
export const StyledBackgroundImage = styled(BackgroundImage)`
  cursor: pointer;
  background-size: cover;
  position: relative;
  overflow: hidden;
  width: 50%;
  height: 100%;
  display: inline-block;
  color: white;
  transition: filter 0.2s, color 0.2s;

  &:hover {
    filter: saturate(40%) brightness(160%);
  }

  &.left-image {
    clip-path: polygon(0 0, 100% 0, 59% 100%, 0 100%);
    left: 10%;
    float: left;
  }

  &.right-image {
    clip-path: polygon(41% 0, 100% 0, 100% 100%, 0 100%);
    left: -10%;
    text-align: right;
  }
`

export const LeftBackgroundImage = styled(BackgroundImage)`
  clip-path: polygon(0 0, 100% 0, 59% 100%, 0 100%);
  left: 10%;
  float: left;
  &:hover {
    filter: saturate(40%) brightness(160%);
  }

  .label {
    top: 5%;
    position: relative;
  }
`
export const RightBackgroundImage = styled(BackgroundImage)`
  clip-path: polygon(41% 0, 100% 0, 100% 100%, 0 100%);
  left: -10%;
  text-align: right;

  &:hover {
    filter: saturate(40%) brightness(160%);
  }

  .label {
    bottom: 5%;
    right: 2%;
    position: absolute;
  }
`
