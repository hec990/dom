window.dom = {
   // 创建节点
   create(string){
      const container = document.createElement("template");
      container.innerHTML = string.trim(); // trim 去掉两边空格
      return container.content.firstChild;
   }




   remove(node){
      node.remove
   }

}