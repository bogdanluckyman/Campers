import styled, { css } from "styled-components";
import { commonInputStyles } from "components/Modal/BookForm/BookForm.styled";
import { RedButtonStyles } from "components/AdvertCard/AdvertCard.styled";

const commonRadioCheckbox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  padding: 10px;
  color: var(--text-color);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
    padding: 17px;
  }
`;

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 0;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const FormFilters = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 30px;
`;

export const GoToPrevPageBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: -50px;
  align-self: flex-start;
`;

export const LabelLocation = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: var(--light-text);

  svg {
    position: absolute;
    top: 45px;
    left: 15px;
    fill: none;
    stroke: var(--text-color);
  }

  .react-dropdown-select {
    ${commonInputStyles}
    padding: 15px;
    padding-left: 40px;
    opacity: 1;
    color: var(--light-text);
    transition: box-shadow var(--linear-transition);

    &:focus-within {
      box-shadow: 0 0 5px var(--accent-red);
    }

    svg {
      display: none;
    }
  }

  .react-dropdown-select-dropdown {
    width: 100%;
    background-color: var(--input-background);
    border-radius: 10px;
    border: 2px solid var(--accent-red);
  }

  .react-dropdown-select-item {
    border-bottom: 1px solid var(--light-text);

    &:hover:not(.react-dropdown-select-item-selected) {
      color: var(--white);
      background-color: var(--accent-red);
      opacity: 0.7;
    }
  }

  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    color: var(--white);
    font-weight: bold;
    background-color: var(--accent-red);
  }
`;

export const FiltersWrap = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--light-text);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const LabelFilters = styled.label`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  color: var(--text-color);

  hr {
    opacity: 0.3;
    background-color: var(--border-color);
    display: block;
    margin: 24px 0;
  }
`;

export const FieldSet = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  border: none;
  padding: 0;
`;

export const InputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc((100% - 2 * 10px) / 3);
  height: 85px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 4 * 10px) / 5);
    height: 95px;
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 2 * 10px) / 3);
    height: 95px;
  }

  input {
    width: 130px;
    height: 80px;
    padding: 15px;
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked + div {
      border-color: var(--accent-red);
    }
  }
`;

export const RadioBtn = styled.div`
  ${commonRadioCheckbox}
`;

export const CheckBox = styled.div`
  ${commonRadioCheckbox}
`;

export const ButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    ${RedButtonStyles}
    width: 150px;

    @media screen and (min-width: 1440px) {
      margin: unset;
    }
  }

  #reset-button {
    background-color: var(--grey);
    color: var(--light-text);
    width: 150px;

    @media screen and (min-width: 1440px) {
      &:hover,
      &:focus {
        background-color: var(--input-background);
        color: var(--light-text);
      }
    }
  }
`;
