import Appletras from './components/Appletras'
import { LetrasProvider } from './context/LetrasProvider'

function App() {


  return (
    <LetrasProvider>
      <Appletras />
    </LetrasProvider>
  )
}

export default App
