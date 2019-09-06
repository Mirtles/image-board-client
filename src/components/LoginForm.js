import React from 'react'

export default function LoginForm(props) {
  return <div>
    <h2>Log in</h2>
    <form className="form" onSubmit={props.onSubmit}>
      <input placeholder="email address" className="input" type="text" value={props.values.email} onChange={props.onChange} name="email" />
      <input placeholder="password" className="input" type="text" value={props.values.password} onChange={props.onChange} name="password" />
      <input type="submit" value="Submit" />
    </form>
  </div>
}