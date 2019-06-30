import React , {Component} from 'react';
import {Button} from 'reactstrap';

import Alert from './components/organisms/Alert';
import Drop from './components/organisms/Dropdown'
import Grooup from './components/organisms/ButtonGrup2'
class App extends Component {
  render(){
  return (
    <div>
    <div>My name is nazri</div>
    <Button color="primary">tombol primary </Button> {' '}
    <Button color="secondary">secondary</Button> {''}
    <Button color="info">Info</Button>{' '}
    <Button color="success">success</Button>{' '}
    <Button color="danger">danger</Button> {' '}
    <Alert/>
    <Drop/>
    <div>
    </div>
    <Grooup/>
    </div>

  );
}
}
export default App;
