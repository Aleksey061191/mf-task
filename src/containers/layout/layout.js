import { memo } from 'react'

import './layout.scss'
import CitiesContainer from '../CitiesContainer/CitiesContainer'
import InputContainer from '../InputContainer/InputContainer'

const Layout = memo(() => {
  return (
    <div className='app'>
      <InputContainer />
      <CitiesContainer />
    </div>
  )
})

export default Layout
