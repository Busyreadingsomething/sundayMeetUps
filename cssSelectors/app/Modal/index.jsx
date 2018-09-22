import React from 'react';

const Modal = props => (
  <div className="modal">
    <h1>Your name is <span className="name">props.name</span></h1>
    <h2>You live on <span className="address">props.address</span></h2>
    <h2>
      When I asked you about what yourself, you said:
      <span className="bio"></span>
    </h2>
  </div>
);

export default Modal;