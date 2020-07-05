<template>
  <div class="flex-col pos-rel m-x-1" style="border-bottom: 1px solid rgb(212, 201, 175);">
    <div class="p-x-1 p-y-1 flex-row jc-sb " @click="hide = !hide" style="position: relative; z-index: 9999;">
      <div>
        <i class="iconfont color-w margin-right-5" :class="[`icon-${left}`]"></i> 
        <span class="color-w">{{title}}</span>
      </div>
       <i class="iconfont color-w" :class="[`icon-${right}`,{rotate1: hide, rotate2: !hide}]"></i>
    </div>
    <div  :class="{content: hide}"  v-for="(item, index) in items" :key="index">
      <div class="beizhu  p-y-1  fs-1 color-gray-1 m-x-1" v-if="item.beizhu"><span class="color-w">{{item.beizhu}}</span></div>
      <ul class="">
        <router-link 
        tag='li'
        class="cursor-pointer shanzi color-gray m" 
        v-for="(content, index) in item.contents"
        :key="index"
        :to="`${content.target}`"
        :data-spotLight='`${content.content}`'
        >
        {{content.content}}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default{

  props: {
    title: {
      type: String
    },
    left: {
      type: String
    },
    right: {
      type:String
    },
    items: {
      type: []
    }
  },
  data(){
    return{
      hide: false
    }
  },
  methods:{
  }
}
</script>

<style scoped>
  
  i{
    font-size: 1.2em;
  }
  
 .content {
    transform: scale(0);
    display: none;
    overflow: hidden;
    transition: all .3s linear;
  }
  

  .rotate1{
    transform-origin: center;
    display: inline-block;
    transition: all .3s linear ;
    transform: rotate(0deg);
  }
  .rotate2{
    transform-origin: center;
    display: inline-block;
    transition: all .3s linear ;
    transform: rotate(180deg);
  }
  li{
    color:rgb(218, 207, 207);
    font-family: 'Helvetica';
    font-weight: bold;
    letter-spacing: 5px;
    position: relative;
  }
  li:hover:before{
    /* background-image: linear-gradient(75deg, red ,blue); */
    content: attr(data-spotLight);
    color: #333;
    position: absolute;
    top: 0;
    left: 0;
    /* transform: translate(-50%, -50%); */
    clip-path: ellipse(100px 100px at 0% 50%);
    -webkit-clip-path: ellipse(100px 100px at 0% 50%);
    animation: spotLight 5s infinite;
  }

  @keyframes spotLight {
    0%{
      clip-path: ellipse(15px 15px at 0% 50%);
    -webkit-clip-path: ellipse(15px 15px at 0% 50%);
    }

    50%{
      clip-path: ellipse(15px 15px at 100% 100%);
    -webkit-clip-path: ellipse(15px 15px at 100% 100%);
    }

    100%{
      clip-path: ellipse(15px 15px at 0% 50%);
    -webkit-clip-path: ellipse(15px 15px at 0% 50%);
    }
  }
</style>
