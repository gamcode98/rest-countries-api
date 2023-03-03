import { useEffect, useState } from 'react'
import { Country } from '../../interfaces/country.interface'
import { getAllCountries } from '../../services'
import { BorderCountry } from '../BorderCountry'

interface Props {
  borderCountries: string[]
}

const BorderCountries = (props: Props): JSX.Element => {
  const { borderCountries } = props
  const [borderCountriesParsed, setBorderCountriesParsed] = useState<Country[] | null>(null)

  useEffect(() => {
    getAllCountries()
      .then(async data => await data.json())
      .then((response: Country[]) => {
        const results = response.filter(country => {
          return borderCountries.includes(country.alpha3Code)
        })
        setBorderCountriesParsed(results)
      }).catch(error => console.log(error))
  }, [])

  return (
    <div className='flex flex-wrap gap-4'>
      {borderCountriesParsed?.map((country, index) => (
        <BorderCountry key={index} borderCountry={country.name} />
      ))}
    </div>
  )
}

export { BorderCountries }
