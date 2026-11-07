class TrieNode {
    constructor(value = 0) {
        this.children = new Map();
        this.value = value;
    }
}
class FileSystem {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} path
     * @param {number} value
     * @return {boolean}
     */
    createPath(path, value) {
        const splits = path.split("/");
        console.log(splits);
        let curr = this.root;
        let i = 1;
        while (i < splits.length - 1) {
            if (!curr.children.has(splits[i])) {
                return false;
            }
            curr = curr.children.get(splits[i]);
            i += 1;
        }
        curr.children.set(splits[i], new TrieNode(value));
        return true;
    }

    /**
     * @param {string} path
     * @return {number}
     */
    get(path) {
        const splits = path.split("/");
        let curr = this.root;
        for (let i = 1; i < splits.length; i++) {
            if (!curr.children.has(splits[i])) {
                return -1;
            }
            curr = curr.children.get(splits[i]);
        }
        return curr.value;
    }
}

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */
