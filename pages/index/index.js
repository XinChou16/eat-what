//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    msg: '这顿吃什么',
    text: '中午吃什么，吃什么?',
    textMeal:'馒头',
    userInfo: {},
    flag: false,
    condition: false,
    mealId:null,
    btnToEat:'点我开吃',
    hasUserInfo: false,
    randomMeal:['汉堡','炸鸡','鱼香肉丝','炸鸡','腐竹蛋','腐竹肉'],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    scrollLeft: 400,
    toView: 'red'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  renderMeal: function() {
    var that = this;
    that.setData({condition: true}) 
    let mealArr = ['汉堡', '炸鸡', '鱼香肉丝', '炸鸡', '腐竹蛋', '腐竹肉', '麻婆豆腐', '腐竹肉','腐竹肉', ];
    // console.log(this.data.mealId);
    // console.log(this.data.flag);
    if(this.data.flag) {
      clearInterval(this.data.mealId);
      console.log('清除');
      that.setData({
        btnToEat: '不行，换一个',
        text: '中午吃什么，吃这个',
        flag : false
      }) 
      return; 
    } else{
      that.setData({
        text: '中午吃什么，吃什么',
        btnToEat: '就这个了',
        flag : true
      }) 
      let _mealId = setInterval(function(){
        var randomNum = Math.floor(Math.random() * mealArr.length);
        that.setData({
          textMeal: mealArr[randomNum],
        })
      },60)
      this.setData({
        mealId: _mealId
      })
    }
  },
  generateMeal: function() {

  }
})
