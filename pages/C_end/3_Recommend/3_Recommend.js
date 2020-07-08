
Page({

  /**
   * Page initial data
   */
  data: {
    users:[{
      name:"Blackrock",
      sex:"NYC",
      edu:"3 months",
      college:"$100 million/day"
    },{name:"DE Shaw",
    sex:"London",
    edu:"1 months",
    college:"$50 million/day"}],
    test:"Comeon",

    loading: true
  },
  setLoading:function(e){
    this.setData({
      loading:!this.data.loading
    });
  },
  click_view_more:function(e){
    wx.navigateTo({
      url: '/pages/C_end/3_Recommend/Recommend_Detail/Recommend_Detail',
    })
  },
  


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})