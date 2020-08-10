import { link } from "fs";

function getName(node) {
    return node.name;
}

function headNode(linkedList, collection) {
    return collection[linkedList];
}

function next(node, collection) {
    let nextAddress = node.next;
    return collection[nextAddress];
}

function nodeAt(index, linkedList, collection) {
    let node = headNode(linkedList, collection);
    for (let i = 0; i < index; i++) {
        node = next(node, collection);
    }
    return node;
}

function addressAt(node, linkedList, collection) {
    if (node === 0) {
        return linkedList;
    } else {
        let node = nodeAt(node - 1, linkedList, collection);
        return node.next;
    }
}

function indexAt(node, collection, linkedList) {
    let currNode = headNode(linkedList, collection);
    let currInd = 0;
    while (currNode !== node) {
        currInd++;
        currNode = next(currNode, collection);
    }
    return currInd;
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
    let prevNode = nodeAt(index - 1, linkedList, collection);
    let nextNode = nodeAt(index, linkedList, collection);
  
    let prevNodeInd = indexAt(prevNode, collection, linkedList);
    let nextNodeInd = indexAt(nextNode, collection, linkedList);
    let prevNodeAddress = addressAt(prevNode, linkedList, collection);
    let nextNodeAddress = addressAt(nextNode, linkedList, collection);
    prevNode.next = newNodeAddress;
    let newNode = collection[newNodeAddress];
    newNode.next = nextNodeAddress;
} 

function deleteNodeAt(index, linkedList, collection) {
    let prevNode;
    let currNode = headNode(linkedList, collection)
    for (let i = 0; i < index; i++) {
        prevNode = currNode;
        currNode = next(currNode, collection);
    }
    prevNode.next = currNode.next;
}
