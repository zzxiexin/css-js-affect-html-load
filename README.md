直接在目录下yarn && node server.js 访问http://localhost:9999 即可。
得到结论：异步css获取 =》 css会阻塞dom渲染，不会影响dom解析（后面的js在css没有get完成时候，也可以获取想要的dom元素），但是会阻塞js运行，js明显是在css获取完成以后，再开始执行js代码。所以把css放在head部分希望可以早点加载完毕，完成渲染，展现给用户，且不耽误js执行，js放在底部也是希望css加载完毕后早点可以完成dom的渲染，如果js依赖于某些dom的样式，在css渲染完dom才是准确的，且js放在前面，js会阻碍dom的解析和渲染，对用户体验非常不好。

