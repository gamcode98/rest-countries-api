import moonImg from './../../assets/moon.svg'

const Header = (): JSX.Element => {
  return (
    <header className='flex justify-between p-8 shadow-md'>
      <h1 className='font-800 text-2xl'>Where in the world?</h1>
      <button className='flex items-center gap-3'>
        <img src={moonImg} alt='moon' width={20} />
        <span className='font-600'>Dark mode</span>
      </button>
    </header>
  )
}

export { Header }
