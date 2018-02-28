export default {
    name: 'Cart',
    props: ['shopCarBook', 'addGoods'],
    data() {
        return {
            personInfo: ['刘德华','15888888888','618000','北京市','朝阳区','北京大道','158号'],
            changeChoose: false,
            hasAddGoods: [],
            changeChBook: [],
            addressTxt: '',
            bookcount: '',
            counts: [],
            personInfo_new: []
        }
    },
    computed: {
        totlePrice() {
            return this.bookcount + 10
        }
    },
    methods: {
        //图书选中状态切换
        changeGood(ind) {
              this.$props.shopCarBook[ind].changeBg =
              !this.$props.shopCarBook[ind].changeBg
           // this.hasAddGoods[ind].checked = !this.hasAddGoods[ind].checked;
            //this.$emit('changeChecked',ind);
        },
        cancel() {
            this.changeChoose = false
        },
        //点击编辑按钮
        compile() {
            this.changeChoose = true
        },
        //删除图书
        deleteBooks() {
            var arr = [];
            for (var i = 0; i < this.shopCarBook.length; i++) {
                //如果是被选中状态
                if (this.shopCarBook[i].changeBg) {
                    //就把被选中的存进一个数组
                    arr.push(this.shopCarBook[i].changeBg)
                    //删除选中数据
                    this.shopCarBook.splice(i, 1)
                    //如果购物车没有数据，则显示‘去逛逛页面’
                    console.log(this.$props.shopCarBook.length)
                // if (this.$props.shopCarBook.length == 0) {
                //         //怎么修改父级传递过来的值？
                //        this.$props.addGoods = true
                //     }
                }
                else{
                    alert("请选择你要删除的物品")
                }
            }
        },
        goBack(ele) {
            if (ele === 'addressInfo') {
                this.$refs.addressInfo.style.cssText = 'left:100%'
            } else {
                this.$refs.payMoney.style.cssText = 'left:100%'
            }
        },
        //前往支付
        goPay() {
            var bookCount = this.$refs.bookCount
            var arr = [];
            
            for (var i = 0; i < bookCount.length; i++) {
                var add = (this.shopCarBook[i].price * bookCount[i].textContent * 1)
                arr.push(add.toFixed(2) * 1)
            }
            this.bookcount = arr.reduce(function (a1, a2) {
                return a1 + a2
            })
            this.$refs.payMoney.style.cssText = 'left:0%'
        },
        changeAddress(ele) {
            this.$refs.addressInfo.style.cssText = 'left:0%'
            if (ele === 'add') {
                this.addressTxt = '确认增加'
            } else {
                this.addressTxt = '确认修改'
            }
        },
        //确认修改或增加地址
        conModify() {
            var inputVal = document.getElementsByName('inputVal')
            for (var i = 0; i < inputVal.length; i++) {
                this.personInfo_new.push(inputVal[i].value)
                this.personInfo=this.personInfo_new
                inputVal[i].value = ''
                inputVal[3].value = '四川省'
                inputVal[4].value = '成都市'
                inputVal[5].value = '武侯区'
            }
            this.$refs.addressInfo.style.cssText = 'left:100%'
        },
        //商品数量减少函数
        reduce(index) {
            var bookCount = this.$refs.bookCount
            bookCount[index].textContent--
                if (bookCount[index].textContent <= 1) {
                    bookCount[index].previousElementSibling.disabled = 'disabled'
                    bookCount[index].previousElementSibling.style.cssText =
                        'cursor: no-drop;background-color: #d5d2d2;'
                    bookCount[index].textContent = 1
                } else {
                    bookCount[index].previousElementSibling.style.cssText =
                        'background-color: white;'
                }
        },
        //商品数量增加函数
        add(index) {
            var bookCount = this.$refs.bookCount
            bookCount[index].previousElementSibling.style.cssText =
                'background-color: white;';
            bookCount[index].previousElementSibling.disabled = false
            bookCount[index].textContent++
        },
        //页面跳转
        gogoshopping() {
            this.$router.push({
                name: 'Homes'
            })
        }
    }
}
