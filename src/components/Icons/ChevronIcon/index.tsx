interface Props {
  toggle: boolean
}

const ChevronIcon = (props: Props): JSX.Element => {
  const { toggle } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className={`w-6 h-6 dark:stroke-lm-very-light-gray stroke-lm-very-dark ${toggle ? 'rotate-180' : 'rotate-0'}`}
      width={20}
    >
      <path stroke-linecap='round' stroke-linejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
    </svg>

  )
}

export { ChevronIcon }
