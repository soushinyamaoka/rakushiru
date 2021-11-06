import axios from 'axios';
import config from '../config.json';

export default class Service {
  private model: any = null
  // private instance: Service;
  static REQ_SAVE_RECIPE: string = "saveRecipe"

  // constructor(model: any) {
  //   this.model = model
  //   this.instance = this
  // }

  // public getInstance() {
  //   if(this.instance) {
  //     return this.instance
  //   }
  //   return this
  // }

  public getUrl(key: string): string {
    const url: string = config.serveInfo.protocol +
                        config.serveInfo.host +
                        ":" +
                        config.serveInfo.port +
                        "/" +
                        config.serveInfo[key]
    return url
  }

  public async send(req) {
    console.log("SEND")
    console.log(this.getUrl(req.ReqCode))
    const axiosA = axios.post(this.getUrl(req.ReqCode), req)
    this.model = await axiosA;
    console.log("できました")
    console.log(this.model)
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
  
  public requData: { reqCode: string, data: any} = {
    reqCode: "",
    data: null
  };

  public reqSelectRecipe: { ReqCode: string, RecipeId: string} = {
    ReqCode: "",
    RecipeId: ""
  };

  public reqParam: { ReqCode: string, Data: any} = {
    ReqCode: "",
    Data: null
  };

  public getData() {
    return this.model
  }
}