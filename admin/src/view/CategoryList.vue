<template>
  <div>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230">
      </el-table-column>
      <el-table-column prop="parent.name" label="上级分类" width="230">
      </el-table-column>
      <el-table-column prop="name" label="分类名称" width="200">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click='$router.push(`/categories/edit/${scope.row._id}`)'>编辑</el-button>
        <el-button @click="remove(scope.row._id)" type="danger" size="small">删除</el-button>
      </template>
    </el-table-column>
  
    </el-table>
  </div>
</template>

<script>
export default{
  
  data(){
    return{
      items: []
    }
  },
  methods:{
    async fetch(){
      const res = await this.$http.get('rest/categories');
      this.items = res.data
    },

    // 删除
    async remove(row) {
      console.log(row)
      await this.$http.delete(`rest/categories/${row}`);
      this.fetch()
    }


  },

  created(){
    this.fetch()
  }
}
</script>

<style scoped>
</style>
