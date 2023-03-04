import { useNavigate } from 'react-router-dom'
import { Country, CountryDetails } from '../../interfaces/country.interface'

interface Props {
  country: Country
}

const Card = (props: Props): JSX.Element => {
  const { country } = props

  const navigate = useNavigate()

  const goToDetails = (): void => {
    const details: CountryDetails = {
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

    navigate('/details', { state: { details } })
  }

  return (
    <div
      className='shadow-md w-4/5 mx-auto rounded overflow-hidden bg-white dark:bg-dm-dark-blue
       mb-8 cursor-pointer transition ease-in-out delay-75 hover:scale-105 will-change-transform'
      onClick={goToDetails}
    >
      <img
        src={country.flag}
        alt='flag'
      />
      <div className='p-8 pb-8'>
        <h3 className='mb-4 font-800 text-2xl dark:text-lm-very-light-gray'>{country.name}</h3>
        <p className='dark:text-lm-dark-gray'><span className='font-600 dark:text-lm-very-light-gray'>Population: </span>{country.population}</p>
        <p className='dark:text-lm-dark-gray'><span className='font-600 dark:text-lm-very-light-gray'>Region: </span>{country.region}</p>
        <p className='dark:text-lm-dark-gray'><span className='font-600 dark:text-lm-very-light-gray'>Capital: </span>{country.capital}</p>
      </div>
    </div>
  )
}

export { Card }
