import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '../Icons/ArrowLeftIcon'

const GoBackBtn = (): JSX.Element => {
  const navigate = useNavigate()

  const handleGoBack = (): void => {
    navigate('/')
  }

  return (
    <button
      className='shadow-md flex items-center gap-2 py-4 px-8 mt-8 mb-16
      transition ease-in-out delay-75 hover:scale-105 will-change-transform rounded-md
      dark:text-lm-very-light-gray dark:bg-dm-dark-blue'
      onClick={handleGoBack}
    >
      <ArrowLeftIcon />
      <span>Back</span>
    </button>
  )
}

export { GoBackBtn }
