import React from 'react'
import { Main } from './components/main/Main'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from './components/page/Header'
import { Footer } from './components/page/Footer'
import { ThemeProvider } from './context/ThemeContext'
import { AmbientBackground } from './components/ui/AmbientBackground'

function App() {
  return (
    <ThemeProvider>
      <AmbientBackground />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}

export default App
