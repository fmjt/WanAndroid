// pages/mine/mine.js
Page({

    /**
     * Page initial data
     */
    data: {

    },

    clickMe: function() {
        console.log("点击了按钮");
        let url = "https://mp.weixin.qq.com/s/J7Q263kqSdeyh1tvunKLsA"; 
        wx.navigateTo({
            url: '../detail/detail' + '?url=' + url
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