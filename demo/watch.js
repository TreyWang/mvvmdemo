// 定义一个变化通知的回调
var callback = function(newVal, oldVal){
    alert(newVal + '----' + oldVal);
};

// 定义一个普通对象作为数据模型
var data = {
    a: 200,
    level1: {
        b: 'str',
        c: [1, 2, 3],
        level2: {
            d: 90
        }
    }
}

// 实例化一个监测对象，去监测数据，并在数据发生改变的时候作出反应
var j = new Jsonob(data, callback);
 