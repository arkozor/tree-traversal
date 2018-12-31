
class Node {
    
    constructor(parent, name) {
        this.parent = parent
        this.children = []
        this.name = name
    }
    
    addChild(child) {
        this.children.push(child)
    }

    isRoot() {
        return this.parent === null
    }

    isLeaf() {
        return this.children.length === 0
    }

    isNode() {
        return (this.isRoot() == false) && (this.isLeaf() == false)
    }

    getRoot(node = this) {
        return node.parent.parent === null? node.parent : node.getRoot(node.parent)
    }
}
 

module.exports = Node

