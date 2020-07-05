<template>
  <div>
    <h2>{{id? "编辑": "新建"}}装备</h2>
    <el-form label-width="200px">
      <el-form-item label="技能">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL+ 'upload'"
          :show-file-list="false"
          :on-success="afterUpload"
         >
            <img v-if="model.icon" :src="model.icon" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
      // parents: []
    }
  },
  methods:{
     async save() {
      if(this.id) {
         // console.log(this)
        await this.$http.put(`rest/items/${this.id}`,this.model);
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      } else {
         // console.log(this)
        await this.$http.post("rest/items",this.model);
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      }
      this.$router.push('/items/list')
    },

    async fetch() {
      const res = await this.$http(`rest/items/${this.id}`);
      this.model = res.data
    },
    // async fetchParents() {
    //   const res = await this.$http(`rest/items`);
    //   this.parents = res.data
    // }

    afterUpload(res){
      this.$set(this.model, 'icon', res)
    }
  },

  created(){
    // this.fetchParents();
    this.id && this.fetch()
  }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
