const after = dom.create("<div>我是弟弟==>after</div>")
const before = dom.create("<div>我是哥哥==>before</div>")
const append = dom.create("<div>我是test的儿子==>append</div>")
const wrap = dom.create("<div>我是test的爸爸==>wrap</div>")

dom.after(test, after)
dom.before(test, before)
dom.append(test, append)
dom.wrap(test, wrap)


dom.remove(two)
dom.empty(two2)

// 设置属性
dom.attr(there, 'color', 'red')

// 读属性
const title = dom.attr(there, 'color')
console.log(`title: ${title}`)

// 读写文本
let thereText = dom.text(there);
console.log(thereText) // 111

dom.text(there, "我是新来的")

// 读写HTML内容
let htmlText = dom.html(there)
console.log(htmlText) // 我是新来的

dom.html(there, `<div><span>6666</span></div>`)

// 读写样式
// 3个参数是设置样式
// 2个参数是读取属性
dom.style(there, "color", "red")

let style = dom.style(there, "color")
console.log(style) // red

dom.style(there, { color: "red", fontSize: "40px", border: "5px solid red", background: "skyblue" })


// class
dom.class.add(cs, "cs2") // 添加类名 cs2
dom.class.remove(cs, "cs2") // 删除类名 cs2
dom.class.add(cs, "red") // 添加类名 red
console.log(dom.class.has(cs, "red")) // true
console.log(dom.class.has(cs, "blue")) //false

// 事件监听
// click 是一个字符串形式的
const fn = () => {
    console.log('点击了')
}
dom.on(jiantin, 'click', fn) // 添加监听
dom.off(jiantin, 'click', fn) // 删除监听


// 获取标签
const a1 = dom.find('#elements')[0]
console.log(a1)

// 获取父元素
let father = dom.parent(test)
console.log(father)

// 获取子元素
let c = dom.children(elements)
console.log(c)

// 获取兄弟姐妹
let j = dom.siblings(t)
console.log(j) // 排除了自己

// 获取弟弟
let k = dom.next(t)
console.log(k) // <div>4</div>

// 获取哥哥
let l = dom.previous(t)
console.log(l) // <div>3</div>

// 遍历所有节点
const divList = dom.find('#e') // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素

// 用于获取排行老几
let age = dom.index(elements)
console.log(age)