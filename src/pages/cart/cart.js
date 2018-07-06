/* eslint-disable */
import './cart.less';

window.onload = function () {
    //得到整个面板
    var cart_content_panel = document.querySelector('.cart_content_panel');
    //得到合计栏
    var cart_panel_total = document.querySelector('.cart_panel_total');
    //得到合计的价格
    var cart_panel_total_count = document.querySelector('.cart_panel_total_count');

    //得到全选按钮
    var checkALl = document.getElementById('checkAll')
    //得到所有选中按钮
    var cart_checkBoxs = document.getElementsByClassName('cart_checkBox');

    //得到每个产品栏
    var cart_panel_product = document.getElementsByClassName('cart_panel_product');


    //切换tab栏的标签
    function navTab() {
        var navTags = document.querySelectorAll('.header_middle_nav>ul>li');
        //分别获得品牌 手机 笔记本的标签
        var brand_tag = navTags[0]
        var brand_tag_title = brand_tag.querySelector('a')
        var phone_tag = navTags[1]
        var phone_tag_title = phone_tag.querySelector('a')
        var laptop_tag = navTags[2]
        var laptop_tag_title = laptop_tag.querySelector('a')
        //分别获得对应的内容块
        var nav_brand = document.querySelector('.nav_brand');
        var nav_phone = document.querySelector('.nav_phone')
        var nav_laptop = document.querySelector('.nav_laptop')
        brand_tag.addEventListener('mouseover', function () {
            brand_tag_title.style.color = "black";
            nav_brand.style.display = 'block'
        })
        brand_tag.addEventListener('mouseout', function () {
            brand_tag_title.style.color = "#8f8f8f";
            nav_brand.style.display = 'none'
        })
        phone_tag.addEventListener('mouseover', function () {
            phone_tag_title.style.color = "black";
            nav_phone.style.display = 'block'
        })
        phone_tag.addEventListener('mouseout', function () {
            phone_tag_title.style.color = "#8f8f8f";
            nav_phone.style.display = 'none'
        })
        laptop_tag.addEventListener('mouseover', function () {
            laptop_tag_title.style.color = "black";
            nav_laptop.style.display = 'block'
        })
        laptop_tag.addEventListener('mouseout', function () {
            laptop_tag_title.style.color = "#8f8f8f";
            nav_laptop.style.display = 'none'
        })
    }

    //返回顶部函数
    function returnTopFn() {
        var returnTop = document.querySelector('.returnTop');

        var timer = null;
        window.addEventListener('scroll', function () {
            var scrollTop = document.documentElement.scrollTop;
            if (scrollTop >= 100) {
                returnTop.style.display = "block";
            } else {
                returnTop.style.display = "none";
            }
        })

        returnTop.addEventListener('click', function () {
            clearInterval(timer)
            var scrollTop = document.documentElement.scrollTop;
            var scrollValue = scrollTop;
            timer = setInterval(function () {
                scrollValue -= Math.ceil(scrollValue / 10);
                if (scrollValue <= 0) {
                    scrollValue = 0;
                    clearInterval(timer)
                }
                document.documentElement.scrollTop = scrollValue;
            }, 10)
        })
    }

    //全选函数
    function checkAllFn() {
        checkAll.addEventListener('click', function () {

            for (var i = 0; i < cart_checkBoxs.length; i++) {
                cart_checkBoxs[i].checked = this.checked;

            }
            //执行一次合计的函数
            totalCountFn();
        })

        for (var i = 0; i < cart_checkBoxs.length; i++) {

            cart_checkBoxs[i].addEventListener('click', function () {

                isCheckAll();
                //执行一次合计的函数
                totalCountFn();
            })
        }

        function isCheckAll() {
            var arr = []
            //把每一个选中按钮的状态追加进数组
            for (var k = 0; k < cart_checkBoxs.length; k++) {
                arr.push(cart_checkBoxs[k].checked)
            }

            //使用every方法判断是否全部都被选中
            if (arr.every(function (item) { return item === true })) {
                checkAll.checked = true;
            } else {
                checkAll.checked = false;
            }
        }

        //页面首次加载会先判断一下是否全选
        isCheckAll();
    }

    //点击加减改变数量和价格
    function numberFn() {
        for (var i = 0; i < cart_panel_product.length; i++) {
            (function (i) {
                var cart_add = cart_panel_product[i].querySelector('.cart_add');
                var cart_reduce = cart_panel_product[i].querySelector('.cart_reduce');
                var cart_number = cart_panel_product[i].querySelector('.cart_number');
                //当前商品一栏的加号一点击就让数量加1
                cart_add.addEventListener('click', function () {
                    cart_number.value = parseInt(cart_number.value) + 1;
                    countFn();
                })
                //当前商品一栏的减号一点击就让数量减1
                cart_reduce.addEventListener('click', function () {
                    if (parseInt(cart_number.value) > 1) {
                        cart_number.value = parseInt(cart_number.value) - 1;
                    } else {
                        cart_number.value = 1;
                    }

                    countFn();

                })
            })(i)

        }
    }

    //计算价格的函数
    function countFn() {
        for (var i = 0; i < cart_panel_product.length; i++) {
            var cart_number = cart_panel_product[i].querySelector('.cart_number');
            var cart_price = cart_panel_product[i].querySelector('.cart_price');
            var cart_count = cart_panel_product[i].querySelector('.cart_count');
            cart_count.innerText = parseInt(cart_price.innerText).toFixed(2) * cart_number.value + "元"
            //执行一次合计的函数
            totalCountFn();
        }
    }

    //点击删除的函数
    function deleteFn() {
        for (var i = 0; i < cart_panel_product.length; i++) {
            (function (i) {
                var cart_delete = cart_panel_product[i].getElementsByClassName('cart_delete')[0];
                cart_delete.addEventListener('click', function () {
                    var dialogue = confirm('你确定要移除该商品吗?')
                    if (dialogue) {
                        var checkBox = this.parentNode.querySelector(".cart_checkBox")
                        // console.log(checkBox.id)
                        var data = JSON.parse(localStorage.getItem('dataArr'));
                        //将数据中不等于当前id的数据过滤出来赋值给本地存储
                        var newData = data.filter(function (item, index) {
                            return item.id != checkBox.id
                        })
                        // console.log(newData)
                        localStorage.setItem('dataArr', JSON.stringify(newData))
                        this.parentNode.parentNode.removeChild(this.parentNode)
                    } else {
                        return;
                    }
                    //执行一次合计的函数
                    totalCountFn();
                })
            })(i)
        }

    }

    //合计的函数
    function totalCountFn() {
        var totalPrice = 0;
        for (var i = 0; i < cart_panel_product.length; i++) {
            if (cart_panel_product[i].querySelector('.cart_checkBox').checked) {
                totalPrice += parseInt(cart_panel_product[i].querySelector('.cart_count').innerText);
            }
        }

        cart_panel_total_count.innerHTML = totalPrice;

    }

    //输入数量改变合计价格
    function numberChangeFn() {
        for (var i = 0; i < cart_panel_product.length; i++) {
            console.log()
            cart_panel_product[i].querySelector('.cart_number').addEventListener('change', function () {
                console.log('hhh')
                countFn();
            })
        }
    }

    //面向对象生成商品
    function moreProductFn() {
        var data = [
            {
                name: "三星 Galaxy S9+",
                href: "javascript:;",
                src: require("../../img/09.jpg"),
                detail: "6GB+128GB 勃艮第红",
                price: 6999
            },
            {
                name: "小米 MIX2",
                href: "javascript:;",
                src: require("../../img/010.jpg"),
                detail: "8GB+128GB 全陶瓷版",
                price: 3499
            },

            {
                name: "华为 Mate RS",
                href: "javascript:;",
                src: require("../../img/011.jpg"),
                detail: "6G+256G 保时捷设计",
                price: 9999
            },
            {
                name: "索尼 XZ Premium",
                href: "javascript:;",
                src: require("../../img/012.jpg"),
                detail: "4G+64G 4k分辨率",
                price: 4999
            },
            {
                name: "惠普 Spectre 13",
                href: "javascript:;",
                src: require("../../img/013.jpg"),
                detail: "i5-8250U 8G 256G",
                price: 8988
            },
            {
                name: "雷蛇 Blade 2018",
                href: "javascript:;",
                src: require("../../img/014.jpg"),
                detail: "i7-8750H GTX 1060",
                price: 13999
            },
            {
                name: "华为 MateBook X Pro",
                href: "javascript:;",
                src: require("../../img/015.jpg"),
                detail: "i5-8250U 8G 256G 3K",
                price: 7988
            },
            {
                name: "微星 GS65",
                href: "javascript:;",
                src: require("../../img/016.jpg"),
                detail: "i7-8750H 144Hz",
                price: 14699
            },

        ]

        function Product(option) {
            this._init(option)

        }

        Product.prototype = {
            _init: function (option) {
                this.name = option.name;
                this.src = option.src;
                this.href = option.href;
                this.detail = option.detail;
                this.price = option.price;
            },
            bindDom: function () {
                var str = '';
                str = '<div class=cart_more_item><div class=cart_more_item_top><a href="' + this.href + '"><img src="' + this.src + '"></a><div class=cart_more_item_bottom><p>' + this.name + '</p><div class="cart_more_item_arguments clearfix"><div><span>' + this.detail + '</span></div><div><span>¥</span><span>' + this.price + '</span></div></div></div></div></div>'
                return str;
            }
        }

        var str = ''
        for (var i = 0; i < data.length; i++) {
            //根据data里的数据生成商品结构
            var product = new Product(data[i])
            str += product.bindDom()
        }

        var cart_more_content = document.querySelector(".cart_more_content")
        cart_more_content.innerHTML = str;
    }

    //通过读取内存的数据，向购物车中添加商品栏
    function setCartFn() {
        var data = JSON.parse(localStorage.getItem('dataArr'));
        //如果存在数据
        if (data) {
            for (var i = 0; i < data.length; i++) {
                var id = data[i].id;
                var src = data[i].src;
                var text = data[i].text;
                var price = data[i].price;
                var str = '<div class="cart_panel_product_cell"><input type="checkbox" id="' + id + '" class="cart_checkBox" checked><label for="' + id + '"><i class="iconfont icon-duoxuan-weixuan"></i><i class="iconfont icon-duoxuanyixuan"></i></label></div><div class="cart_panel_product_cell"><a href="./detail.html"><img src="' + src + '" alt=""><span>' + text + '</span></a></div><div  class="cart_panel_product_cell cart_price">' + price + '元</div><div  class="cart_panel_product_cell"><div class="cart_panel_count"><a href="javascript:;" class="cart_reduce"><i class="iconfont icon-jianhao"></i></a><input type="text" class="cart_number"  value="1"><a href="javascript:;" class="cart_add"><i class="iconfont icon-jiahao1"></i></a></div></div><div  class="cart_panel_product_cell cart_count">0元</div><div class="cart_panel_product_cell cart_delete"><i class="iconfont icon-cuo"></i></div>'
                var product_cell = document.createElement('div');
                product_cell.className = "cart_panel_product clearfix"
                product_cell.innerHTML = str;

                cart_content_panel.insertBefore(product_cell, cart_panel_total)
            }
        } else {

        }

    }

    setCartFn();
    checkAllFn();
    numberFn();
    numberChangeFn();
    countFn();
    deleteFn();
    totalCountFn();
    moreProductFn();
    navTab();
    returnTopFn();
}