interface Props {
  borderCountry: string
}

const BorderCountry = (props: Props): JSX.Element => {
  const { borderCountry } = props

  return (
    <button
      className='shadow-md py-2 px-8 transition ease-in-out delay-75 hover:scale-105 will-change-transform'
    >{borderCountry}
    </button>
  )
}

export { BorderCountry }
