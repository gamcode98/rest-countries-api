import { Route, Routes } from 'react-router-dom'
import { Home } from './routes/Home'

function App (): JSX.Element {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
    </Routes>
  )
}

export default App
