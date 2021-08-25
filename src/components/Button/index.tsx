import { ButtonStyled } from "./styles";
import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  deleted?: boolean; //sempre que uma prop for facultativa usa-se o ?
  onClick: () => void;
}

const Button = ({ deleted = false, children, onClick }: IButtonProps) => {
  return (
    <ButtonStyled isDeleted={deleted} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
