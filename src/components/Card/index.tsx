import { useNavigate } from 'react-router-dom'
import { Country, CountryDetail } from '../../interfaces/country.interface'

interface Props {
  country: Country
}

const Card = (props: Props): JSX.Element => {
  const { country } = props

  const navigate = useNavigate()

  const goToDetails = (): void => {
    const details: CountryDetail = {
      name: country.name,
      nativeName: country.nativeName,
      population: country.population,
      region: country.region,
      subRegion: country.subregion,
      capital: country.capital,
      topLevelDomain: country.topLevelDomain,
      currencies: country.currencies,
      languages: country.languages,
      borderCountries: country.borders,
      image: country.flag
    }

    navigate('/detail', { state: { details } })
  }

  return (
    <div
      className='shadow-md w-4/5 mx-auto rounded overflow-hidden bg-white mb-8'
      onClick={goToDetails}
    >
      <img
        src={country.flag}
        alt='flag'
      />
      <div className='p-8 pb-8'>
        <h3 className='mb-4 font-800 text-2xl'>{country.name}</h3>
        <p><span className='font-600'>Population: </span>{country.population}</p>
        <p><span className='font-600'>Region: </span>{country.region}</p>
        <p><span className='font-600'>Capital: </span>{country.capital}</p>
      </div>
    </div>
  )
}

export { Card }
