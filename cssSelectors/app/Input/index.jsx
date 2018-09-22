import React from 'react';
import Label from '../Label/index';

class Input extends React.PureComponent {
  selectComponent() {
    const { version, value, update } = this.props;
    const type = version === 'password' ? 'password' : 'text';

    switch(version) {
      case 'bio':
        return (
          <textarea
            className={version}
            val={value}
            onChange={e => update(version, e.target.value)}
          ></textarea>
        );
      default:
        return (
          <input
            className={version}
            type={type}
            val={value}
            onChange={e => update(version, e.target.value)}
          ></input>
        );
    }
  }

  render() {
    const Component = this.selectComponent();
    return (
      <div className="form-input">
        <Label message={this.props.version}/>
        { Component }
      </div>
    );
  }
} 

export default Input;