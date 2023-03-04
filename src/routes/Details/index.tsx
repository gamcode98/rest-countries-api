import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DetailsCard } from '../../components/DetailsCard'
import { GoBackBtn } from '../../components/GoBackBtn'
import { CountryDetails } from '../../interfaces/country.interface'

const Details = (): JSX.Element => {
  const location = useLocation()
  const { details } = location.state
  const [countryDetails, setCountryDetails] = useState<CountryDetails>(details)

  return (
    <div className='w-11/12 mx-auto'>
      <GoBackBtn />
      <DetailsCard
        countryDetails={countryDetails}
        setCountryDetails={setCountryDetails}
      />
    </div>
  )
}

export { Details }
