## vue

### 创建实例

#### Vue创建实例：

    var vm = new Vue({
      // 选项
    })

#### data对象:

    var data = { a: 1 }
    var vm = new Vue({
      el: '#example',
      data: data
    })
    vm.$data === data // => true
    vm.$el === document.getElementById('example') // => true
    // $watch 是一个实例方法
    vm.$watch('a', function (newValue, oldValue) {
      // 这个回调将在 `vm.a` 改变后调用
    })

> Object.freeze()

#### 实例属性

    vm.$data
    vm.$props
    vm.$el
    vm.$options
    vm.$parent
    vm.$root
    vm.$children
    vm.$slots
    vm.$scopedSlots
    vm.$refs
    vm.$isServer
    vm.$attrs
    vm.$listeners

实例数据

    vm.$watch
    vm.$set
    vm.$delete

实例方法

    vm.$on
    vm.$once
    vm.$off
    vm.$emit

#### 数据

    data
    props
    propsData
    computed
    methods
    watch

#### DOM

    el
    template
    render
    renderError

#### 生命周期

    new Vue({
      data: {
        a: 1
      },
      created: function () {
        // `this` 指向 vm 实例
        console.log('a is: ' + this.a)
      }
    })
    // => "a is: 1"

    el、components、template、data、methods、

    computed、watch

> computed、watch、methods

    created、mounted、updated、destroyed

    beforeCreate created
    beforeMount mounted
    beforeUpdate updated
    beforeDestroy destroyed
    activated deactivated
    errorCaptured

computed

> computed是一个计算属性，返回处理后的数据。实现了数据监听和数据缓存。

data 属性初始化 getter setter：

    // src/observer/index.js
    // 这里开始转换 data 的 getter setter，原始值已存入到 __ob__ 属性中
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        const value = getter ? getter.call(obj) : val
        // 判断是否处于依赖收集状态
        if (Dep.target) {
          // 建立依赖关系
          dep.depend()
          ...
        }
        return value
      },
      set: function reactiveSetter (newVal) {
        ...
        // 依赖发生变化，通知到计算属性重新计算
        dep.notify()
      }
    })

computed 计算属性初始化

    // src/core/instance/state.js
    // 初始化计算属性
    function initComputed (vm: Component, computed: Object) {
      ...
      // 遍历 computed 计算属性
      for (const key in computed) {
        ...
        // 创建 Watcher 实例
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions)
        // 创建属性 vm.reversedMessage，并将提供的函数将用作属性 vm.reversedMessage 的 getter，
        // 最终 computed 与 data 会一起混合到 vm 下，所以当 computed 与 data 存在重名属性时会抛出警告
        defineComputed(vm, key, userDef)
        ...
      }
    }
    export function defineComputed (target: any, key: string, userDef: Object | Function) {
      ...
      // 创建 get set 方法
      sharedPropertyDefinition.get = createComputedGetter(key)
      sharedPropertyDefinition.set = noop
      ...
      // 创建属性 vm.reversedMessage，并初始化 getter setter
      Object.defineProperty(target, key, sharedPropertyDefinition)
    }
    function createComputedGetter (key) {
      return function computedGetter () {
        const watcher = this._computedWatchers && this._computedWatchers[key]
        if (watcher) {
          if (watcher.dirty) {
            // watcher 暴露 evaluate 方法用于取值操作
            watcher.evaluate()
          }
          // 同第1步，判断是否处于依赖收集状态
          if (Dep.target) {
            watcher.depend()
          }
          return watcher.value
        }
      }
    }

无论是属性还是计算属性，都会生成一个对应的 watcher 实例。

    // src/core/observer/watcher.js
    // 当通过 vm.reversedMessage 获取计算属性时，就会进到这个 getter 方法
    get () {
      // this 指的是 watcher 实例
      // 将当前 watcher 实例暂存到 Dep.target，这就表示开启了依赖收集任务
      pushTarget(this)
      let value
      const vm = this.vm
      try {
        // 在执行 vm.reversedMessage 的函调函数时，会触发属性（步骤1）和计算属性（步骤2）的 getter
        // 在这个执行过程中，就可以收集到 vm.reversedMessage 的依赖了
        value = this.getter.call(vm, vm)
      } catch (e) {
        if (this.user) {
          handleError(e, vm, `getter for watcher "${this.expression}"`)
        } else {
          throw e
        }
      } finally {
        if (this.deep) {
          traverse(value)
        }
        // 结束依赖收集任务
        popTarget()
        this.cleanupDeps()
      }
      return value
    }

