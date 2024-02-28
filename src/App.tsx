import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Layout/header'
import { Router } from './router'

function App() {

  return (
  <ChakraProvider>
    <div className="App">
    <Header />
   <Router />
    </div>
  </ChakraProvider>
    
  )
}

export default App
