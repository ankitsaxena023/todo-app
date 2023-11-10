/* eslint-disable react/prop-types */

import { useState } from "react"


const TodoForm = ({ addItem }) => {
  const [inputName, setInputName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputName) return;

    addItem(inputName);
    setInputName('');
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default TodoForm