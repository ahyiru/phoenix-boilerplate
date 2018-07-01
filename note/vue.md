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

> computed、watch

    created、mounted、updated、destroyed

### 模板

#### 指令

指令 (Directives) 是带有 v- 前缀的特殊特性。指令有修饰符、缩写属性。

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

如果 v-model 表达式的初始值未能匹配任何选项，<select> 元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。

#### 动态组件

在动态组件上使用 keep-alive

> 缓存动态切换组建的状态 keep-alive的实现

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














































