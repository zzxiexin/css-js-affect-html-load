直接在目录下yarn && node server.js 访问http://localhost:9999 即可。
得到结论：异步css获取 =》 css会阻塞dom渲染，不会影响dom解析（后面的js在css没有get完成时候，也可以获取想要的dom元素），但是会阻塞js运行，js明显是在css获取完成以后，再开始执行js代码。

