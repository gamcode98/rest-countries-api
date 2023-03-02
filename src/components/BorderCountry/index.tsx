interface Props {
  borderCountry: string
}

const BorderCountry = (props: Props): JSX.Element => {
  const { borderCountry } = props
  return (
    <button className='shadow-md py-2 px-8'>{borderCountry}</button>
  )
}

export { BorderCountry }
