/* eslint-disable react/prop-types */
import { useState } from "react";


const TodoListItem = ({ itemArray, deleteItem, toggleCheckbox, updateItem }) => {
  const [listName, setListName] = useState(itemArray.name);
  // console.log('listArray', itemArray.isUpdatable);

  return (
    <>
      <div>
        <input type="checkbox" checked={itemArray.isEditable} onChange={toggleCheckbox} />
        <input style={itemArray.isEditable ? { textDecoration: 'line-through' } : { textDecoration: 'none' }} type="text" value={listName} onChange={(e) => setListName(e.target.value)} readOnly={itemArray.isUpdatable} size="15"/>
        <button disabled={itemArray.isEditable} onClick={updateItem}>{itemArray.isUpdatable ? 'edit' : 'update'}</button>
        <button onClick={deleteItem}>delete</button>
      </div>
    </>
  )
}

export default TodoListItem
