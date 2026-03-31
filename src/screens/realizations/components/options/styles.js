import styled from "styled-components"

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

export const LeftBackgroundImage = styled.section`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 50%;
  height: 100%;
  display: inline-block;
  color: white;
  transition: filter 0.2s, color 0.2s;
  clip-path: polygon(0 0, 100% 0, 59% 100%, 0 100%);
  left: 10%;
  float: left;

  &:hover {
    filter: saturate(40%) brightness(160%);
  }

  .label {
    top: 5%;
    position: relative;
    z-index: 1;
  }
`

export const RightBackgroundImage = styled.section`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 50%;
  height: 100%;
  display: inline-block;
  color: white;
  transition: filter 0.2s, color 0.2s;
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
    z-index: 1;
  }
`
