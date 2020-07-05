<template>
  <div>
    <h2>{{id? "编辑": "新建"}}分类</h2>
    <el-form label-width="200px">
      <el-form-item label="分类">
        <el-select v-model="model.parent">
          <el-option
            v-for="item in parents"
            :key="item._id"
            :value="item._id"
            :label="item.name"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default{
 props: {
   id: {}
 },
  data(){
    return{
      model: {},
      parents: []
    }
  },
  methods:{
     async save() {
      if(this.id) {
         // console.log(this)
        await this.$http.put(`rest/categories/${this.id}`,this.model);
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      } else {
         // console.log(this)
        await this.$http.post("rest/categories",this.model);
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      }
      this.$router.push('/categories/list')
    },

    async fetch() {
      const res = await this.$http(`rest/categories/${this.id}`);
      this.model = res.data
    },
    async fetchParents() {
      const res = await this.$http(`rest/categories`);
      this.parents = res.data
    }
  },

  created(){
    this.fetchParents();
    this.id && this.fetch()
  }
}
</script>

<style scoped>
</style>
