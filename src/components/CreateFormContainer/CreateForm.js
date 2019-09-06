import React from 'react'

export default function CreateForm(props) {
  return (<div>
    <h2>Add picture:</h2>
    <form onSubmit={props.onSubmit}>
      <label>
        Title:
      <input type="text" placeholder="title" value={props.values.title} onChange={props.onChange} name="title" />
      </label>
      <label>
        URL:
      <input type="text" placeholder="URL" value={props.values.url} onChange={props.onChange} name="url" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
  );
}