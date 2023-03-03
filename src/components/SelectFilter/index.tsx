/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react'
import { Country } from '../../interfaces/country.interface'
import chevronImg from './../../assets/chevron.svg'

interface Region {
  value: string
  label: string
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
  const [regionSelected, setRegion] = useState<string>('Filter by region')

  const handleRegion = (region: Region): void => {
    setRegion(region.label)
    const results = countries?.filter(country => country.region === region.value)
    setSearchResults?.(results!)
    setToggle(prev => !prev)
  }

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
      <ul className={`shadow-md bg-white absolute left-0 right-0 z-10 top-16 p-4 ${toggle ? 'block' : 'hidden'}`}>
        {regions.map(region => (
          <li
            key={region.value}
            className='mb-4 last:mb-0 cursor-pointer'
            onClick={() => handleRegion(region)}
          >{region.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export { SelectFilter }
