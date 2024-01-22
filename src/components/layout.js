import { memo } from 'react'

import { useAppSelector } from '../utils/appHooks'

const Layout = memo(() => {
  const citys = useAppSelector((state) => state.weather)
  //   console.log(citys)
  return (
    <div className='app'>
      <div className='header'>
        <h1>Hi</h1>
      </div>
    </div>
  )
})

export default Layout
