<template>
  <div class="login">
    <div class="login_view">
     <div class="input"> <input type="text" placeholder="username" v-model="model.username"></div>
      <div class="input"><input type="password" placeholder="password" v-model="model.password"></div>
      <div class="text-align-c"><button>Login</button></div>
    </div>
  </div>
</template>

<script>
export default{
  name: "Login",
  data(){
    return{
      model: {}
    }
  },
  methods:{
  }
}
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   background-image: linear-gradient(rgb(44, 41, 41),gray);
  
  }
  .login_view{
   
    width: 240px;
    height: 400px;
    border-radius: 5px;
    box-shadow: 5px 5px 2px rgba(0,0,0,.6);
    background-color: rgba(153, 173, 173, .6);
    overflow: hidden;
  }
  .input{
    padding: 5px 15px;
    /* background-color: rgba(153, 173, 173, .6); */
  }
  input{
    outline: none;
    border: none;
    font-size: 18px;
    width: 100%;
    /* background-color: rgba(153, 173, 173, .6); */
  }
  button{
    width: 80px;
    font-size: 18px;
    color: #000;
    background-color: rgba(153, 173, 173, .6);
    border: none;
    /* text-decoration: none; */
  }
</style>
