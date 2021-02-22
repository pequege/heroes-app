import React from 'react'

export const LoginScreen = ({history}) => {

  const handleLogin = () =>{
    history.push('/');
  }

  return (
    <div>
      <h2>LoginScreen</h2>
      <hr/>
      <button className="btn btn-primary"
      onClick={handleLogin}>
        login
      </button>
    </div>
  )
}
