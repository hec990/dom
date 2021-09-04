window.dom = {
    // 1. ======== create start =========
    // 创建节点 ==> div
    create(string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim(); // trim 去掉两边空格
        return container.content.firstChild;
    },
    // 新增弟弟
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling)
    },
    // 新增哥哥
    before(node, node2) {
        node.parentNode.insertBefore(node2, node)
    },
    // 新增儿子
    append(parent, node) { // 参数：爸爸是谁？，新儿子
        parent.appendChild(node)
    },
    // 新增爸爸
    wrap(node, parent) { // 参数：儿子是谁？，新增爸爸
        dom.before(node, parent)
        dom.append(parent, node)
    },
    // ======== create end =========


    // 2. ========= delete start =======
    // 删除节点
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    // 删除后代
    empty(node) {
        const array = []
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array
    },
    // ========= delete end =======

    // 3.========= change start =======
    // 用于读写属性
    attr(node, name, value) { // 重载
        if (arguments.length === 3) {
            node.setAttribute(name, value) // 设置
        } else if (arguments.length === 2) {
            return node.getAttribute(name) // 读取
        }
    },
    // 用于读写文本
    text(node, string) { // 适配
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string
            } else {
                node.textContent = string
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }
    },
    // 用于读写HTML内容
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    // 用于读写样式
    style(node, name, value) {
        if (arguments.length === 3) { // dom.style(div, 'color', 'red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') { // dom.style(div, 'color')
                return node.style[name]
            } else if (name instanceof Object) { // dom.style(div, {color: 'red'})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    // 用于增删改查 class
    class: {
        add(node, className) {
            node.classList.add(className);
        },
        remove(node, className) {
            node.classList.remove(className);
        },
        has(node, className) { // 如果属性存在返回 true，反则 false
            return node.classList.contains(className);
        }
    },
    // 用于添加事件监听
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn);
    },
    // 用于删除事件监听
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn);
    },
    //  ========== change end =========


    // 4. ====== check start =========

    // 用于获取标签和标签们
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    // 用于获取父元素
    parent(node) {
        return node.parentNode
    },
    // 用于获取子元素
    children(node) {
        return node.children
    },
    // 用于获取兄弟姐妹(除了自己)
    siblings(node) {
        return Array.from(node.parentNode.children)
            .filter(n => n !== node)
    },
    // 用于获取弟弟
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    // 用于获取哥哥
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    // 用于遍历所有节点
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    index(node) {
        const list = dom.children(node.parentNode)
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    }
    // ====== check end =========

}