Dep

    // src/core/observer/dep.js
    export default class Dep {
      static target: ?Watcher;
      id: number;
      subs: Array<Watcher>;
      constructor () {
        this.id = uid++
        this.subs = []
      }
      addSub (sub: Watcher) {
        this.subs.push(sub)
      }
      removeSub (sub: Watcher) {
        remove(this.subs, sub)
      }
      depend () {
        if (Dep.target) {
          Dep.target.addDep(this)
        }
      }
      notify () {
        const subs = this.subs.slice()
        for (let i = 0, l = subs.length; i < l; i++) {
          // 更新 watcher 的值，与 watcher.evaluate() 类似，
          // 但 update 是给依赖变化时使用的，包含对 watch 的处理
          subs[i].update()
        }
      }
    }
    // 当首次计算 computed 属性的值时，Dep 将会在计算期间对依赖进行收集
    Dep.target = null
    const targetStack = []
    export function pushTarget (_target: Watcher) {
      // 在一次依赖收集期间，如果有其他依赖收集任务开始（比如：当前 computed 计算属性嵌套其他 computed 计算属性），
      // 那么将会把当前 target 暂存到 targetStack，先进行其他 target 的依赖收集，
      if (Dep.target) targetStack.push(Dep.target)
      Dep.target = _target
    }
    export function popTarget () {
      // 当嵌套的依赖收集任务完成后，将 target 恢复为上一层的 Watcher，并继续做依赖收集
      Dep.target = targetStack.pop()
    }

1. data 属性初始化 getter setter
2. computed 计算属性初始化，提供的函数将用作属性 vm.reversedMessage 的 getter
3. 当首次获取 reversedMessage 计算属性的值时，Dep 开始依赖收集
4. 在执行 message getter 方法时，如果 Dep 处于依赖收集状态，则判定 message 为 reversedMessage 的依赖，并建立依赖关系
5. 当 message 发生变化时，根据依赖关系，触发 reverseMessage 的重新计算


dep1

    function createComputedGetter (key) {
      return function computedGetter () {
        const watcher = this._computedWatchers && this._computedWatchers[key]
        if (watcher) {
          // 是否需要重新计算
          if (watcher.dirty) {
            watcher.evaluate()
          }
          // 管理依赖
          if (Dep.target) {
            watcher.depend()
          }
          return watcher.value
        }
      }
    }


    function defineComputed (obj, key, computeFunc, updateCallback) {
     var onDependencyUpdated = function () {
      // TODO
     }
     Object.defineProperty (obj, key, {
      get: function () {
       // 将onDependencyUpdated 这个函数传给Dep.target
       Dep.target = onDependencyUpdated;
       var value = computeFunc ();
       Dep.target = null;
      },
      set: function () {
       // 什么也不做，不需要设定计算属性的值
      }
     })
    }

### 模板

Vue.js 使用了基于 HTML 的模板语法。

在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。

如果你熟悉虚拟 DOM 并且偏爱 JavaScript 的原始力量，你也可以不用模板，直接写渲染 (render) 函数，使用可选的 JSX 语法。

vue template:

    <template>
      <div class="demo">
        <h1>{{name}}</h1>
      </div>
    </template>
    <script>
      import {tools} from 'yrui';
      export default {
        data(){
          return{
            name:'Hello World',
          };
        }
      }
    </script>
    <style lang="less" scoped>
      .demo{
        h1{
          font-size:22px;
          color:#444;
        }
      }
    </style>

js render:

    import {tools} from 'yrui';
    import './app.less';
    export default{
      data(){
        return{
          name:'Hello World',
        };
      },
      render(){
        return <div class="demo">
          <h1>{{nmae}}</h1>
        </div>
      }
    }

#### 语法

表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。有个限制就是，每个绑定都只能包含单个表达式。

    <!-- 这是语句，不是表达式 -->
    {{ var a = 1 }}
    <!-- 流控制也不会生效，请使用三元表达式 -->
    {{ if (ok) { return message } }}

#### 指令

指令 (Directives) 是带有 v- 前缀的特殊特性。指令有修饰符、缩写属性。

    v-text
    v-html
    v-show
    v-if
    v-else
    v-else-if
    v-for
    v-on
    v-bind 缩写:
    v-model
    v-pre
    v-clock 缩写@
    v-once

#### class与style绑定

    <div :class="{ active: isActive }"></div>
    <div class="static" :class="{ active: isActive, 'text-danger': hasError }"></div>
    <div :class="classObject"></div>
    <div :class="[activeClass, errorClass]"></div>
    <div :class="[isActive ? activeClass : '', errorClass]"></div>
    <div :class="[{ active: isActive }, errorClass]"></div>

### 数据监听

> Object.defineProperty()
 
### 事件监听

> 订阅发布 emit、on、off

默认事件、鼠标、键盘 修饰符

可以通过全局 config.keyCodes 对象自定义按键修饰符别名：

    // 可以使用 `v-on:keyup.f1`
    Vue.config.keyCodes.f1 = 112

> 全局config. 自定义别名

### 基础组件

> v-model input向父组件传值可传2个，一个是e,一个是e.target.value;

如果 v-model 表达式的初始值未能匹配任何选项，`<select>` 元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。

#### 动态组件

    // 缓存
    if(cache){
        getCache()
    }else if(isMatch){
        setCache()
    }else{
        return false
    }

在动态组件上使用 keep-alive

