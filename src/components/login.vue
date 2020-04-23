<template>
  <div>
      <div class="app">
          <div class="Container">
              <div class="login">
                  <div class="loginL">
                      <h2 v-text="`${loginTitle}`"></h2>
                      <div class="userLogin">
                          <div class="uname">
                              <input type="text" placeholder="输入用户名" v-model="usname" v-on:input="setUsData" >
                          </div>
                          <div class="upwd">
                              <input type="password" placeholder="输入密码" v-model="upwd">
                          </div>
                          <div class="RememberUpwd">
                              <div class="RememberL">
                                <el-switch v-model="value1"
                                    >
                                </el-switch>
                                <span class="activeV">记住密码</span>

                              </div>
                              <div class="RememberR">
                                  <span>忘记密码？</span>
                              </div>

                          </div>
                          <div class="SignIn">
                              <span @click="login">登录</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginTitle: '广西中职课堂教学质量监控系统',
      value1: false,
      usname: '',
      upwd: ''
    }
  },
  methods: {
    login () {
      if (this.value1) {
        this.$Cookies.set('upwd', this.upwd)
        this.$Cookies.set('usname', this.usname)
      }
      if (this.usname === 'admin' && this.upwd === '123456') {
        this.$store.commit('isLogin')
        this.$Cookies.set('isLogin', true)
        this.$router.push({path: '/'})
      } else {
        this.usname = ''
        this.upwd = ''
        this.value1 = false
        this.isLogin = false
      }
    },
    setUsData () {
      if (this.$Cookies.get('usname') === this.usname) {
        this.upwd = this.$Cookies.get('upwd')
      }
    }

  },
  created () {

  },
  mounted () {

  },
  computed: {

  }

}
</script>

<style scoped>
  .app{
    display:block;
    width:1920px;
    height: 1080px;
    background:url('../../static/images/background-image.gif');

  }
  .Container{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .userLogin input::-webkit-input-placeholder {
    /* WebKit browsers */
        color: #fff;
    }
   .userLogin input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
        color: #fff;
    }
   .userLogin input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
        color: #fff;
    }
   .userLogin input:-ms-input-placeholder {
    /* Internet Explorer 10+ */
        color: #fff;
    }
  .login{
      padding-top:135px ;
      display: flex;
      justify-content: flex-end;
      padding-right: 166px;
      box-sizing: border-box;
  }
  .login .loginL{
      background: url(../../static/images/image1.png);
      width: 620px;
      box-sizing: border-box;
      height:792px;
  }
  .loginL>h2{
      color:#fff;
      text-align: center;
      padding: 120px 0;
      font-size: 36px;
      font-weight: bold;
      font-family:思源黑体 CN Bold;

  }
  .userLogin {
      width:100%;height:100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 0 40px;
  }
  .uname input {
      width: 100%;
        background: url(../../static/images/user.png)no-repeat;
        border: 0;
        border-bottom: 1px solid #fff;
        padding-left: 50px;
        background-position: 7px  1px;
        height: 36px;
        outline: none;
        color:#fff;
        font-size: 24px;
        font-family:思源黑体 CN Bold;
  }
  .upwd input {
      width: 100%;
        background: url(../../static/images/password.png)no-repeat;
        border: 0;
        border-bottom: 1px solid #fff;
        padding-left: 50px;
        background-position: 7px  1px;
        height: 36px;
        outline: none;
        color:#fff;
        font-size: 24px;
        font-family:思源黑体 CN Bold;
  }
  .upwd{
   margin-top: 67px;
   margin-bottom: 33px;
  }

  .RememberUpwd{
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .RememberR span{
    color:#fff;
    font-size: 14px;
    font-family:思源黑体 CN Bold;
    display: inline-block;
    cursor: pointer;
  }
  .RememberL .activeV{
    color:#fff;
    font-size: 14px;
    font-family:思源黑体 CN Bold;
    display: inline-block;
    padding-left: 15px;
  }
  .RememberL{
   display: flex;
   align-items: center;
  }
  .SignIn{
      padding: 130px  70px;
  }
  .SignIn span{
      padding: 20px 130px;
      background: #4ca5fe;
      font-weight: 500;
      font-size: 30px;
      font-family:思源黑体 CN Bold;
      color:#fff;
      cursor: pointer;
      letter-spacing:15px;
      border-radius: 7px;

  }
</style>
