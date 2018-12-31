const Node = require("./Node")
let nodeCount = 0
let leavesCount = []
let totalLeaves = 0
let totalNodes = 0
let totalRoots = 0


const constructTree = async (node, depth, nbChild) => {

    if(depth <= 0){
        return new Node(node, "finalNode")
    }
    //On itère selon le nombre d'enfant que l'on veut créer pour chaque noeud
    for(let i = 0; i < nbChild; i++) {
        let newNode = new Node(node, `Node-${i}`)
        let child = await constructTree(newNode, depth - 1, nbChild)
        if(child !== null){
            node.addChild(child)         
        }        
    }

    totalChildren += node.children.length

    const leafCount = node.children.map (nodeN => nodeN.isLeaf())

    const nodeCount = node.children.map (nodeN => nodeN.isNode())

    totalLeaves += leafCount.filter(Boolean).length
    totalNodes += nodeCount.filter(Boolean).length

    console.log("Feuilles:",totalLeaves)
    console.log("Noeuds:",totalNodes)
    console.log("total children :",totalChildren)


    return node
}

let masterNode
const depth = 3
const nbChilds = 3
let totalChildren = 0

const initTree = (depth, nbChilds) => {masterNode = new Node(null, "masterNode")}

initTree()

constructTree(masterNode, depth, nbChilds)



