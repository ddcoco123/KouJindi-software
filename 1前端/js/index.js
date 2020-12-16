$(document).ready(function() {
    appendHeader(true);
    appendFooter(true);
})


function isAndroid() {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("android") > -1; 
}
  
function isiOS() {
const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
return iOS
}

if (isAndroid()) {
    alert("本页面不支持在手机端访问\n请在电脑浏览器访问。");
} else if (isiOS()) {
    alert("本页面不支持在手机端访问\n请在电脑浏览器访问。");
}