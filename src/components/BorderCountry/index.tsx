import { Country, CountryDetails } from '../../interfaces/country.interface'

interface Props {
  borderCountry: Country
  setCountryDetails: React.Dispatch<React.SetStateAction<CountryDetails>>
  setReload: React.Dispatch<React.SetStateAction<boolean>>
}

const BorderCountry = (props: Props): JSX.Element => {
  const { borderCountry, setCountryDetails, setReload } = props

  const handleChangeToBorderCountry = (): void => {
    setReload(prev => !prev)
    const details: CountryDetails = {
      name: borderCountry.name,
      nativeName: borderCountry.nativeName,
      population: borderCountry.population,
      region: borderCountry.region,
      subRegion: borderCountry.subregion,
      capital: borderCountry.capital,
      topLevelDomain: borderCountry.topLevelDomain,
      currencies: borderCountry.currencies,
      languages: borderCountry.languages,
      borderCountries: borderCountry.borders,
      image: borderCountry.flag
    }
    setCountryDetails(details)
  }

  return (
    <button
      onClick={handleChangeToBorderCountry}
      className='shadow-md py-2 px-8 transition ease-in-out delay-75 hover:scale-105 will-change-transform'
    >{borderCountry.name}
    </button>
  )
}

export { BorderCountry }
