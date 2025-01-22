// index.js
const { stores } = require('../../config.js');

Page({
  data: {
    stores: stores,
  },
  navigateToStore(e) {
    const storeId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/store/store?id=${storeId}`,
    });
  },
  switchStore() {
    wx.showActionSheet({
      itemList: this.data.stores.map(store => store.name),
      success: (res) => {
        const storeId = this.data.stores[res.tapIndex].id;
        wx.navigateTo({
          url: `/pages/store/store?id=${storeId}`,
        });
      },
    });
  },
});
