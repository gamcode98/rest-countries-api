import { Route, Routes } from 'react-router-dom'
import { Detail } from './routes/Detail'
import { Home } from './routes/Home'

function App (): JSX.Element {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/detail/:id' element={<Detail />} />
    </Routes>
  )
}

export default App
