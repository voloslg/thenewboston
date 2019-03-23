import React, { Component } from 'react'

export default class Comment extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    editing: false,
  }

  edit = () => {
    this.setState({ editing: true })
    console.log(this.state.editing);
  }
  remove = () => {
    console.log('Remove');
  }
  save = () => {
    this.setState({ editing: false })
  }

  renderNormal = () => {
    return (
      <div className="container">
        <div className="row">
          {
            this.props.comment.map((coment) => (
              <ul key={coment.id}>
                <li>{coment.text}</li>
                <button onClick={this.edit}>Edit</button>
                <button onClick={this.remove}>Remove</button>
              </ul>
            ))
          }


        </div>

      </div>
    );
  }
  renderForm = () => {
    return (
      <div className="container">
        <div className="row">
          <textarea defaultValue={this.props.children} ></textarea>
          <br />
          <button onClick={this.save}>Save</button>
        </div>
      </div>
    );
  }


  render() {
    console.log('Comments', this.props.comment);
    return (
      <div>
        {(this.state.editing) ? this.renderForm() : this.renderNormal()}
        <br />
      </div>

    );
  }
}
