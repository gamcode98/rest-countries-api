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
          <h3 className='mb-4 font-800 text-2xl'>{countryDetails.name}</h3>
          <div className='lg:flex lg:gap-16'>
            <div className='mb-8'>
              <p className='mb-2'><span className='font-600'>Population: </span>{countryDetails.population}</p>
              <p className='mb-2'><span className='font-600'>Region: </span>{countryDetails.region}</p>
              <p className='mb-2'><span className='font-600'>Sub Region: </span>{countryDetails.subRegion}</p>
              <p className='mb-2'><span className='font-600'>Capital: </span>{countryDetails.capital}</p>
            </div>
            <div>
              <p className='mb-2'><span className='font-600'>Top Level Domain: </span>{countryDetails.topLevelDomain}</p>
              <p className='mb-2'><span className='font-600'>Currencies: </span>{countryDetails.currencies[0].name}</p>
              <p className='mb-2'><span className='font-600'>Languages: </span>{countryDetails.languages[0].name}</p>
            </div>
          </div>
        </div>
        {countryDetails.borderCountries !== undefined &&
          <div className='lg:flex lg:items-center lg:gap-4'>
            <h5 className='text-xl font-600 mb-4 lg:mb-0'>Border countries:</h5>
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
