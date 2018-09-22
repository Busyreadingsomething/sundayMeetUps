import React from 'react';
import NavBar from '../Nav/index';
import Submission from '../Submission/index';
import Modal from '../Modal/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: ['home', 'about', 'products', 'contact us'],
      data: null,
      submitted: false,
    };
  }

  toggleModal(data = null) {
    this.setState(prevState => ({
      data,
      submitted: !prevState.submitted,
    }));
  }

  render() {
    const { links, submitted, data } = this.state;
    return (
      <div className="app-container">
        <NavBar links={links} />
        <Submission toggle={data => this.toggleModal(data)} />
        { submitted && <Modal data={data}/>}
      </div>
    );
  }
}

export default App;
