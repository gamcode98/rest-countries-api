interface Props {
  borderCountry: string
}

const BorderCountry = (props: Props): JSX.Element => {
  const { borderCountry } = props
  return (
    <button className='shadow-md p-4'>{borderCountry}</button>
  )
}

export { BorderCountry }
