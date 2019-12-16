import React from 'react'

const Notification = ({ message, type }) => {
  const notificationStyle = {
    fontSize: '18',
    fontWeight: 'bold',
    borderStyle: 'solid',
    borderColor: 'green',
    background: '#c5cfc4',
    padding: 12,
    margin: 10
  }

  const errorStyle = {
    fontSize: '18',
    fontWeight: 'bold',
    borderStyle: 'solid',
    borderColor: 'red',
    background: '#ffe2e0',
    padding: 12,
    margin: 10
  }
 
  if(message === null) {
    return null
  }
  if(type === 'error') {
    return (
      <div style={errorStyle}>
        {message}
      </div>
    )
  }
  return (
    <div style={notificationStyle}>
      {message}
    </div>
  )
}

export default Notification