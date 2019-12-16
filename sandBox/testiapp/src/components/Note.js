import React from 'react'

const Note = ({ note }) => {
  return (
    <> 
      <h2>{note.name}</h2>
      <p>{note.content}</p>
    </>
    )
}


 
export default Note
