import { useEffect } from 'react'
import { Card } from '../Card'
import { Country } from '../../interfaces/country.interface'
import { getAllCountries } from '../../services'

interface Props {
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>
  searchResults: Country[]
  setSearchResults: React.Dispatch<React.SetStateAction<Country[]>>
}

const Cards = (props: Props): JSX.Element => {
  const { setCountries, searchResults, setSearchResults } = props

  useEffect(() => {
    getAllCountries()
      .then(async data => await data.json())
      .then(response => {
        setCountries(response)
        setSearchResults(response)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <section className='grid lg:grid-cols-4 lg:gap-4'>
      {searchResults.map((country, index) => (
        <Card key={index} country={country} />
      ))}
    </section>
  )
}

export { Cards }
