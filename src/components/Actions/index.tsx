interface Props {
  children: JSX.Element | JSX.Element[]
}

const Actions = (props: Props): JSX.Element => {
  const { children } = props

  return (
    <div className='mx-auto w-11/12 lg:flex lg:justify-between lg:w-full lg:px-11'>
      {children}
    </div>
  )
}

export { Actions }