> 缓存动态切换组建的状态 keep-alive的实现
> 
> VNode节点。Virtual Dom。
> 
> 从Virtual Dom 到 Real Dom

	function render( vnode ){
	//如果是字符，直接创建文本返回
	if(vnode.split){
	return document.createTextNode( vnode )
	}
	//node是一个真实DOM
	let node = document.createElement( vnode.nodeName );
	//获取属性
	let attrs = vnode.attrbutes || {} ;
	//给这个node节点遍历加上属性
	Object.keys( attrs ).forEach( item => node.setAttribute( item , attrs[item] ) );
	//如果有子元素，递归处理子元素并且给属性赋值，没有就结束
	( vnode.children || [] ).forEach( item => node.appendChild( render(item) ) );
	//返回node 
	return node;
	}

	created () {
	    /* 缓存对象 */
	    this.cache = Object.create(null)
	},
	/* destroyed钩子中销毁所有cache中的组件实例 */
	destroyed () {
	    for (const key in this.cache) {
	        pruneCacheEntry(this.cache[key])
	    }
	},

### 组件注册

#### 全局注册

    Vue.component('my-component-name', {
      // ... 选项 ...
    })

#### 局部注册

    import ComponentA from './ComponentA.vue'
    export default {
      components: {
        ComponentA
      },
      // ...
    }

> Prop 验证

    可借鉴到form验证
    Vue.component('my-component', {
      props: {
        // 基础的类型检查 (`null` 匹配任何类型)
        propA: Number,
        // 多个可能的类型
        propB: [String, Number],
        // 必填的字符串
        propC: {
          type: String,
          required: true
        },
        // 带有默认值的数字
        propD: {
          type: Number,
          default: 100
        },
        // 带有默认值的对象
        propE: {
          type: Object,
          // 对象或数组且一定会从一个工厂函数返回默认值
          default: function () {
            return { message: 'hello' }
          }
        },
        // 自定义验证函数
        propF: {
          validator: function (value) {
            // 这个值必须匹配下列字符串中的一个
            return ['success', 'warning', 'danger'].indexOf(value) !== -1
          }
        }
      }
    })

> 替换/合并已有的特性(class)。可借鉴至组件自定义样式，合并样式class

### 动态组件 & 异步组件

> keep-alive

    const AsyncComponent = () => ({
      // 需要加载的组件 (应该是一个 `Promise` 对象)
      component: import('./MyComponent.vue'),
      // 异步组件加载时使用的组件
      loading: LoadingComponent,
      // 加载失败时使用的组件
      error: ErrorComponent,
      // 展示加载时组件的延时时间。默认值是 200 (毫秒)
      delay: 200,
      // 如果提供了超时时间且组件加载也超时了，
      // 则使用加载失败时使用的组件。默认值是：`Infinity`
      timeout: 3000
    })

### 边界

> 数据的父级、子级、最上级、最下级
> 不确定层级。依赖注入 provide / inject


### 兼容性、适配性、通用性、拓展性、高效性

流程图实现

    export const sessionStorageSet = (name, obj) => {
      if (typeof obj === 'undefined') {
        return false
      }
      if (typeof name !== 'string') {
        return false
      }
      let saveStr = ''
      if (typeof obj === 'object') {
        saveStr = JSON.stringify(obj)
      } else {
        saveStr = obj
      }
      sessionStorage.setItem(name, saveStr)
      return true
    }

    export const sessionStorageGet = (name) => {
      if (typeof name !== 'string') {
        return
      }
      var savedStr = sessionStorage.getItem(name)
      if (!savedStr) {
        return
      }
      var result
      if ((savedStr.indexOf('"') < 0 && savedStr.indexOf('\'') < 0) || savedStr.indexOf(':') < 0) {
        return savedStr
      }
      try {
        result = JSON.parse(savedStr)
        return result
      } catch (e) {
        return savedStr
      }
    }


    let docEl = doc.documentElement
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    let recalc = function() {
      let clientWidth = docEl.clientWidth
      if (!clientWidth) return
      docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px'
    }
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
    doc.addEventListener('pageshow', recalc, false) // 后退重新计算
    var isIE = function() {
      return (window.navigator.userAgent.indexOf('MSIE') >= 1)
    }

### ui组件

    https://github.com/iview/iview.git
    https://github.com/ElemeFE/element.git
    https://github.com/suweiteng/vue2-management-platform.git
    https://github.com/iview/iview-admin.git
    https://github.com/ElementUI/theme-chalk.git
    https://github.com/ElementUI/element-starter.git

### jsx

    https://juejin.im/post/5a001f886fb9a0450908e508

    https://github.com/cristovao-trevisan/vue-with-jsx.git
    https://github.com/foolishchow/vue-typescript.git
    https://github.com/JaxBBLL/vue-jsx.git
    https://github.com/rolldone/vue_jsx_boilerplate.git
    https://github.com/darwinsalinas/jsx-in-vue.git

    // vue demo
    https://github.com/qingely/vue-webpack.git
    https://github.com/littlematch0123/blog-client.git
    https://github.com/cherie-xf/vue-ui-demo.git
    https://github.com/Twitchboy/Vue-SSR-Demo.git
    https://github.com/gaollard/vue-mall.git


https://juejin.im/post/5b41bdef6fb9a04fe63765f1?utm_source=gold_browser_extension






































