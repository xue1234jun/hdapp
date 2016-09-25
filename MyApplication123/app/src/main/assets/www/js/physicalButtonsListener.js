
function devicelistener()
{
    // 等待加载PhoneGap
    mui.toast('test事件加载');
    document.addEventListener("deviceready", onDeviceReady, false);
}


// PhoneGap加载完毕
function onDeviceReady() {
 mui.toast('test事件加载');
//按钮事件
document.addEventListener("backbutton", eventBackButton, false); //返回键
document.addEventListener("menubutton", eventMenuButton, false); //菜单键
}

//返回键
function eventBackButton(){
//confirm("再点击一次退出!");
mui.toast('再点击一次退出!');
document.removeEventListener("backbutton", eventBackButton, false); //注销返回键
document.addEventListener("backbutton", back2index, false);//绑定退出事件
    //3秒后重新注册
    var intervalID = window.setInterval(
        function() {
           window.clearInterval(intervalID);
           document.removeEventListener("backbutton", back2index, false); // 注销返回键
           document.addEventListener("backbutton", eventBackButton, false); //返回键
        },
        3000
   );
}
//菜单键
function eventMenuButton(){
    mui.toast('点击了 菜单 按钮!');
}

function exitApp(){
     navigator.app.exitApp();
}
//页面返回跳转
function back2login(){
    mui.openWindow({
        url:"login.html",
        id:"back2login",
        show:{
            autoShow: true,
            aniShow: "slide-in-right",
            duration: 200
        }
    });
}

function back2index(){
mui.toast('执行');
    mui.openWindow({
        url:"xzbcx.html",
        show:{
            autoShow: true,
            aniShow: "slide-in-right",
            duration: 200
        }
    });
}