import './Input.scss'

const Input = ({ handleChange, value, clickButton }) => (
  <div className='search'>
    <form className='input-form'>
      <input className='input' onChange={handleChange} value={value} />
      <button className='search-button' onClick={clickButton}>
        Search
      </button>
    </form>
  </div>
)

export default Input
