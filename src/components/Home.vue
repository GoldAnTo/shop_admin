<template>
  <el-container>
    <el-header>
      <div class="logo"></div>
      <div class="conn">
        <h1>电商后台管理系统</h1>
      </div>
      <div class="logout">
        欢迎您:XXX  <a href="javaScript:;" @click="logout">退出登录</a>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$confirm('您确定要退出吗', '温馨提示', {
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
        localStorage.removeItem('token')
        this.$router.push('/login')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消退出!'
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
.el-container {
  height: 100%;
  .el-header {
    background-color: rgb(157, 157, 170);
    display: flex;
    line-height: 60px;
    text-align: center;
    .logo {
      width: 180px;
      height: 60px;
      background: url("../assets/logo.png") no-repeat center center/contain;
    }
    .conn {
      flex: 1;
      color: #fff;
    }
    .logout {
      width: 180px;
      height: 60px;
      font-weight: 700;
      font-size: 18px;
    }
  }
  .el-aside {
    background-color: rgb(184, 177, 177);
  }
  .el-main {
    background-color: rgb(221, 216, 216);
  }
}
</style>
