import { useState } from 'react'
import { Actions } from '../../components/Actions'
import { Cards } from '../../components/Cards'
import { Main } from '../../components/Main'
import { Search } from '../../components/Search'
import { SelectFilter } from '../../components/SelectFilter'
import { Country } from '../../interfaces/country.interface'

const Home = (): JSX.Element => {
  const [countries, setCountries] = useState<Country[]>([])
  const [searchResults, setSearchResults] = useState<Country[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <Main>
      <Actions
        countries={countries}
        setSearchResults={setSearchResults}
        isLoading={isLoading}
      >
        <Search />
        <SelectFilter />
      </Actions>

      <Cards
        setCountries={setCountries}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </Main>
  )
}

export { Home }
