interface Props {
  children: JSX.Element | JSX.Element[]
}

const Main = (props: Props): JSX.Element => {
  const { children } = props

  return (
    <main className='bg-lm-very-light-gray py-8 dark:bg-dm-very-dark-blue'>{children}</main>
  )
}

export { Main }
