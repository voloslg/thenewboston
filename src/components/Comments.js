import React, { Component } from 'react';
import Comment from './Comment';


class Comments extends Component {
  constructor(props) {
    super(props);
  }

  coments = [
    { id: 1, text: 'One' },
    { id: 2, text: 'Two' },
    { id: 3, text: 'Three' }
  ]

  render() {
    return (
      <Comment comment={this.coments} />

    )
  }
}
export default Comments;
