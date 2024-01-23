import { memo } from 'react'

import InputContainer from './InputContainer/InputContainer'

import { useAppSelector } from '../utils/appHooks'

const Layout = memo(() => {
  const citys = useAppSelector((state) => state.weather.weather)
  console.log(citys)
  return (
    <div className='app'>
      <h1>Hi</h1>
      <InputContainer />
    </div>
  )
})

export default Layout
