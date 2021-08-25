import { Container, Image } from "./styles";
import Button from "../Button";
import { IDigimon } from "../../types/digimon";
import { useFavoriteDigimons } from "../../Providers/FavoriteDigimons";

interface IDigimonCardProps {
  digimon: IDigimon;
  isFavorite?: boolean;
}

const DigimonCard = ({ digimon, isFavorite = false }: IDigimonCardProps) => {
  const { name, level, img } = digimon;

  const { addDigimon, deleteDigimon } = useFavoriteDigimons();

  return (
    <Container>
      <div>{name}</div>
      <Image src={img}></Image>
      <div>{level}</div>
      {isFavorite ? (
        <Button deleted={true} onClick={() => deleteDigimon(digimon)}>
          Remove
        </Button>
      ) : (
        <Button onClick={() => addDigimon(digimon)}>Add</Button>
      )}
    </Container>
  );
};

export default DigimonCard;
