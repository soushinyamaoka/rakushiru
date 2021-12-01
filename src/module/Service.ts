import axios from 'axios';
import config from '../config.json';
import { RecipeModel, KeyWord, Recipes, Ingredients, Instructions } from './RecipeModel';
import { Const } from './Const';

export default class Service {
  private model: any = null
  // private instance: Service;
  static REQ_SAVE_RECIPE: string = "saveRecipe"

  public getUrl(key: string): string {
    let url: string = config.serveInfo.protocol +
      config.serveInfo.host +
      ":" +
      config.serveInfo.port +
      "/" +
      config.serveInfo[key]
    return url
  }

  public getImagePath(name: string): string {
    const url: string = config.serveInfo.protocol +
      config.serveInfo.host +
      ":" +
      config.serveInfo.port +
      "/" +
      config.serveInfo.openImage +
      "/" +
      name
    return url
  }

  public getRank1(): string {
    
    return config.keyWord.rank1
  }

  public getKeyWord(): KeyWord[] {
    return [{Word: config.keyWord.rank1}, {Word: config.keyWord.rank2}, {Word: config.keyWord.rank3}]
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
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    this.model = await axiosA;
    console.log("できました")
    console.log(this.model)
    return this.model
  }

  public async openHome(req) {
    console.log("SEND:openHome")
    console.log(req)
    const axiosA = axios.post(this.getUrl(req.ReqCode), req)
    this.model = await axiosA;
    console.log("できました")
    console.log(this.model)
    return this.model
  }


  public async selectRecipe(req) {
    console.log("SEND")
    console.log(req)
    const axiosA = axios.post(this.getUrl(req.ReqCode), req)
    this.model = await axiosA;
    console.log("できました")
    console.log(this.model)
    return this.model
  }

  public requData: { reqCode: string, data: any } = {
    reqCode: "",
    data: null
  };

  public reqSelectRecipe: { ReqCode: string, RecipeId: string } = {
    ReqCode: "",
    RecipeId: ""
  };

  public reqParam: { ReqCode: string, Data: any } = {
    ReqCode: "",
    Data: null
  };

  public getData() {
    return this.model
  }

  // TODO：要共通化-------
  public add (model, setModel, keyNo, recipeId) {
    console.log(model)
    if (keyNo === Const.RECIPE_INGRE_NO) {
      const ingredient: Ingredients = {
        RecipeId: recipeId,
        OrderNo: model.length + 1,
        // OrderNo: maxIngOrder + 1,
        Name: '',
        Quantity: ''
      }
      setModel([...model, ingredient])
    } else {
      const instructions: Instructions = {
        RecipeId: recipeId,
        OrderNo: model.length + 1,
        // OrderNo: maxInstOrder + 1,
        Detail: ''
      }
      setModel([...model, instructions])
    }
  };

  public upRow(n, model, setModel) {
    if (n - 1 < 0) return
    const model_copy = model.slice()
    model_copy.splice(n - 1, 2, model_copy[n], model_copy[n - 1])
    setModel(model_copy)

  };

  public downRow(n, model, setModel){
    if (n + 2 > model.length) return
    const model_copy = model.slice()
    model_copy.splice(n, 2, model_copy[n + 1], model_copy[n])
    setModel(model_copy)
  };

  public delRow(n, model, setModel){
    if (model.length === 1) return
    let model_copy = model.slice()
    model_copy.splice(n, 1)
    setModel(model_copy)
  };

  public changeValue(e: React.ChangeEvent<any>,
    index: number, model: any, setModel: any, key: string){
    const value = e.target.value;
    if (model.length) {
      const model_copy = model.slice()
      model_copy[index][key] = value
      setModel(model_copy)
    } else {
      const model_copy = model
      model_copy[key] = value
      setModel(model_copy)
    }
  };
  // ------------------
}