import { useNavigate } from 'react-router-dom'
import arrowLeftIcon from './../../assets/arrow-left.svg'

const GoBackBtn = (): JSX.Element => {
  const navigate = useNavigate()

  const handleGoBack = (): void => {
    navigate('/')
  }

  return (
    <button
      className='shadow-md flex items-center gap-2 py-4 px-8 mt-8 mb-16'
      onClick={handleGoBack}
    >
      <img src={arrowLeftIcon} alt='arrow left icon' width={20} />
      <span>Back</span>
    </button>
  )
}

export { GoBackBtn }
