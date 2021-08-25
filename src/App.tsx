import { Container, List, FavoritesList } from "./styles";
import "./App.css";
import Digimons from "./components/Digimons/index";
import { useFavoriteDigimons } from "./Providers/FavoriteDigimons";
import { useEffect, useState } from "react";
import { IDigimon } from "./types/digimon";

function App() {
  const { favorites } = useFavoriteDigimons();

  const [digimons, setDigimons] = useState<IDigimon[]>([] as IDigimon[]);

  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((response) => response.json())
      .then((response) => setDigimons([...response]))
      .catch(() => setError("Algo de errado!"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <FavoritesList>
            <Digimons digimons={favorites} isFavorite={true} />
          </FavoritesList>
          <List>
            <Digimons digimons={digimons} />
          </List>
        </Container>
      </header>
    </div>
  );
}

export default App;
