import styled from "styled-components"

export const Card = styled.div`
  cursor: pointer;
  position: relative;
  min-height: 300px;
  border-radius: 6px;

  &:hover {
    .block-title {
      text-decoration: underline;
    }
  }

  &.col-xxs-12 {
    @media (max-width: 450px) {
      width: 100%;
    }
  }
`

export const CardsWrapper = styled.section`
  margin: auto;
  max-width: 1300px;
  margin-top: 20px
  /* img {
    max-width: 100%;
  }

  .card-col {
    margin-bottom: 10px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .card {
    cursor: pointer;
    position: relative;
    background: #333;
    width: auto;
    height: 360px;
    border-radius: 6px;
    padding: 2rem;
    color: #aaa;
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2),
      0 0 1rem rgba(0, 0, 0, 0.2);
    overflow: hidden;

    &__image-container {
      margin: -2rem -2rem 1rem -2rem;
      transition: all 0.5s ease-out;
    }

    &__line {
      opacity: 0;
      animation: LineFadeIn 0.8s 0.8s forwards ease-in;
    }

    &__image {
      opacity: 0;
      animation: ImageFadeIn 0.8s 1.4s forwards;
    }

    &__title {
      color: white;
      margin-top: 0;
      font-weight: 800;
      letter-spacing: 0.01em;
    }

    &__content {
      margin-top: -1rem;
      opacity: 0;
      animation: ContentFadeIn 0.8s 1.6s forwards;

      .card-tag {
        &:not(:last-child) {
          margin-right: 5px;
        }
      }
    }

    &__svg {
      position: absolute;
      left: 0;
      top: 60px;
    }

    &:hover {
      .card__image-container {
        transform: rotate(14deg) scale(1.3);
      }
    }
  }

  @keyframes LineFadeIn {
    0% {
      opacity: 0;
      d: path(
        "M 0 300 Q 0 300 0 300 Q 0 300 0 300 C 0 300 0 300 0 300 Q 0 300 0 300 "
      );
      stroke: #fff;
    }
    50% {
      opacity: 1;
      d: path(
        "M 0 300 Q 50 300 100 300 Q 250 300 350 300 C 350 300 500 300 650 300 Q 750 300 800 300"
      );
      stroke: #f78d79;
    }
    100% {
      opacity: 1;
      d: path(
        "M -2 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 802 400"
      );
      stroke: #ff431f;
    }
  }

  @keyframes ContentFadeIn {
    0% {
      transform: translateY(-1rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes ImageFadeIn {
    0% {
      transform: translate(-0.5rem, -0.5rem) scale(1.05);
      opacity: 0;
      filter: blur(2px);
    }
    50% {
      opacity: 1;
      filter: blur(2px);
    }
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
      filter: blur(0);
    }
  } */
`
