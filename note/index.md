### nodejs
	
	// csrutil enable
	
	sudo chown -R zero:admin /usr/local/*
	
	npm i -g typescript

### brew

	

### macDown

### sublime 

    Emmet,
    Ctags,
    Markdown Extended,Markdown Editing,Markdown Preview,
    HTML-CSS-JS Prettify,
    ConvertToUTF8,
    SublimeLinter,
    typescript,
    less,
    ColorPicker,
    FileDiffs,
    DocBlockr,

    vue高亮
    babel,Vue Syntax Highlight,Stylus,sass,postcss

    preference->setting user
    "font_size": 13,
    "tab_size": 2,
    "word_wrap":true,
    "open_files_in_new_window": false,


### vue

    vue-loader

    https://github.com/littlematch0123/blog-client.git

    https://blog.csdn.net/harsima/article/details/80819747

    https://www.cnblogs.com/xiangxinhouse/p/8447507.html

    vue ui
    https://www.iviewui.com/
    http://element-cn.eleme.io/#/zh-CN



    vue-style-loader


### 安装python2


### node-sass安装出错
    1.npm i -g node-sass
    手动下载win32-x64-64_binding.node并设置为全局环境变量

    2.cnpm i


    ### orientationChange事件

    移动端旋转设备触发

### webpack

    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': resolve('src'),
          'assets': resolve('src/assets')
        }
      },

### babel

    {
        "presets": [
            "env"
        ],
        "plugins": [
            "transform-vue-jsx"
        ]
    }

    {
      "presets": [["es2015", { "modules": false }]],
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    }

    { "presets": [
        ["env", {
         "modules": false,
         "targets": {"browsers": ["> 1%", "last 2 versions", "not ie <= 8"]}
        }],
        "stage-2"
      ],
      "plugins": [
         "transform-runtime",
         ["component",[{
            "libraryName":"element-ui",
            "styleLibraryName":"theme-chalk"
         }]
         ]
      ],
      "comments":false,   
      "env": {
          "test": {
            "presets": ["env", "stage-2"],
            "plugins": ["istanbul"]
          }
       }
    }



### gitbook

    npm i -g gitbook-cli


### git

    问题
    warning: CRLF will be replaced by LF.

    原因
    windows中的换行符为 CRLF，而在Linux下的换行符为LF，所以在执行add . 时出现提示

    解决
    git config --global core.autocrlf false //禁用自动转换 
   
   git config --global user.name "ahyiru"
   git config --global user.email "ah.yiru@gmail.com"

### scroll 优化思路

    overflow: scroll;
    margin-bottom: -17px;
    margin-right: -17px;


> return typeof data === 'function' ? data.call(this) : data


### memoization-computed-keepAlive-VNode-VirtualDom-diff算法（Patch）-ast抽象语法树-生命周期实现-事件系统-callback-setTimeout-this

我们可以通过javascript对象表示的树结构来构建一棵真正的dom树，当数据状态发生变化时，可以直接修改这个javascript对象，接着对比修改后的javascript对象，记录下需要对页面做的dom操作，然后将其应用到真正的dom树，实现视图的更新，这个过程就是Virtual DOM的核心思想。


ast语法优的过程，主要做了2件事：

- 会检测出静态的class名和attributes,这样它们在初始化渲染后就永远不会再被比对了。
- 会检测出最大的静态子树（不需要动态性的子树）并且从渲染函数中萃取出来。这样在每次重渲染时，它就会直接重用完全相同的vnode，同时跳过比对。

把Virtual DOM渲染成真正的DOM，是通过patch来实现的

patch函数的主要思想:

- 如果vnode不存在但oldVnode存在，则表示要移除旧的node,那么就调用invokeDestroyHook(oldVnode)来进行销毁
- 如果oldVnode不存在但是vnode存在，说明是要创建新节点，那么就调用createElm来创建新节点
- 当vnode和oldVnode都存在时:
	- 如果oldVnode与Vnode是同一节点是就调用patchVnode处理去比较两个节点的差异
	- 当vnode和oldVnode不是同一个节点时，如果oldVnode是真实DOM节点或hydrating设置为true，需要用hydrate函数将虚拟DOM和真实DOM进行映射，然后将oldVnode设置为对应的虚拟dom，找到oldVnode.elm的父节点，根据vnode创建一个真实dom节点并插入到该父节点中oldVnode.elm的位置


### 事件系统 promise await的实现原理


### 模版编译 虚拟DOM 数据绑定

### 事件队列机制

	function defer( fn ) {
	    return Promise.resolve().then( fn );
	}
	
	function defer( fn ) {
	    return requestAnimationFrame( fn );
	}

"任务队列"是一个先进先出的数据结构，排在前面的事件，优先被主线程读取。

主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）。


（1）V8引擎解析JavaScript脚本。

（2）解析后的代码，调用Node API。

（3）libuv库负责Node API的执行。它将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎。

（4）V8引擎再将结果返回给用户。

除了setTimeout和setInterval这两个方法，Node.js还提供了另外两个与"任务队列"有关的方法：process.nextTick和setImmediate。它们可以帮助我们加深对"任务队列"的理解。

> 工作线程将消息放到消息队列，主线程通过事件循环过程去取消息。


消息队列：消息队列是一个先进先出的队列，它里面存放着各种消息。

事件循环：事件循环是指主线程重复从消息队列中取消息、执行的过程。

实际上，主线程只会做一件事情，就是从消息队列里面取消息、执行消息，再取消息、再执行。当消息队列为空时，就会等待直到消息队列变成非空。而且主线程只有在将当前的消息执行完成后，才会去取下一个消息。这种机制就叫做事件循环机制，取一个消息并执行的过程叫做一次循环。

事件循环用代码表示大概是这样的：

	while(true) {
	    var message = queue.get();
	    execute(message);
	}
那么，消息队列中放的消息具体是什么东西？消息的具体结构当然跟具体的实现有关，但是为了简单起见，我们可以认为：

> 消息就是注册异步任务时添加的回调函数。

### macrotack与microtask

上面所说的task就是macrotask,而microtask在ES2015规范中称为Job。

macrotask

	script
	setTimeout
	setInterval
	setImmediate
	I/O
而microtask包括：

	process.nextTick
	promise
	Object.observe
其实microtask就相当于一种插队操作，不同于macrotask每次都会添加到任务队列的队尾，会在下一个tick才执行，microtask则会在下一个tick之前执行。

1.javascript和node.js都是单线程，但是node底层是多线程操作

2.Event Loop —— 任务队列

3.当同时设置nextTick, setImmediate, setTimeout时一定是nextTick先执行，nextTick不属于Event Loop，它属于v8的micro tasks，并且会阻塞Event Loop

4.setImmediate，setTimeout属于Event Loop但是，直接阶段不同



### 垃圾回收机制

### prototype上的属性会被构造函数实例继承

### CommonJs和ES6区别

（1） CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。

（2） CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

### 箭头函数和this

this 指向当前函数的运行作用域

	const a={
		b:()=>{
			console.log(this);//window
		},
		c:function(){
			console.log(this);//a
		}
	}
	const a=()=>{
		console.log(1,this);
		return{
			b:()=>{
				console.log(2,this);
			},
			c:function(){
				console.log(3,this);
			}
		}
	}
	const a=function(){
		console.log(1,this);
		return{
			b:()=>{
				console.log(2,this);
			},
			c:function(){
				console.log(3,this);
			}
		}
	}
	//推荐写法
	const a=()=>{
		return{
			c:function(){
				console.log(this);
			}
		}
	}
	

### angular

	npm install -g @angular/cli
	
	ng new my-app
	cd my-app
	ng serve --open

	npm install -g @angular-devkit/schematics-cli
	
	schematics blank --name=my-component
	
	git clone https://github.com/angular/quickstart ng4-quickstart
	
	git clone https://github.com/NG-ZORRO/ng-zorro-antd.git
	

[Angular 4.x 修仙之路](https://segmentfault.com/a/1190000008754631)


### 前端体系建设

[漫谈前端体系建设](https://zhuanlan.zhihu.com/p/28299873)

[如何评判一个前端框架的好坏？做取舍？](https://www.zhihu.com/question/286029255)

#### 组建的可控与不可控

#### 沉淀组件体系标准

#### 数据模型

#### 多端适配

#### 模版管理

#### 流程标准化

- 可扩展性
- 去中心化
- 数据监控










































