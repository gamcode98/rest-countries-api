import { useLocation } from 'react-router-dom'
import { DetailsCard } from '../../components/DetailsCard'
import { GoBackBtn } from '../../components/GoBackBtn'

const Details = (): JSX.Element => {
  const location = useLocation()
  const { details } = location.state

  console.log({ details })

  return (
    <div className='w-11/12 mx-auto'>
      <GoBackBtn />
      <DetailsCard countryDetails={details} />
    </div>
  )
}

export { Details }
