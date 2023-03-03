/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react'
import { Country } from '../../interfaces/country.interface'
import chevronImg from './../../assets/chevron.svg'

interface Region {
  value: string
  label: string
}

enum LABELS {
  DEFAULT_VALUE = 'Filter by region',
  ALL_CONTRIES = 'All'
}

const regions: Region[] = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' }
]

interface Props {
  countries?: Country[]
  setSearchResults?: React.Dispatch<React.SetStateAction<Country[]>>
}

const SelectFilter = (props: Props): JSX.Element => {
  const { countries, setSearchResults } = props

  const [toggle, setToggle] = useState<boolean>(false)
  const [regionSelected, setRegion] = useState<string>(LABELS.DEFAULT_VALUE)

  const handleRegion = (region: Region): void => {
    setRegion(region.label)
    const results = countries?.filter(country => country.region === region.value)
    setSearchResults?.(results!)
    setToggle(prev => !prev)
  }

  const showAllCountries = (): void => {
    setRegion(LABELS.ALL_CONTRIES)
    setSearchResults?.(countries!)
    setToggle(prev => !prev)
  }

  const listener = (event: string): void => {
    document.addEventListener(event, () => setToggle(false))
  }

  listener('scroll')
  listener('resize')

  return (
    <div className='relative'>
      <button
        className='bg-white p-4 flex items-center gap-6'
        onClick={() => setToggle(prev => !prev)}
      >
        <span>{regionSelected}</span>
        <img
          src={chevronImg}
          width={20}
          className={`${toggle ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      <ul className={`shadow-md bg-white absolute left-0 right-0 z-10 top-16 ${toggle ? 'block' : 'hidden'}`}>
        {regions.map(region => (
          <li
            key={region.value}
            className='cursor-pointer hover:bg-lm-very-light-gray py-2 px-4'
            onClick={() => handleRegion(region)}
          >{region.label}
          </li>
        ))}
        {regionSelected !== LABELS.DEFAULT_VALUE &&
          <li
            className='cursor-pointer hover:bg-lm-very-light-gray py-2 px-4'
            onClick={showAllCountries}
          >
            All
          </li>}
      </ul>
    </div>
  )
}

export { SelectFilter }
