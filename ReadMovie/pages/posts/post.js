var postsData=require('../../data/posts-data.js')

Page({
  data: {
    date: "Sep 18 2016",
    title: "正是虾肥蟹壮时",
    posts_key: [

    ]


  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
   
// 难点




    this.setData({
      posts_key: postsData.postList
    });
  }

})