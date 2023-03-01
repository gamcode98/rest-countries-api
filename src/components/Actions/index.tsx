import { Search } from '../Search'
import { Select } from '../Select'

const Actions = (): JSX.Element => {
  return (
    <div className='mx-auto w-11/12 lg:flex lg:justify-between lg:w-full lg:px-11'>
      <Search />
      <Select />
    </div>
  )
}

export { Actions }
