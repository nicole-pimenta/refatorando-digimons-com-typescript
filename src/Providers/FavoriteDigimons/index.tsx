import { createContext, ReactNode, useState, useContext } from "react";
import { IDigimon } from "../../types/digimon";

interface IFavoriteDigimonsProviderData {
  favorites: IDigimon[];
  addDigimon: (digimon: IDigimon) => void;
  deleteDigimon: (digimon: IDigimon) => void;
}

interface IFavoriteDigimonsProviderProps {
  children: ReactNode;
}

const FavoriteDigimonsContext = createContext<IFavoriteDigimonsProviderData>(
  {} as IFavoriteDigimonsProviderData
);

export const FavoriteDigimonProvider = ({
  children,
}: IFavoriteDigimonsProviderProps) => {
  const [favorites, setFavorites] = useState<IDigimon[]>([] as IDigimon[]);

  const addDigimon = (digimon: IDigimon) => {
    if (!favorites.includes(digimon)) {
      setFavorites([...favorites, digimon]);
    }
  };

  const deleteDigimon = (digimon: IDigimon) => {
    const newList = favorites.filter(
      (digimons) => digimons.name !== digimon.name
    );
    setFavorites(newList);
  };

  return (
    <FavoriteDigimonsContext.Provider
      value={{ deleteDigimon, addDigimon, favorites }}
    >
      {children}
    </FavoriteDigimonsContext.Provider>
  );
};

export const useFavoriteDigimons = () => useContext(FavoriteDigimonsContext);
