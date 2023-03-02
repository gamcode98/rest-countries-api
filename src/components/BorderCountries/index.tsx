import { BorderCountry } from '../BorderCountry'

interface Props {
  borderCountries: string[]
}

const BorderCountries = (props: Props): JSX.Element => {
  const { borderCountries } = props

  return (
    <div className='flex gap-4'>
      {borderCountries.map((borderCountry, index) => (
        <BorderCountry key={index} borderCountry={borderCountry} />
      ))}
    </div>
  )
}

export { BorderCountries }
