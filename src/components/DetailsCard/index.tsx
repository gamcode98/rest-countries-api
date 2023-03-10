import { CountryDetails } from '../../interfaces/country.interface'
import { BorderCountries } from '../BorderCountries'

interface Props {
  countryDetails: CountryDetails
  setCountryDetails: React.Dispatch<React.SetStateAction<CountryDetails>>
}

const DetailsCard = (props: Props): JSX.Element => {
  const { countryDetails, setCountryDetails } = props

  return (
    <div className='mb-8 lg:flex lg:justify-between lg:items-center lg:gap-24'>
      <img
        src={countryDetails.image}
        alt='flag'
        className='mb-8 lg:w-2/5 shadow-md'
      />
      <div className='lg:w-full'>
        <div className='pb-8'>
          <h3 className='mb-4 font-800 text-2xl dark:text-lm-very-light-gray'>{countryDetails.name}</h3>
          <div className='lg:flex lg:gap-16'>
            <div className='mb-8'>
              <p className='mb-2 dark:text-lm-dark-gray'><span className='font-600 dark:text-lm-very-light-gray'>Population: </span>{countryDetails.population}</p>
              <p className='mb-2 dark:text-lm-dark-gray'><span className='font-600 dark:text-lm-very-light-gray'>Region: </span>{countryDetails.region}</p>
              <p className='mb-2 dark:text-lm-dark-gray'><span className='font-600 dark:text-lm-very-light-gray'>Sub Region: </span>{countryDetails.subRegion}</p>
              <p className='mb-2 dark:text-lm-dark-gray'><span className='font-600 dark:text-lm-very-light-gray'>Capital: </span>{countryDetails.capital}</p>
            </div>
            <div>
              <p className='mb-2 dark:text-lm-dark-gray'><span className='font-600 dark:text-lm-very-light-gray'>Top Level Domain: </span>{countryDetails.topLevelDomain}</p>
              <p className='mb-2 dark:text-lm-dark-gray'><span className='font-600 dark:text-lm-very-light-gray'>Currencies: </span>{countryDetails.currencies[0].name}</p>
              <p className='mb-2 dark:text-lm-dark-gray'><span className='font-600 dark:text-lm-very-light-gray'>Languages: </span>{countryDetails.languages[0].name}</p>
            </div>
          </div>
        </div>
        {countryDetails.borderCountries !== undefined &&
          <div className='lg:flex lg:items-center lg:gap-4'>
            <h5 className='text-xl font-600 mb-4 lg:mb-0 dark:text-lm-very-light-gray'>Border countries:</h5>
            <BorderCountries
              borderCountries={countryDetails.borderCountries}
              setCountryDetails={setCountryDetails}
            />
          </div>}
      </div>
    </div>
  )
}

export { DetailsCard }
