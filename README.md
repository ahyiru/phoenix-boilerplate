## Phoenix UI

#### Phoenix UI是一套用于快速开发web应用的UI框架。
#### Phoenix UI使用Typescript(ES6)编写，提供一些简单UI组件及函数库。拓展性强，可配合其它一些组件或插件进行开发，如ant design、jquery等。

## 代码书写规范

	1.引号使用:js代码使用单引号，html里使用双引号。
	
	2.使用严格相等号,即===或!==。
	
	3.所有语句使用一致的括号风格。
	
	4.使用一致的缩进，2个空格。
	
	5.变量先定义再使用，尽量避免使用全局变量。
	
	6.代码注释保持一致的风格。
	
	7.尽量使用const或let定义变量，避免使用var。
	
	8.每个语句结尾使用分号。
	
	9.条件判断语句必须放入{}中。
	
	10.jsx里没有子元素的标签使用反斜杠自闭合。
	
	11.对象元素单行时最后一个元素后面不要逗号，多行时最后元素后要加逗号。
	
	12.使用一致的命名风格,驼峰式(Camel-Case)。

### [前端知识点总结](https://github.com/ahyiru/react-ui-demo/blob/master/doc/%E5%89%8D%E7%AB%AF%E7%9F%A5%E8%AF%86%E7%82%B9.md)


#### 安装 `$ npm i -S yrui`.

## 运行实例

1. 创建项目:
`
$ git clone https://github.com/ahyiru/phoenix-boilerplate.git
`

2. 安装依赖:
`
$ yarn install 或 npm i 或 cnpm i
`

3. 运行项目:
`
$ npm(yarn) start 		//默认端口8080
`

4. 打开浏览器，访问: [http://localhost:8080/](http://localhost:8080/)

## 快速创建项目

1. 安装 `yrui-init` :

		$ npm install -g yrui-init

2. 创建项目:
`
$ yrui-init appName
`

3. 安装依赖:
`
$ cd appName && yarn install
`

4. 运行项目:
`
$ npm start
`



