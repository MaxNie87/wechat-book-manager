<template>
  <div class="container">
    <div class="userinfo">
      <img :src="userinfo.avatarUrl" alt />
      <p>{{userinfo.nickName}}</p>
    </div>
    <YearProgress />

    <button class="addbook btn" @click="scanBook">Add Book</button>
    <button class="btn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">Get User Info</button>
  </div>
</template>

<script>
import YearProgress from "@/components/YearProgress";
import { get, post, showSuccess } from '../../util';

export default {
  components: {
    YearProgress
  },
  data() {
    return {
      userinfo: {}
    };
  },
  created() {
    this.userinfo = wx.getStorageSync("userinfo");
  },
  methods: {
    async add(isbn) {
      console.log('UserInfo: ' + this.userinfo)
      console.log('Start add book: ISBN: ' + isbn)

      const res = await post('/weapp/addbook', {
        isbn
        // openid : this.userinfo.openid
      })

      console.log(res)

      showSuccess('Success Add Book', res.name)
    },

    async demo() {
      const res = await get('')
    },

    scanBook() {
      // scan from camero or image
      wx.scanCode({
        success: (res) => {
          console.log(res)
          if(res.result) {
            // addBook(res.result)
            this.add(res.result)
          }
        }
      })
    },

    onGotUserInfo: function(e) {
      //   console.log(e.detail.userInfo);
      console.log(e);
      this.userinfo = e.target.userInfo;
    }
  }
};
</script>

<style lang='scss'>
.container {
  padding: 30rpx;
}
.userinfo {
  margin-top: 100rpx;
  text-align: center;
  img {
    width: 150rpx;
    height: 150rpx;
    margin: 20rpx;
    border-radius: 50%;
  }
}
</style>