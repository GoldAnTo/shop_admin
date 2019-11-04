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
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">
                    <i class="el-icon-menu"></i>
                    用户列表
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>权限管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">
                    <i class="el-icon-menu"></i>角色列表
                  </el-menu-item>
                  <el-menu-item index="2-2">
                    <i class="el-icon-menu"></i>权限列表
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>商品管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">
                    <i class="el-icon-menu"></i>商品列表
                  </el-menu-item>
                  <el-menu-item index="3-2">
                    <i class="el-icon-menu"></i>分类列表
                  </el-menu-item>
                  <el-menu-item index="3-3">
                    <i class="el-icon-menu"></i>商品分类列表
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>订单管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">
                    <i class="el-icon-menu"></i>订单详情
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>数据统计</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="5-1">
                    <i class="el-icon-menu"></i>数据报表
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <!-- 主体部分 -->
      <el-main>
        <!-- 路由导航 -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">用户列表</a>
          </el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 搜索 -->
        <div style="margin : 15px 0 ;">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <el-button icon="el-icon-search"></el-button>
          <el-button type="success" plain class="add">添加用户</el-button>
        </div>
        <!-- 表单 -->
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="姓名" ></el-table-column>
          <el-table-column prop="email" label="邮箱" ></el-table-column>
          <el-table-column prop="phone" label="电话"></el-table-column>
          <el-table-column prop="done" label="状态"></el-table-column>
          <el-table-column prop="caozuo" label="操作"></el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
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
    },

    //
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  data () {
    return {
      input: ''
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
    .el-breadcrumb {
      padding-left: 10px;
      height: 40px;
      line-height: 40px;
      background-color: #ddd;
      margin-bottom: 20px;
    }
    .el-input {
      width: 240px;
    }
    .add {
      margin-left: 40px;
    }
  }
}
</style>
