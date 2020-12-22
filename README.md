# KouJindi-software
 2020秋软件工程第6组口罩佩戴识别检测项目
 [参考开源项目](https://github.com/AIZOOTech/FaceMaskDetection)（非常感谢此开源项目的开发者--大佬！！！）

发布形式：网址http://120.27.62.208/webMask/

已部署到阿里云服务器（预计2020年1月5号之后就过期）

由于期末要复习，小姐姐们就精力有限，界面摄像头功能不可用（原因是调用本地摄像头需要使用https协议，但是我们发布版是http协议）但是保留了这个按钮，如果要释放按钮，在index.html文件中将disabled：true改为false，将http协议改为http协议解决方法可参考博客：[原因](https://blog.csdn.net/yihanzhi/article/details/106051843)+[解决方法](https://www.cnblogs.com/Renyi-Fan/p/9641942.html)

主功能点：图片上传检测是否佩戴口罩，支持本地获取图片和从网络获取图片（通过URL上传）
附加功能：疫情数据，口罩佩戴的正确方法

技术点：

前端：JavaScript，js,CSS,HTML

后端：SSD算法目标检测，TensorFlow模型训练,模型转换工具MMdnn

连接：TensorFlow.js使项目可以在本地浏览器运行

部署：pycharm专业版+阿里云服务器+httpd
