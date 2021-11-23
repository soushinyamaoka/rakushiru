export interface Recipes { RecipeId: string; Title: string; Introduction: string; Serving: string; Image: string; }
export interface Ingredients { RecipeId: string; OrderNo: number; Name: string; Quantity: string }
export interface Instructions { RecipeId: string; OrderNo: number; Detail: string; }

export class RecipeModel {
  [x: string]: {};

  constructor() {
    this.instance = this;
    this.instance.setModel();
  }

  getInstance() {
    if (this.instance) {
      return this.instance;
    }
    return this;
  }

  private instance: RecipeModel
  static RECIPE_ID = "RecipeId"
  static TITLE = "Title"
  static INTRODUCTION = "Introduction"
  static SERVING = "Serving"
  static IMAGE = "Image"
  static NAME = "Name"
  static INGREDIENTS = "Ingredients"
  static QUANTITY = "Quantity"
  static DETAIL = "Detail"
  static ORDER_NO = "OrderNo"

  public recipeModel: Recipes = {
    RecipeId: "",
    Title: "",
    Introduction: "",
    Serving: "",
    Image: ""
  };
  // {
  //   RecipeId: "1",
  //   Title: "",
  //   Introduction: "",
  //   Serving: 1,
  //   Image: ""
  // };
  // {
  //   RecipeCode: 1,
  //   title: "ポリポリ食感 きゅうりの佃煮　レシピ・作り方",
  //   info: "ごはんを食べる箸が止まらなくなるかも！？しょっぱい味が癖になる、ポリポリ食感きゅうりの佃煮です。簡単に作れる上に、食べ方はお好みで無限大に広がります。大量のきゅうりの消費にもオススメですよ。ぜひ作ってみて下さいね。",
  //   serving: 4,
  //   imgae: process.env.PUBLIC_URL + "/" + "food_sample.jpg"
  // };
  public ingredientModel: Ingredients[] = [
    {
      RecipeId: "",
      OrderNo: 1,
      Name: "",
      Quantity: ""
    }
    // }
    // {
    //   index: 1,
    //   name: "きゅうり",
    //   amount: "3本"
    // },
    // {
    //   index: 2,
    //   name: "塩",
    //   amount: "小さじ1"
    // },
    // {
    //   index: 3,
    //   name: "生姜",
    //   amount: "1片"
    // },
    // {
    //   index: 4,
    //   name: "(A)しょうゆ",
    //   amount: "大さじ3"
    // },
    // {
    //   index: 5,
    //   name: "(A)みりん",
    //   amount: "大さじ2"
    // },
    // {
    //   index: 6,
    //   name: "(A)酢",
    //   amount: "大さじ1"
    // },
    // {
    //   index: 7,
    //   name: "(A)砂糖",
    //   amount: "大さじ1/2"
    // },
    // {
    //   index: 8,
    //   name: "(A)鷹の爪輪切り",
    //   amount: "小さじ1/2"
    // },
    // {
    //   index: 7,
    //   name: "(A)砂糖",
    //   amount: "大さじ1/2"
    // },
    // {
    //   index: 8,
    //   name: "(A)鷹の爪輪切り",
    //   amount: "小さじ1/2"
    // }
  ];
  public instModel: Instructions[] = [
    {
      RecipeId: "",
      OrderNo: 1,
      Detail: ""
    }
    // {
    //   index: 1,
    //   how: "きゅうりのヘタを取り、薄い輪切りにします。"
    // },
    // {
    //   index: 2,
    //   how: "1をボウルに入れ塩を揉み込み、10分置き、出てきた水分を絞ります。"
    // },
    // {
    //   index: 3,
    //   how: "生姜を千切りにします。"
    // },
    // {
    //   index: 4,
    //   how: "2、3、(A)を鍋に入れて中火にかけます。混ぜながら味を染み込ませ、水分が無くなったら完成です。お好みでごはんに乗せてお召し上がり下さい。"
    // }
  ];

  public models: { Status: number; Recipes: any[]; Ingredients: any[]; Instructions: any[]; } =
    {
      Status: 0,
      Recipes: [],
      Ingredients: [],
      Instructions: []
    };

  public getHomeModels: { Recipes: any[]; } =
    {
      Recipes: [{
        RecipeCode: "1234",
        title: "ポリポリ食感ラーメン",
        info: "",
        serving: 0,
        imgae: "food_sample.jpg"
      },
      {
        RecipeCode: "88888",
        title: "ぱりぱりラーメン",
        info: "",
        serving: 0,
        imgae: "food_sample.jpg"
      },
      {
        RecipeCode: "77777",
        title: "醤油ラーメン",
        info: "",
        serving: 0,
        imgae: "food_sample.jpg"
      },
      {
        RecipeCode: "66666",
        title: "しおラーメン",
        info: "",
        serving: 0,
        imgae: "food_sample.jpg"
      }],
    };

  public setModel() {
    this.models.Recipes[0] = this.recipeModel
    this.models.Ingredients = this.ingredientModel
    this.models.Instructions = this.instModel
  }

  public getModel() {
    this.models.Recipes[0] = this.recipeModel
    this.models.Ingredients[0] = this.ingredientModel
    this.models.Instructions[0] = this.instModel
    return this.models
  }
}