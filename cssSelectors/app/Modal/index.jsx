import React from 'react';

const Modal = ({ data }) => (
  <div className="modal">
    <h1>Your name is: <span className="name">{data.name}</span></h1>
    <h2>Your password is: <span className="address">{data.password}</span></h2>
    <h2>
      When I asked you about what yourself, you said:
      <span className="bio">{data.bio}</span>
    </h2>
  </div>
);

export default Modal;