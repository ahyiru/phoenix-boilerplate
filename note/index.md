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

### scroll 优化思路

    overflow: scroll;
    margin-bottom: -17px;
    margin-right: -17px;


> return typeof data === 'function' ? data.call(this) : data


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








































