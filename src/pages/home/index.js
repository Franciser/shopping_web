/* eslint-disable */
import './index.less';





window.onload=function(){
    carouselFn();
    brandWallFn()
    moreProductFn()
    navTab()
    returnTopFn();
    statusBarFn()
    windowResize()
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

//轮播函数
function carouselFn() {
    var carousel = document.querySelector('.carousel')
    var carousel_control = carousel.querySelector('ul')
    //得到所有轮播图
    var imgs = carousel.querySelectorAll('a>img')

    var length = imgs.length;
    
    
        // //得到当前屏幕宽度
        var windowWidth = document.documentElement.clientWidth;
        //让所有轮播图的宽度等于屏幕宽度//并且设置最大最小宽度
        for (var i = 0; i < length; i++) {
            //设置最大宽度1920
            imgs[i].style.maxWidth = 1920 + 'px';
            //设置最小宽度1366
            imgs[i].style.minWidth = 1366 + 'px';
            //设置轮播图宽度为当前屏幕宽度
            imgs[i].style.width = windowWidth + 'px';
            
        }
        //调用gitImgSize函数，得到第一张轮播图的宽度高度，并赋值给轮播图容器
        getImgSize()

    //窗口改变大小时对应的函数
    function onResize() {
        window.addEventListener('resize', function () {
            //得到屏幕的宽度
            var windowWidth = document.documentElement.clientWidth;

            //随着窗口大小改变，动态的改变图片的宽高
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].style.width = windowWidth + 'px';
            }


            //调用gitImgSize函数，得到第一张轮播图的宽度高度，并赋值给轮播图容器
            getImgSize()

        })
    }


    //得到所有图片
    var imgBoxs = carousel.querySelectorAll('a')
    var length = imgBoxs.length
    //得到所有小圆点
    var points = carousel_control.querySelectorAll('li');
    var timer = null;
    var nowIndex = 0;
    var oldIndex = 0;
    //定义这个函数用于根据索引来调整图片和控制点状态;这是一个公共代码
    function setCarouselState() {
        //把所有图片的动画取消
        for (var i = 0; i < length; i++) {
            imgBoxs[i].style.transition = 'none'
        }

        imgBoxs[oldIndex].style.opacity = '0';
        imgBoxs[nowIndex].style.opacity = '1';
        points[oldIndex].classList.remove('controlAnimate')
        points[nowIndex].classList.add('controlAnimate')
    }

    //自动轮播
    function autoPlay() {
        oldIndex = nowIndex;
        nowIndex++;
        nowIndex %= length;
        setCarouselState();
        //给图片添加动画
        imgBoxs[oldIndex].style.transition = 'opacity 1s ease-in-out'
        imgBoxs[nowIndex].style.transition = 'opacity 1s ease-in-out'
    }

    for (var i = 0; i < points.length; i++) {
        points[i].index = i;
    }
    carousel_control.addEventListener('click', function (e) {
        //鼠标移入先清除定时器
        clearInterval(timer)
        //如果移入的对象是li，那么执行轮播
        if (e.target.nodeName === "LI") {

            //让OldIndex等于当前所在索引
            oldIndex = nowIndex
            nowIndex = e.target.index;
            nowIndex %= length;
            setCarouselState();
            imgBoxs[oldIndex].style.transition = 'opacity 1s ease-in-out'
            imgBoxs[nowIndex].style.transition = 'opacity 1s ease-in-out'
        }
    })
    //通过判断轮播图片的高度是否为0来确定是否加载定时器
    // var n = imgs.length;
    // for (var i = 0; i < imgs.length; i++) {
    //     imgs[i].addEventListener('load', function () {
    //         if (this.offsetHeight !== 0) {
    //             n--;
    //             if (n === 0) {
                    timer = setInterval(autoPlay, 3000)
    //             }
    //         }
    //     })
    // }



    function arrowFn() {
        //得到左右箭头
        var arrowLeft = carousel.querySelector('.arrowLeft');
        var arrowRight = carousel.querySelector('.arrowRight');
        //给轮播器添加鼠标移入移出的监听
        carousel.addEventListener('mouseenter', function () {
            clearInterval(timer)
            // arrowLeft.style.display = "block"
            // arrowRight.style.display = "block"
            arrowLeft.classList.add('arrow_active')
            arrowRight.classList.add('arrow_active')
        })
        carousel.addEventListener('mouseleave', function () {
            clearInterval(timer)
            timer = setInterval(autoPlay, 3000)
            // arrowLeft.style.display = "none"
            // arrowRight.style.display = "none"
            arrowLeft.classList.remove('arrow_active')
            arrowRight.classList.remove('arrow_active')
        })

        arrowRight.addEventListener('click', function () {

            clearInterval(timer)
            oldIndex = nowIndex
            nowIndex++;
            nowIndex %= length;
            setCarouselState();

        })
        arrowLeft.addEventListener('click', function () {
            clearInterval(timer)
            oldIndex = nowIndex
            //如果当前刚好处于第一个位置，那么将跳往最后一个位置
            if (nowIndex === 0) {
                nowIndex = length;
            }
            nowIndex--;
            nowIndex %= length;
            setCarouselState();

        })
    }

    function getImgSize() {
        var imgs = carousel.querySelectorAll('a>img')

        //得到第一张轮播图的宽度和高度
        var imgWidth = imgs[0].offsetWidth;
        var imgHeight = imgs[0].offsetHeight;
        //让轮播图容器的宽度等于图片的宽度
        carousel.style.width = imgWidth + 'px';
        carousel.style.height = imgHeight + 'px';
    }
    
    //执行箭头点击函数
    arrowFn();

    //执行缩放窗口大小时动态改变轮播图及容器宽高
    onResize()
}

