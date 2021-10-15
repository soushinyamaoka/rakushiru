import axios from 'axios';

export default class Service {
  private model: any = null
  private instance: Service;

  constructor(model: any) {
    this.model = model
    this.instance = this
  }

  public getInstance() {
    if(this.instance) {
      return this.instance
    }
    return this
  }

  public async send(req) {
    //console.log(req)
    console.log("B")
    console.log(req)
    const axiosA = axios.post(`http://localhost:8080/user-form`, req)
    console.log("C")
    //this.model = await axiosA;
    this.model = await axiosA;
    console.log("D")
    return this.model
    // axios.post(`http://localhost:8080/user-form`, req)
    // // axios.post(`http://127.0.0.1:63080/user-form`, req)
    //   .then(res => {
    //     console.log("返信が来ました")
    //     console.log(res.data)
    //     this.model = res.data;
    //     //this.setState({ persons });
    //   })
  }
  
  public requData: { reqCode: String, data: any} = {
    reqCode: "",
    data: null
  };

  public getData() {
    return this.model
  }
}