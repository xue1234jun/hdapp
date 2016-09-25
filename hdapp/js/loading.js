/**
 * Created by chouan on 16/8/4.
 */
// loading 页面
function addLoading(){
    var loadingWrapper = document.createElement('div');
    loadingWrapper.setAttribute('id','loadingWrapper');
    loadingWrapper.style.width=window.screen.width+'px';
    loadingWrapper.style.height=window.screen.height+'px';
    loadingWrapper.style.position='fixed';
    loadingWrapper.style.left= 0;
    loadingWrapper.style.top= 0;
    loadingWrapper.style.backgroundColor='rgba(0,0,0,0.4)';
    loadingWrapper.style.zIndex='1000';
    var loadingGIF = document.createElement('img');
    loadingGIF.src='../img/loading.gif';
    loadingGIF.style.position='fixed';
    loadingGIF.style.left=window.screen.width/7+'px';
    loadingGIF.style.top=window.screen.height/3+'px';
    loadingGIF.style.height = '37px';
    loadingGIF.style.width = '37px';
    loadingGIF.setAttribute('class','loadingGIF');
    loadingWrapper.appendChild(loadingGIF);
    document.body.appendChild(loadingWrapper);
    document.body.style.overflow='hidden';
}
function delLoading(){
    var loadingWrapper = document.getElementById('loadingWrapper');
    if(loadingWrapper){
        document.body.removeChild(loadingWrapper);
    }
}