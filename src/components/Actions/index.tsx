import React from 'react'
import { Country } from '../../interfaces/country.interface'

interface Props {
  children: JSX.Element | JSX.Element[]
  countries: Country[]
  setSearchResults: React.Dispatch<React.SetStateAction<Country[]>>
}

const Actions = (props: Props): JSX.Element => {
  const { children, countries, setSearchResults } = props

  return (
    <div className='mx-auto w-11/12 lg:flex lg:justify-between lg:w-full lg:px-11'>
      {React.Children
        .toArray(children)
        .map((child: any) => React.cloneElement(child, { countries, setSearchResults }))}
    </div>
  )
}

export { Actions }
