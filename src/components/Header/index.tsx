import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { MoonIcon } from '../Icons/MoonIcon'

const Header = (): JSX.Element => {
  const [theme, setTheme] = useLocalStorage('theme', '')

  useEffect(() => {
    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [theme])

  const handleThemeSwitch = (): void => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <>
      <header className='flex justify-between p-8 shadow-md dark:bg-dm-dark-blue'>
        <h1 className='font-800 text-2xl dark:text-lm-very-light-gray'>Where in the world?</h1>
        <button
          className='flex items-center gap-3'
          onClick={handleThemeSwitch}
        >
          <MoonIcon />
          <span className='font-600 dark:text-lm-very-light-gray'>Dark mode</span>
        </button>
      </header>
      <Outlet />
    </>
  )
}

export { Header }
