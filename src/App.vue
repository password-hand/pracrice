<template>
    <div id="app">
        <main>
            <router-view @goShopping='goShopping' :shopCarBook='shopCarBook' 
            :addGoods='addGoods' />
        </main>
        <footer>
            <nav>
                <router-link tag="div" :to="{name: 'Homes'}" exact>
                    <i class="fa fa-home"></i>
                    <span>首页</span>
                </router-link>
                <router-link tag="div" :to="{name: 'Catea'}">
                    <i class="fa fa-sitemap"></i>
                    <span>分类</span>
                </router-link>
                <router-link tag="div" :to="{name: 'Car',params: {book: 1}}">
                    <i class="fa fa-shopping-cart"></i>
                    <span>购物车</span>
                </router-link>
                <router-link tag="div" :to="{name: 'Mes'}">
                    <i class="fa fa-user"></i>
                    <span>我</span>
                </router-link>
            </nav>
        </footer>
    </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      addGoods: true,
      shopCarBook: [],
      a: 0,//计数器
      b: 1
    };
  },
  methods: {
    /**
     * 参数1：val=json里面的书籍信息
     * 参数2：ele=select里面选择的值
     */
    goShopping(val, ele) {
      //判断shopCarBook的长度
      if (this.shopCarBook.length == 0) {
        //将获取的数据放入一个数组
        this.shopCarBook.push(val);
        this.addGoods = false;
        //截取选择数量（去掉单位：本）
        ele = ele.slice(0, 1);
        //根据点击次数，为数组对象添加属性
        this.shopCarBook[this.a].count = ele;
        this.addGoods = false;
         this.a++;
        alert("物品添加成功！");
      } else {
        // 长度部位0的时候
        console.log(this.shopCarBook)
          if (this.shopCarBook.indexOf(val)>=0) {
            alert("已经添加");
            //return ;
          } else {
            //将获取的数据放入一个数组
            this.shopCarBook.push(val);
            //截取选择数量（去掉单位：本）
            ele = ele.slice(0, 1);
            //根据点击次数，为数组对象添加属性
            this.shopCarBook[this.a].count = ele;
             this.a++;
            alert("物品添加成功！");
          }
      }

      //将获取的数据放入一个数组
      //this.shopCarBook.push(val);
      //console.log(this.shopCarBook)
      //截取选择数量（去掉单位：本）
      //ele = ele.slice(0, 1);
      //根据点击次数，为数组对象添加属性
      //   this.shopCarBook[this.a].count = ele;
      //   this.addGoods = false;
      //   this.a++;
      //   alert("物品添加成功！");
    }
  }
};
</script>

<style lang="scss">
@import "assets/style/normalize.css";
@import "assets/style/app.scss";
.el-message-box {
  width: 250px !important;
}

.el-message el-message--success {
  width: 100% !important;
}
</style>