import React from 'react';
import NavBar from '../Nav/index';
import Submission from '../Submission/index';

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
    const { links, submitted, toggleModal } = this.state;
    return (
      <div className="app-container">
        <NavBar links={links} />
        <Submission toggle={data => toggleModal(data)} />
        { submitted && <Modal />}
      </div>
    );
  }
}

export default App;
