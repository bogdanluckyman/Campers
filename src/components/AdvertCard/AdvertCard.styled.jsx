import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const TitlesStyles = css`
  color: var(--text-color);
  font-size: 16px;
  font-weight: 600;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

const FlexAlign = css`
  display: flex;
  align-items: center;
`;

export const RedButtonStyles = css`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.08px;
  max-width: 140px;
  border-radius: 200px;
  padding: 16px 0;
  background-color: var(--accent-red);
  color: var(--white);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    max-width: 166px;
    min-height: 56px;
    transition: background-color var(--linear-transition);

    &:hover,
    &:focus {
      background-color: var(--red-hover);
    }
  }
`;

export const ListBtnWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    gap: 50px;
  }
`;

export const AdvertsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;

  @media screen and (min-width: 1440px) {
    width: 95%;
    margin-left: auto;
  }
`;

export const CardItem = styled.li`
  ${FlexAlign}
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  padding: 15px;
  background-color: var(--white);
  box-shadow: rgba(239, 241, 243, 0.3) 0px 1px 2px 0px,
    rgba(225, 229, 232, 0.15) 0px 1px 3px 1px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px;
  }
`;

export const VanPic = styled.div`
  min-width: 100%;
  min-height: 100%;
  align-self: stretch;

  @media screen and (min-width: 768px) {
    min-width: 50%;
  }

  @media screen and (min-width: 1440px) {
    min-width: 30%;
    max-width: 30%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const MainInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: hidden;
  max-width: 100%;

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`;

export const TitlePriceWrap = styled.div`
  ${FlexAlign}
  justify-content: space-between;
  gap: 24px;
`;

export const Title = styled.p`
  ${TitlesStyles}
  margin-bottom: 5px;
`;

export const PriceWrap = styled.div`
  ${FlexAlign}
  gap: 8px;
`;

export const AddToFavBtn = styled.button`
  svg {
    fill: ${({ $isFavorite }) =>
      $isFavorite ? "var(--accent-red)" : "transparent"};
    stroke: ${({ $isFavorite }) =>
      $isFavorite ? "none" : "var(--text-color)"};
    transition: fill var(--cubic-transition);
  }

  @media screen and (min-width: 1440px) {
    &:hover svg {
      fill: ${({ $isFavorite }) =>
        $isFavorite ? "transparent" : "var(--accent-red)"};
      stroke: ${({ $isFavorite }) =>
        $isFavorite ? "var(--text-color)" : "var(--accent-red)"};
    }
  }
`;

export const Price = styled.p`
  ${TitlesStyles}
`;

export const RatingLocationWrap = styled.div`
  ${FlexAlign}
  gap: 16px;

  @media screen and (min-width: 1440px) {
    margin-top: -25px;
  }
`;

export const RatingWrap = styled.div`
  ${FlexAlign}
  gap: 5px;

  button {
    text-decoration: underline;
    cursor: pointer;
    transition: color var(--linear-transition);

    &:hover {
      color: var(--accent-orange);
    }
  }
`;

export const LocationWrap = styled.div`
  ${FlexAlign}
  gap: 5px;

  svg {
    fill: none;
    stroke: var(--text-color);
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: var(--light-text);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const DetailsList = styled.ul`
  ${FlexAlign}
  flex-wrap: wrap;
  gap: 8px;

  li {
    ${FlexAlign}
    gap: 5px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 100px;
    padding: 10px 20px;
    color: var(--text-color);
    background-color: var(--grey);

    &.capitalize {
      text-transform: capitalize;
    }

    @media screen and (min-width: 1440px) {
      font-size: 16px;
      padding: 12px 24px;
    }
  }
`;

export const ShowBtn = styled.button`
  ${RedButtonStyles}
`;

export const LoadMoreBtn = styled.button`
  display: block;
  border-radius: 200px;
  border: 1px solid var(--border-color);
  padding: 16px 32px;
  margin: 30px auto;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.08px;
  color: var(--text-color);
  transition: border-color var(--linear-transition);

  @media screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      border-color: var(--accent-red);
    }
  }
`;

export const NoItemsMsg = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.25;
  text-align: center;
  color: var(--text-color);
  margin-top: 50px;

  &.favs {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;

export const GoToCatalogLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  color: var(--accent-red);
`;
