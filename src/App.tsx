import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Details } from './routes/Details'
import { Home } from './routes/Home'

function App (): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index path='/' element={<Home />} />
        <Route path='/detail' element={<Details />} />
      </Route>
    </Routes>
  )
}

export default App
