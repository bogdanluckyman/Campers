import styled from "styled-components";

export const FeatureReviewsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 0;

  @media screen and (min-width: 768px) {
    width: 50%;
    max-height: 575px;
    overflow-y: auto;
    padding-right: 15px;

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-track {
      margin-top: 30px;
    }
  }
`;

export const DetailsItemsWrap = styled.div`
  padding-bottom: 40px;
`;

export const VehicleDetailsWrap = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: var(--text-color);
    margin-bottom: 32px;
  }

  hr {
    background-color: var(--border-color);
    margin-bottom: 20px;
  }
`;

export const VehicleDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.33;
    color: var(--text-color);

    &.capitalize {
      text-transform: capitalize;
    }
  }
`;
