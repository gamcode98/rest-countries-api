/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Country } from '../../interfaces/country.interface'

interface Props {
  countries?: Country[]
  setSearchResults?: React.Dispatch<React.SetStateAction<Country[]>>
}

const Search = (props: Props): JSX.Element => {
  const { countries, setSearchResults } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const results = countries?.filter(country => {
      return country.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setSearchResults?.(results!)
  }

  return (
    <input
      onChange={(e) => handleChange(e)}
      type='search'
      placeholder='Search for a country...'
      className='shadow-inner bg-search bg-no-repeat bg-search-position bg-search-width p-4 pl-12 block mb-4 w-full lg:w-min'
    />
  )
}

export { Search }
