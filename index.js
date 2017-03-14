
window.onload = function(){
    // var divs = document.getElementsByClassName("col-list");

    var box = document.getElementById("box");
    var divs = getByClassName(box,"col-list");
    // console.log(box.clientWidth);
    //getElementsByClassName兼容处理
    function getByClassName(parentnode,classname){
        //先判断浏览器是否支持，如果支持则直接使用
        if(parentnode.getElementsByClassName){
            return parentnode.getElementsByClassName(classname);
        }else {
//如果不支持
            var results = new Array();
            var elems = node.getElementsByTagName("*");
            for(var i=0;i<elems.length;i++){
                if (elems[i].className.indexOf(classname) != -1){
                    // results[results.length] = elems[i];
                    results.push(elems[i]);
                }
            }
            return results;
        }
    }

    function event(){
        //获取单个盒子的宽度
        var divswidth = divs[0].offsetWidth;
        //获取父盒子的宽度
        var boxWidth = box.offsetWidth;
        //临界值
        var k = Math.floor(boxWidth/(divswidth+10));
        //定义一个空数组用来存放
        var hArr = [];
        for(var i=0;i<divs.length;i++){
            if(i<k){
                divs[i].style.left = (i+1)*10+i*divswidth +"px";
                divs[i].style.top = 10 +"px";
                //将每个
                hArr.push(divs[i].offsetHeight+10);
            }else{
                console.log(hArr);
                //获取数组中的最小值
                var minH = Math.min.apply(null,hArr);
                // var a=[1,2,3,5];
                // alert(Math.max.apply(null, a));//最大值
                // alert(Math.min.apply(null, a));//最小值
                //获取最小值在数组中的索引
                var index = hArr.indexOf(minH);
                // 设置绝对定位的top值和left值
                var top = minH+10;
                var left = (index+1)*10+index*divswidth;
                divs[i].style.left=left +"px";
                divs[i].style.top = top+"px";
                //更改数组中的最小值得到一个新的数组
                hArr[index] += divs[i].offsetHeight+10;
            }
        }
    }
    window.onresize= function(){
        event();
    }
    event();
}

