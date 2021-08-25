import { IDigimon } from "../../types/digimon";
import DigimonCard from "../CardDigimon";

interface IDigimonsProps {
  digimons: IDigimon[];
  isFavorite?: boolean;
}

const Digimons = ({ digimons, isFavorite = false }: IDigimonsProps) => {
  return (
    <>
      {digimons.map((digimon, index) => (
        <DigimonCard
          key={index}
          digimon={digimon}
          isFavorite={isFavorite}
        ></DigimonCard>
      ))}
    </>
  );
};

export default Digimons;
