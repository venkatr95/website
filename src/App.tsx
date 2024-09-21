import React from 'react'
import { Main } from './components/main/Main'
import { GlobalStyle } from './styles'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from './components/page/Header'
import { Footer } from './components/page/Footer'
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App