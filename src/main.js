let content = document.querySelector(".content");
let style = document.querySelector("#style");
let str=`
/* 你好我是一名前端新人
* 接下来我要炫技了 */
/*先准备背景颜色*/
.body{
    background-color: lightslategray;
}
/*准备一个div */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
    content: '';
    display: block;
    width: 50%;
    height: 50%;
    top: 0;
    left: 50%;
    transform: translateX(50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

#div1::after{
    content: '';
    display: block;
    width: 50%;
    height: 50%;
    bottom: 0;
    left: 50%;
    transform: translateX(50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/* 完成~*/ 
`;
let str2='';
let n=0;
let step = () =>{
    setTimeout(() => {

        if(n<str.length)
        {
            if(str[n] === '\n')
            str2 += '<br>';
            else if(str[n] === ' ')
            str2 += '&nbsp';
            else str2 += str[n];

            content.innerHTML = str2;
            style.innerHTML = str.substring(0, n);
            window.scrollTo(0, 99999);
            content.scrollTo(0, 99999);

            if (n < str.length - 1) {
              n += 1;
              step();
             }
        }
    }, 10);
}

step();