import React from 'react'

export default class List extends React.Component {
  render() {
    return (<div>
      {this.props.images.map((image, id) => <div key={id + 200}>
        <h3 key={id + 100}>{image.title}</h3>
        <img className="img" key={id} src={image.url} alt={image.title} />
      </div>)}
    </div>)
  }
}