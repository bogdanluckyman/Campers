import styled, { css } from "styled-components";

export const commonInputStyles = css`
  width: 100%;
  padding: 18px;
  background-color: var(--input-background);
  color: var(--text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border-radius: 10px;
  border: none;
  opacity: 0.7;

  transition: opacity var(--linear-transition);

  &:hover,
  &:focus {
    opacity: 1;
  }

  &::placeholder {
    color: var(--placeholder-color);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-self: flex-start;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  padding: 24px;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const TitleBlock = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    color: var(--text-color);

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 16px;
    color: var(--light-text);
    margin: 8px 0 14px 0;
  }
`;

export const Label = styled.label`
  position: relative;

  input {
    ${commonInputStyles}
  }

  textarea {
    ${commonInputStyles}
    resize: none;
  }

  svg#calendar {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }
`;

export const ErrorMsg = styled.p`
  position: absolute;
  font-size: 12px;
  color: var(--accent-red);
`;

export const SubmitBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.08px;
  width: 150px;
  max-height: 60px;
  padding: 16px;
  border-radius: 200px;
  color: var(--white);
  background-color: var(--accent-red);

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      background-color: var(--red-hover);
    }
  }
`;
