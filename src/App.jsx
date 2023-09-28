
import { styled } from 'styled-components'
import GlobalStyles from './components/GlobalStyles'
import Cabecalho from './components/Cabecalho'
import BarraLateral from './components/BarraLateral'
import Banner from './components/Banner'
import bannerBackground from './assets/banner.png'

const FundoGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

function App() {

  return (
    <FundoGradient>
      <GlobalStyles /> 
      <Cabecalho />
      <BarraLateral />
      <Banner
        texto='A galeria mais completa de fotos do espaço!'
        backgroundImage={bannerBackground}
      />
    </FundoGradient>
  )
}

export default App
