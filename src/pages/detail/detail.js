/* eslint-disable */
import './detail.less';

window.onload = function () {

    //定义数据 每个颜色对应的图片
    // var data = [
    //     { color: "勃艮第红", src: [require('../../img/detail_01.jpg'), require('../../img/detail_02.jpg')] },
    //     { color: "谜夜黑", src: [require('../../img/detail_03.jpg'), require('../../img/detail_04.jpg')] }
    // ]

    var data = [
        { id: 1, version: "4G+64G", price: 3299, color: "勃艮第红", src: [require('../../img/detail_01.jpg'), require('../../img/detail_02.jpg')] },
        { id: 2, version: "4G+64G", price: 3299, color: "谜夜黑", src: [require('../../img/detail_03.jpg'), require('../../img/detail_04.jpg')] },
        { id: 3, version: "6G+128G", price: 3899, color: "勃艮第红", src: [require('../../img/detail_01.jpg'), require('../../img/detail_02.jpg')] },
        { id: 4, version: "6G+128G", price: 3899, color: "谜夜黑", src: [require('../../img/detail_03.jpg'), require('../../img/detail_04.jpg')] },
    ]

    // var priceData = {
    //     "4G+64G": 3299,
    //     "6G+128G": 3899
    // }

    var detail_option_right_color = document.querySelectorAll('.detail_option_right_colorBox>button');
    var detail_option_right_version = document.querySelectorAll('.detail_option_right_versionBox>button');
    var detail_option_right_count_cart = document.querySelector('.detail_option_right_count_cart')
    var imgs = document.querySelector('.detail_option_left_imgBox').children;
    var total_text = document.querySelector('.detail_option_right_version');
    var total_price = document.querySelector('.detail_option_right_price').children[1];
    var imgBox = document.querySelector('.detail_option_left_imgBox');
    var controlPoints = document.querySelector('.detail_option_left_controlPoints').children;
    var detail_option_right_count_shop = document.querySelector('.detail_option_right_count_shop');
   

    

    function detailIntroduceFn() {
        var windowHeight = document.documentElement.clientHeight;
        // var detail_introduce_children = document.querySelector('.detail_introduce').children;
        var detail_introduce_text_animate = document.querySelectorAll('.detail_introduce_text_animate');

        window.addEventListener('scroll', function () {
            var scrollTop = document.documentElement.scrollTop;

            for (var i = 0; i < detail_introduce_text_animate.length; i++) {
                if (scrollTop >= detail_introduce_text_animate[i].offsetTop - windowHeight + 200) {
                    var delayTime = 0;
                    for (var j = 0; j < detail_introduce_text_animate[i].children.length; j++) {
                        delayTime = j * 0.5;
                        detail_introduce_text_animate[i].children[j].style.animation = "detail_introduce_text .5s linear forwards " + delayTime + "s"
                    }
                }
            }

        })
    }

    

    function imgViewFn() {

        for (var i = 0; i < controlPoints.length; i++) {
            (function (i) {
                controlPoints[i].addEventListener('click', function () {
                    for (var k = 0; k < controlPoints.length; k++) {
                        controlPoints[k].style.backgroundColor = '#cdcdcd'
                    }
                    this.style.backgroundColor = "#03b2ef";
                    imgBox.style.transform = 'translateX(' + (-i * 450) + 'px)'
                })
            })(i)

        }
    }

    function countFn() {

        for (var i = 0; i < detail_option_right_color.length; i++) {
            (function (i) {

                detail_option_right_color[i].addEventListener('click', function () {
                    for (var k = 0; k < detail_option_right_color.length; k++) {
                        detail_option_right_color[k].classList.remove('detail_option_active')
                    }
                    //改变左侧图片
                    for (var j = 0; j < imgs.length; j++) {
                        imgs[j].src = data[i].src[j];
                    }

                    //给当前按钮添加为活动状态
                    this.classList.add('detail_option_active')

                    //汇总信息到合计
                    totalPriceFn();
                })
            })(i)
        }

        for (var j = 0; j < detail_option_right_version.length; j++) {
            (function (j) {
                detail_option_right_version[j].addEventListener('click', function () {
                    for (var k = 0; k < detail_option_right_version.length; k++) {
                        detail_option_right_version[k].classList.remove('detail_option_active')
                    }
                    this.classList.add('detail_option_active')

                    totalPriceFn();
                })
            })(j)
        }

        totalPriceFn();


    }

    //定义计算价格和型号版本的函数
    function totalPriceFn() {
        var activeColor = '';
        var activeVersion = '';
        var activePrice = '';
        for (var i = 0; i < detail_option_right_color.length; i++) {
            if (detail_option_right_color[i].className.indexOf('detail_option_active') >= 0) {
                activeColor = detail_option_right_color[i].innerText
            }
        }
        for (var i = 0; i < detail_option_right_version.length; i++) {
            if (detail_option_right_version[i].className.indexOf('detail_option_active') >= 0) {
                activeVersion = detail_option_right_version[i].innerText
            }
        }

        for(var i=0;i<data.length;i++){
            if(data[i].version===activeVersion&&data[i].color===activeColor){
                activePrice=data[i].price;
            }
        }

        total_text.innerText = activeColor + " " + activeVersion;
        total_price.innerText = activePrice;

    }

    //加入购物车的函数
    function addToCart() {
        var arr = [];

        var index = '';
        var dataArr = JSON.parse(localStorage.getItem('dataArr'));
        if (dataArr) {
            arr = dataArr;

        } else {

        }

        //点击添加购物车
        detail_option_right_count_cart.addEventListener('click', function (e) {
            isSame();
        })

        //点击立即购买
        detail_option_right_count_shop.addEventListener('click', function (e) {
            isSame();
        })

        function isSame() {
            var textArr = []
            for (var i = 0; i < arr.length; i++) {
                textArr.push(arr[i].text);
            }
            //判断有没已经加入购物车的，有的话不追加
            if (textArr.every(function (item) { return item !== total_text.innerText })) {
                //拆分合计里面的颜色和版本同数据匹配，找到对应的id
                var splitArr = total_text.innerText.split(" ");
                for(var i=0;i<data.length;i++){
                    if(data[i].color==splitArr[0]&&data[i].version==splitArr[1]){
                        index=data[i].id
                    }
                }
                arr.push(
                    {
                        id: index,
                        src: imgBox.children[0].src,
                        text: total_text.innerText,
                        price: total_price.innerText
                    }
                )
                textArr.push(total_text.innerText)
                localStorage.setItem('dataArr', JSON.stringify(arr))
            } else {
                return
            }
        }

    }

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
    
    countFn();
    detailIntroduceFn();
    imgViewFn();
    totalPriceFn();
    addToCart();
    navTab();
    returnTopFn();
}