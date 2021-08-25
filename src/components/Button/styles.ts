import styled, { css } from "styled-components";

interface IButtonStyledProps {
  isDeleted: boolean;
}

export const ButtonStyled = styled.button<IButtonStyledProps>`
  margin-top: 5px;
  width: 28px;
  font-size: 6px;
  height: 12px;
  border: none;
  border-radius: 10px;
  background-color: deepskyblue;
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.isDeleted &&
    css`
      background: white;
      color: red;
      width: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
    `};
`;
