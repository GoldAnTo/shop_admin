<template>
  <div class="Login">
    <el-form ref="form" :model="form" label-width="80px">
    <img src="../assets/avatar.jpg" alt="">
  <el-form-item label="用户名">
    <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
  </el-form-item>
    <el-form-item label="密码">
    <el-input v-model="form.parseWord" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">登录</el-button>
    <el-button class="quey">取消</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        userName: '',
        parseWord: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style lang="less">
  .Login{
    height: 100%;
    background-color: pink;
    overflow: hidden;
      .el-form{
        width: 400px;
        margin: 400px auto;
        background-color: #fff;
        padding: 50px 45px 20px 20px;
        position: relative;
        .quey{
          margin-left: 80px;
        }
        img{
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: -35%;
          border-radius: 50%;
          border: 15px solid #fff
        }
      }
  }
</style>