//定义点击换一批品牌的函数
function brandWallFn() {
    var clickIndex = 1;
    //得到刷新按钮
    var refreshBtn = document.querySelector('.brand_wall_refresh')
    //得到刷新图标
    var refreshIcon = refreshBtn.querySelector('a>.img_refresh');
    //得到所有品牌容器
    var brandAll = document.querySelectorAll('.brand_wall_3d');
    var length = brandAll.length;
    var flag = true;
    var isEnd = true;
    refreshBtn.addEventListener('click', function () {

        if (isEnd) {
            //先让isEnd变为false；说明动画还没结束，不能开启下次翻转
            isEnd = false;
            //用来判读是从左转到右还是右到左
            if (flag) {
                //用来设置延迟时间
                var delayTime = 0;
                refreshIcon.style.transition = 'transform .5s ease-in-out background .3s ease-in-out'
                refreshIcon.style.transform = 'rotate(' + 360 * clickIndex + 'deg)'

                for (var i = 0; i < length; i++) {

                    brandAll[i].style.transition = '.5s ease-in-out ' + delayTime + 's'
                    brandAll[i].style.transform = 'rotateY(' + 180 + 'deg)'
                    delayTime += 0.2;
                }
                //等所有动画执行完后再让isEnd为true
                setTimeout(function () {
                    isEnd = true;
                }, delayTime * 1000)


            } else {
                //用来设置延迟时间
                var delayTime = 0;
                refreshIcon.style.transition = 'transform .5s ease-in-out background .3s ease-in-out'
                refreshIcon.style.transform = 'rotate(' + 360 * clickIndex + 'deg)'

                for (var i = length - 1; i >= 0; i--) {

                    brandAll[i].style.transition = '.5s ease-in-out ' + delayTime + 's'
                    brandAll[i].style.transform = 'rotateY(' + 0 + 'deg)'
                    delayTime += 0.2;
                }
                //等所有动画执行完后再让isEnd为true
                setTimeout(function () {
                    isEnd = true;
                }, delayTime * 1000)
            }

            flag = !flag;
            clickIndex++;

        } else {
            return
        }
    })


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
            str = '<div class=moreProduct_item><div class=moreProduct_item_top><a href="' + this.href + '"><img src="' + this.src + '"></a><div class=moreProduct_item_bottom><p>' + this.name + '</p><div class="moreProduct_item_arguments clearfix"><div><span>' + this.detail + '</span></div><div><span>¥</span><span>' + this.price + '</span></div></div></div></div></div>'
            return str;
        }
    }

    var str = ''
    for (var i = 0; i < data.length; i++) {
        //根据data里的数据生成商品结构
        var product = new Product(data[i])
        str += product.bindDom()
    }

    var moreProduct_wrap_content = document.querySelector(".moreProduct_wrap_content")
    moreProduct_wrap_content.innerHTML = str;
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

//窗口缩放函数
function windowResize() {
    var hot_kind_content = document.querySelectorAll('.hot_kind_content');
    var hot_kind_left = document.querySelectorAll('.hot_kind_left');
    var hot_kind_right = document.querySelectorAll('.hot_kind_right');
   

   
    var returnTop = document.querySelector('.returnTop');
    window.addEventListener('resize', function () {
        setElementSize();
    })

    //初始化时先判断屏幕宽度来决定显示大小
    // setElementSize();
    function setElementSize() {
        //得到屏幕的宽度
        var windowWidth = document.documentElement.clientWidth;
        if (windowWidth < 1500) {
            for (var i = 0; i < hot_kind_content.length; i++) {
                hot_kind_content[i].style.width = '1200px'
                hot_kind_left[i].querySelector('a').style.width = '550px';
                hot_kind_right[i].querySelector('a').style.width = '550px';
            }
           
            returnTop.style.marginLeft = '600px'
            
        } else {
            for (var i = 0; i < hot_kind_content.length; i++) {
                hot_kind_content[i].style.width = '1500px'
                hot_kind_left[i].querySelector('a').style.width = '700px';
                hot_kind_right[i].querySelector('a').style.width = '700px';
            }

            returnTop.style.marginLeft = '800px'

           
        }

    }


}

//弹出状态栏
function statusBarFn() {
    var hot_phone_wrap = document.querySelector('.hot_phone_wrap');
    var carousel = document.querySelector('.carousel_wrap>.carousel');
    var header_slide = document.querySelector('.header_slide');

    //当第一张图加载完的时候就有了高度
        var hot_phone_wrap_to_top = hot_phone_wrap.offsetTop;
        // console.log(hot_phone_wrap_to_top);

        window.addEventListener('scroll', function () {
            var scrollTop = document.documentElement.scrollTop;
            if (scrollTop >= hot_phone_wrap_to_top) {
                // header_slide.style.animation ="headerFromTop .5s linear forwards"
                header_slide.style.top = "0";

            } else {
                // header_slide.style.animation = "headerToTop .5s linear forwards"
                header_slide.style.top = '-200px';
            }
        })

}