import React from 'react';
import Input from '../Input/index';

class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      bio: '',
    }
  }

  updateValue(key, value) {
    this.setState(prevState => ({
      [key]: value
    }), () => console.log(this.state));
  }

  render() {
    return (
      <form>
        {
          Object.keys(this.state).map(key => (
            <Input
              key={key}
              version={key}
              value={this.state[key]}
              update={(key, value) => this.updateValue(key, value)}
            />)
          )
        }
      </form>
    );
  }
}

export default Submission;
