import { useEffect, useState } from 'react'
import { Card } from '../Card'
import { Country } from '../../interfaces/country.interface'
import { getData } from '../../services'

const Cards = (): JSX.Element => {
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    getData()
      .then(async data => await data.json())
      .then(response => setCountries(response))
      .catch(error => console.log(error))
  }, [])

  return (
    <section className='grid lg:grid-cols-4 lg:gap-4'>
      {countries.map((country, index) => (
        <Card key={index} country={country} />
      ))}
    </section>
  )
}

export { Cards }
