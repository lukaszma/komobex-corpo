import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const HeroContainer = styled(BackgroundImage)`
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 100vh;
`

export const StyledHeader = styled.div`
  position: relative;
  .header-page {
    min-height: 0;
  }

  @keyframes fade {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fade {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
    to {
      opacity: 1;
    }
  }

  .blink {
    animation: fade 2000ms infinite;
    -webkit-animation: fade 2000ms infinite;
  }

  .main-page-arrow {
    border: solid white;
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 14px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    bottom: 100px;
    position: absolute;
    left: 50%;
    cursor: pointer;
  }

  header {
    min-height: 50px;
    background-color: #fff !important;
    position: fixed !important;
    top: 25px;
    line-height: 18px;
    transition: top 300ms ease-out;
    display: flex;
    padding: 10px 0;
    right: 60px;
    left: 60px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 544px) {
      left: 30px;
      right: 30px;
    }

    &.sticky-bar {
      top: 0;
      left: 0;
      right: 0;
    }

    .container {
      width: 100%;
      display: flex;
      align-items: center;

      .site-branding {
        .title-image {
          padding-top: 0px;

          img {
            max-height: none !important;
            margin-bottom: 0;
          }
        }
      }

      .main-navigation {
        .menu-toggle {
          display: none;

          @media screen and (max-width: 991px) {
            display: block;
          }

          float: right;
          background: #fff;
          border: none;
          font-size: 20px;
          outline: none;

          &:hover {
            color: #f86040;
          }
        }
        .nav-menu {
          display: flex;
          justify-content: center;
          float: none;

          @media screen and (max-width: 991px) {
            display: none;
          }

          .menu-item {
            &.current-menu-item {
              a {
                color: #f86040 !important;
                text-decoration: none;
              }
            }
            a {
              font-size: 14px;
              color: #000;
              font-weight: 600 !important;
              text-transform: capitalize;

              &:hover {
                color: #f86040;
              }
            }
          }
        }
      }
    }
  }

  .header-caption {
    padding: 0;
    margin-top: 186px;
    text-align: center;

    .caption-title {
      font-weight: 600;
      text-transform: lowercase;
      font-size: 27px;
      font-style: italic;
      text-shadow: 1px 1px #000;
    }
  }

  .contact {
    position: absolute;
    bottom: 15px;
    left: 50px;
    font-size: 14px;
    color: #fff;

    .contact-item {
      display: inline-block;

      .contact-label {
        padding-right: 5px;
      }

      .value {
        font-weight: 600;
        &.accent {
          color: #f86040;
        }
      }
    }
  }
`
