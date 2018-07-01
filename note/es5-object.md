## object

### 阻止修改对象

函数|对象已设置为不可扩展的|为每个属性将configurable设置为false|为每个属性将writable设置为false
:-:|:-:|:-:
Object.preventExtensions|是|否|否
Object.seal|是|是|否
Object.freeze|是|是|是

### 满足下表中标记的所有条件，则以下函数返回true

函数|对象是否可扩展|为所有属性将configurable设置为false|为所有数据属性将writable设置为false
:-:|:-:|:-:
Object.isExtensible|是|否|否
Object.isSealed|否|是|是
Object.isFrozen|否|是|是

## demo

### Object.preventExtensions、Object.isExtensible

    // Create an object that has two properties.
    var obj = { pasta: "spaghetti", length: 10 };
    // Make the object non-extensible.
    Object.preventExtensions(obj);
    document.write(Object.isExtensible(obj));
    document.write("<br/>");
    // Try to add a new property, and then verify that it is not added.
    obj.newProp = 50;
    document.write(obj.newProp);
    // Output:
    // false
    // undefined

### Object.seal、Object.isSealed

    // Create an object that has two properties.
    var obj = { pasta: "spaghetti", length: 10 };
    // Seal the object, and verify that it is sealed.
    Object.seal(obj);
    document.write(Object.isSealed(obj));
    document.write("<br/>");
    // Try to add a new property, and then verify that it is not added. 
    obj.newProp = 50;
    document.write(obj.newProp);
    document.write("<br/>");
    // Try to delete a property, and then verify that it is still present. 
    delete obj.length;
    document.write(obj.length);
    // Output:
    // true
    // undefined
    // 10

### Object.freeze、Object.isFrozen

    // Create an object that has two properties.
    var obj = { pasta: "spaghetti", length: 10 };
    // Freeze the object, and verify that it is frozen.
    Object.freeze(obj);
    document.write(obj.isFrozen());
    // Try to add a new property, and then verify that it is not added. 
    obj.newProp = 50;
    document.write (obj.newProp);
    document.write ("<br/>");
    // Try to delete a property, and then verify that it is still present.
    delete obj.length;
    document.write (obj.length);
    document.write ("<br/> ");
    // Try to change a property value, and then verify that it is not changed.
    obj.pasta = "linguini";
    document.write (obj.pasta);
    // Output:
    // true
    // undefined
    // 10
    // spaghetti


### Object.defineProperty

    Object.defineProperty(object, propertyname, descriptor)

    // 使用 __proto__
    var obj = {};
    var descriptor = Object.create(null); // 没有继承的属性
    // 默认没有 enumerable，没有 configurable，没有 writable
    descriptor.value = 'static';
    Object.defineProperty(obj, 'key', descriptor);
    // 显式
    Object.defineProperty(obj, "key", {
      enumerable: false,
      configurable: false,
      writable: false,
      value: "static"
    });
    // 循环使用同一对象
    function withValue(value) {
      var d = withValue.d || (
        withValue.d = {
          enumerable: false,
          writable: false,
          configurable: false,
          value: null
        }
      );
      d.value = value;
      return d;
    }
    // ... 并且 ...
    Object.defineProperty(obj, "key", withValue("static"));
    // 如果 freeze 可用, 防止代码添加或删除对象原型的属性
    // （value, get, set, enumerable, writable, configurable）
    (Object.freeze||Object)(Object.prototype);


### Object.getOwnPropertyDescriptor

    Object.getOwnPropertyDescriptor(object, propertyname)

    var o, d;
    o = { get foo() { return 17; } };
    d = Object.getOwnPropertyDescriptor(o, "foo");
    // d {
    //   configurable: true,
    //   enumerable: true,
    //   get: /*the getter function*/,
    //   set: undefined
    // }
    o = { bar: 42 };
    d = Object.getOwnPropertyDescriptor(o, "bar");
    // d {
    //   configurable: true,
    //   enumerable: true,
    //   value: 42,
    //   writable: true
    // }
    o = {};
    Object.defineProperty(o, "baz", {
      value: 8675309,
      writable: false,
      enumerable: false
    });
    d = Object.getOwnPropertyDescriptor(o, "baz");
    // d {
    //   value: 8675309,
    //   writable: false,
    //   enumerable: false,
    //   configurable: false
    // }

### Object.getOwnPropertyNames

    Object.getOwnPropertyNames(object)

    var arr = ["a", "b", "c"];
    console.log(Object.getOwnPropertyNames(arr).sort()); // ["0", "1", "2", "length"]
    // 类数组对象
    var obj = { 0: "a", 1: "b", 2: "c"};
    console.log(Object.getOwnPropertyNames(obj).sort()); // ["0", "1", "2"]
    // 使用Array.forEach输出属性名和属性值
    Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
      console.log(val + " -> " + obj[val]);
    });
    // 输出
    // 0 -> a
    // 1 -> b
    // 2 -> c
    //不可枚举属性
    var my_obj = Object.create({}, {
      getFoo: {
        value: function() { return this.foo; },
        enumerable: false
      }
    });
    my_obj.foo = 1;
    console.log(Object.getOwnPropertyNames(my_obj).sort()); // ["foo", "getFoo"]
