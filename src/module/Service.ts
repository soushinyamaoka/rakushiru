import axios from 'axios';

export default class Service {
  send() {
    axios.post(`http://localhost:8080/user-form`)
      .then(res => {
        const persons = res.data;
        //this.setState({ persons });
      })
  }
  
}