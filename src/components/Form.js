import React, { useState } from 'react'

const Form = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    getQuery(text)
  }

  return (
    <form className='search-form' onSubmit={onSubmit}>
      <input
        type='text'
        className='search-bar'
        placeholder='Type of food i.e. "chicken"'
        value={text}
        onChange={onChange}
      ></input>
      <button
        type='submit'
        className='search-btn'
      >Search</button>
    </form>
  )
}

export default Form
