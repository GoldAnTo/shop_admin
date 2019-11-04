<template>
  <el-container>
    <el-header>
      <div class="logo"></div>
      <div class="conn">
        <h1>电商后台管理系统</h1>
      </div>
      <div class="logout">
        欢迎您:XXX
        <a href="javaScript:;" @click="logout">退出登录</a>
      </div>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="12">
                   <el-menu
          :default-active="active"
          router
          unique-opened
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu :index="i.path" v-for="i in asideList" :key="i.id">
            <template v-slot:title>
              <i class="el-icon-location"></i>
              <span>{{i.authName}}</span>
            </template>
            <el-menu-item :index="ic.path" v-for="ic in i.children" :key="ic.id">
              <i class="el-icon-menu"></i>
              <span slot="title">{{ic.authName}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <!-- 主体部分 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  created () {
    this.$axios({
      method: 'get',
      url: 'menus'
    }).then(res => {
      const { data } = res
      // console.log(data, meta)
      this.asideList = data
    })
  },
  computed: {
    active () {
      return this.$route.path.slice(1)
    }
  },
  methods: {
    // 退出
    logout () {
      this.$confirm('您确定要退出吗', '温馨提示', {
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!'
          })
          localStorage.removeItem('token')
          this.$router.push('/login')
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消退出!'
          })
        })
    }
  },
  data () {
    return {
      asideList: []
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
    background-color: #545c64;
    .el-submenu {
      width: 200px;
    }
  }
  .el-main {
    background-color: rgb(221, 216, 216);
  }
}
</style>
