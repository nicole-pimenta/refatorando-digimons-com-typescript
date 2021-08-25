import { ReactNode } from "react";
import { FavoriteDigimonProvider } from "./FavoriteDigimons";

interface IProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return <FavoriteDigimonProvider>{children}</FavoriteDigimonProvider>;
};

export default Providers;
