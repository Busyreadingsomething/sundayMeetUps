import React from 'react';
import Input from '../Input/index';

class Submission extends React.PureComponent {
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

  sendInfo(e) {
    e.preventDefault();
    this.props.toggle({...this.state});
    this.setState(() => ({
      name: '',
      password: '',
      bio: '',
    }));
  }

  render() {
    return (
      <form action="" method="">
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
        <button type="submit" onClick={e => this.sendInfo(e)}>SUBMIT</button>
      </form>
    );
  }
}

export default Submission;
