import { useEffect, useState } from 'react'
import { Country, CountryDetails } from '../../interfaces/country.interface'
import { getAllCountries } from '../../services'
import { BorderCountry } from '../BorderCountry'

interface Props {
  borderCountries: string[]
  setCountryDetails: React.Dispatch<React.SetStateAction<CountryDetails>>
}

const BorderCountries = (props: Props): JSX.Element => {
  const { borderCountries, setCountryDetails } = props
  const [borderCountriesParsed, setBorderCountriesParsed] = useState<Country[] | null>(null)
  const [reload, setReload] = useState<boolean>(false)

  useEffect(() => {
    getAllCountries()
      .then(async data => await data.json())
      .then((response: Country[]) => {
        const results = response.filter(country => {
          return borderCountries.includes(country.alpha3Code)
        })
        setBorderCountriesParsed(results)
      }).catch(error => console.log(error))
  }, [reload])

  return (
    <div className='flex flex-wrap gap-4'>
      {borderCountriesParsed?.map((country, index) => (
        <BorderCountry
          key={index}
          borderCountry={country}
          setCountryDetails={setCountryDetails}
          setReload={setReload}
        />
      ))}
    </div>
  )
}

export { BorderCountries }
