import { Actions } from '../../components/Actions'
import { Cards } from '../../components/Cards'
import { Main } from '../../components/Main'

const Home = (): JSX.Element => {
  return (
    <Main>
      <Actions />
      <Cards />
    </Main>
  )
}

export { Home }
