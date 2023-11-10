/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoListItem from './components/TodoListItem'

function App() {
  const [itemArray, setItemArray] = useState([]);

  const addItem = (name) => {
    setItemArray(prev => [...prev, { id: Date.now(), name: name, isEditable: false, isUpdatable: true }])
  }

  const deleteItem = (id) => {
    setItemArray(prev => prev.filter(item => item.id !== id))
  }

  const updateItem = (id) => {
    setItemArray(prev => prev.map(item => item.id === id ? { ...item, isUpdatable: !item.isUpdatable } : item))
  }

  const toggleCheckbox = (id) => {
    setItemArray(prev => prev.map(item => item.id === id ? { ...item, isEditable: !item.isEditable } : item))
  }

  const clearAll = () => {
    setItemArray([]);
  }

  const handleCheckDelete = (id) => {
    const checkCheckedBoxItems = itemArray.map(item => item.isEditable === true ? { ...item } : item);
    console.log('checkCheckedBoxItems', checkCheckedBoxItems);
    const filterNonCheckedItems = checkCheckedBoxItems.filter(item => item.isEditable === false);
    console.log('filterNonCheckedItems', filterNonCheckedItems)
    setItemArray(filterNonCheckedItems)
  }



  return (
    <>
      <h1>To Do List App</h1>
      <div>
        <TodoForm addItem={addItem} />
        {
          itemArray.map(item => {
            return <TodoListItem key={item.id} itemArray={item} deleteItem={() => deleteItem(item.id)} toggleCheckbox={() => toggleCheckbox(item.id)} updateItem={() => updateItem(item.id)} />
          })
        }
        <button onClick={handleCheckDelete}>clear Checked</button>
        <button onClick={clearAll}>clear all</button>
      </div>
    </>
  )
}

export default App
