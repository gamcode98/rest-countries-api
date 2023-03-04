import React from 'react'
import { Country } from '../../interfaces/country.interface'

interface Props {
  children: JSX.Element | JSX.Element[]
  countries: Country[]
  setSearchResults: React.Dispatch<React.SetStateAction<Country[]>>
  isLoading: boolean
}

const Actions = (props: Props): JSX.Element => {
  const { children, countries, setSearchResults, isLoading } = props

  return (
    <div className='mx-auto mb-8 w-11/12 flex flex-wrap gap-4 lg:justify-between lg:w-full lg:px-11'>
      {React.Children
        .toArray(children)
        .map((child: any) => React.cloneElement(child, { countries, setSearchResults, isLoading }))}
    </div>
  )
}

export { Actions }
