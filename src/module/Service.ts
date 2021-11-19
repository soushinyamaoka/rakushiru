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

  public async send(req, file: File) {
    console.log("SEND")
    console.log(req)
    const formData = new FormData();
    if (file) {
      formData.append('image', file);
    }
    const data = JSON.stringify(req)
    formData.append("Data", data)
    const axiosA = axios.post(this.getUrl(req.ReqCode), formData, {
      headers: {'Content-Type': 'multipart/form-data'},
    })
    this.model = await axiosA;
    console.log("できました")
    console.log(this.model)
    return this.model
  }

  public async openHome(req) {
    console.log("SEND")
    console.log(req)
    const axiosA = axios.post(this.getUrl(req.ReqCode), req)
    this.model = await axiosA;
    console.log("できました")
    console.log(this.model)
    return this.model
  }
  
  async handleSubmit(req, files: FileList) {
    const formData = new FormData();
    for (var i in files) {
      formData.append('image', files[i]);
    }
    const data = JSON.stringify({
      Description: 'rorororor',
    })
    formData.append('Data', data);
    console.log("おくります")
    console.log(formData)
    const axiosA = axios.post(this.getUrl(req.ReqCode), formData, {
      headers: {'Content-Type': 'multipart/form-data'},
    })

    // const postArticleImage = postArticleImageFactory();
    // const resImageNames = await postArticleImage(formData);
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