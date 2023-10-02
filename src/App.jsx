import { styled } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import bannerBackground from "./assets/banner.png";
import Galeria from "./components/Galeria";

import fotos from './fotos.json';
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [FotosGaleria, setFotosGaleria] = useState(fotos)
  const [FotoSelecionada, setFotoSelecionada] = useState(fotos[0])

  const aoAlternarFavorito = (foto) => {
    if (foto.id === FotoSelecionada?.id) {
      setFotoSelecionada({
        ...FotoSelecionada,
        favorita: !FotoSelecionada.favorita
      })
    }

    setFotosGaleria(FotosGaleria.map(FotosGaleria => {
      return {
        ...FotosGaleria,
        favorita: FotosGaleria.id === foto.id ? !foto.favorita: FotosGaleria.favorita
      }
    })) 
  }

  return (
    <FundoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
            texto="A galeria mais completa de fotos do espaço!"
            backgroundImage={bannerBackground}
          />
          <Galeria 
            aoFotoSelecionada={foto => setFotoSelecionada(foto)}
            aoAlternarFavorito={aoAlternarFavorito}
            fotos={FotosGaleria}
          />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom 
        fotos={FotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      /> 
    </FundoGradiente>
  );
}

export default App;
