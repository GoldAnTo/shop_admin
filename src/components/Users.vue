<template>
  <div class="users">
    <!-- 路由导航 -->
    <!-- <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">用户列表</a>
          </el-breadcrumb-item>
    </el-breadcrumb>-->
    <!-- 搜索 -->
    <!-- <div style="margin : 15px 0 ;">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <el-button icon="el-icon-search"></el-button>
          <el-button type="success" plain class="add">添加用户</el-button>
    </div>-->
    <!-- 表单 -->
    <el-table style="width: 100%" :data="usersList">
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column prop="mg_state" label="状态">
        <template v-slot="scope">
          <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949" @change="change(scope.row)"></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="mobile" label="操作">
        <template v-slot="scope">
          <el-button type="primary" icon="el-icon-edit" circle mini plain></el-button>
          <el-button type="danger" icon="el-icon-delete" circle mini plain></el-button>
          <el-button type="primary" round mini plain>操作</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[2,4,6,8]"
        :page-size="100"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.getUsersList()
  },
  data () {
    return {
      query: '',
      pagenum: 1,
      pagesize: 2,
      usersList: [],
      total: 6
    }
  },
  methods: {
    getUsersList () {
      this.$axios({
        method: 'get',
        url: 'users',
        params: {
          query: this.query,
          pagenum: this.pagenum,
          pagesize: this.pagesize
        }
      }).then(res => {
        // console.log(res)
        const { data } = res
        this.usersList = data.users
        this.total = data.total
        // console.log(res)
      })
    },
    handleSizeChange (val) {
      this.pagenum = 1
      this.pagesize = val
      this.getUsersList()
    },
    handleCurrentChange (val) {
      this.pagenum = val
      this.getUsersList()
    },
    change ({ id, mg_state: mgState }) {
      this.$axios({
        method: 'put',
        url: `users/${id}/state/${mgState}`
      }).then(res => {
        const { meta } = res
        if (meta.status === 200) {
          this.$message.success(meta.msg)
        } else {
          this.$message.error(meta.msg)
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
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
</style>
