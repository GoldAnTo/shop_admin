<template>
  <div class="Login">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules" status-icon>
    <img src="../assets/avatar.jpg" alt="">
  <el-form-item label="用户名" prop="userName">
    <el-input v-model="form.userName" placeholder="请输入用户名" ></el-input>
  </el-form-item>
    <el-form-item label="密码" prop="parseWord">
    <el-input v-model="form.parseWord" placeholder="请输入密码" ></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">登录</el-button>
    <el-button class="quey" @click="resetForm">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      form: {
        userName: '',
        parseWord: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名称', trigger: ['blur', 'change'] },
          { min: 3, max: 6, message: '长度在 3 到 8 个字符', trigger: ['blur', 'change'] }
        ],
        parseWord: [
          { required: true, message: '请输入密码', trigger: ['blur', 'change'] },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: ['blur', 'change'] }
        ]
      } }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate((vid, obj) => {
        if (!vid) return
        // console.log(vid, obj)
        axios({
          method: 'post',
          url: 'http://localhost:8888/api/private/v1/login',
          data: {
            username: this.form.userName,
            password: this.form.parseWord
          }
        }).then(res => {
          const { data, meta } = res.data
          if (meta.status === 400) {
            return this.$message(meta.msg)
          } else {
            localStorage.setItem('token', data.token)
            this.$router.push('/home')
            this.$message.success(meta.msg)
          }
        }).catch(res => {
          console.log(res)
        })
      })
    },
    resetForm () {
      this.$refs.form.resetFields()
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
        border-radius: 40px;
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
