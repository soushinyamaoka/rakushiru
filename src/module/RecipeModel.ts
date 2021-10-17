export default class RecipeModel {

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

  public recipeInfoModel: { RecipeCode: number; Title: string; Info: string; Serving: number; Imgae: string; } =
  {
    RecipeCode: 1,
    Title: "",
    Info: "",
    Serving: 1,
    Imgae: ""
  };
    // {
    //   RecipeCode: 1,
    //   title: "ポリポリ食感 きゅうりの佃煮　レシピ・作り方",
    //   info: "ごはんを食べる箸が止まらなくなるかも！？しょっぱい味が癖になる、ポリポリ食感きゅうりの佃煮です。簡単に作れる上に、食べ方はお好みで無限大に広がります。大量のきゅうりの消費にもオススメですよ。ぜひ作ってみて下さいね。",
    //   serving: 4,
    //   imgae: process.env.PUBLIC_URL + "/" + "food_sample.jpg"
    // };
  public materialModel: { Index: number; Name: string; Amount: string }[] = [
    {
      Index: 1,
      Name: "",
      Amount: ""
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
  public howModel: { Index: number; How: string }[] = [
    {
      Index: 1,
      How: ""
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

  public models: { recipeInfo: any; material: any; how: any;} =
    {
      recipeInfo: null,
      material: null,
      how: null
    };

    public setModel() {
    this.models.recipeInfo = this.recipeInfoModel
    this.models.material = this.materialModel
    this.models.how = this.howModel
  }

  public getModel() {
    this.models.recipeInfo = this.recipeInfoModel
    this.models.material = this.materialModel
    this.models.how = this.howModel
    return this.models
  }
}