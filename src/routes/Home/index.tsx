import { useState } from 'react'
import { Actions } from '../../components/Actions'
import { Cards } from '../../components/Cards'
import { Main } from '../../components/Main'
import { Search } from '../../components/Search'
import { Select } from '../../components/Select'
import { Country } from '../../interfaces/country.interface'

const Home = (): JSX.Element => {
  const [countries, setCountries] = useState<Country[]>([])
  const [searchResults, setSearchResults] = useState<Country[]>([])

  return (
    <Main>
      <Actions>
        <Search
          countries={countries}
          setSearchResults={setSearchResults}
        />
        <Select />
      </Actions>
      <Cards
        setCountries={setCountries}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
    </Main>
  )
}

export { Home }
