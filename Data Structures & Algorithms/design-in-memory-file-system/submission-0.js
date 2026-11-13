class TrieNode {
    constructor() {
        this.children = {};
        this.name = "";
        this.content = "";
        this.isFile = false;
    }
}
class FileSystem {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} path
     * @return {string[]}
     */
    ls(path) {
        if (path === "/") {
            return Object.keys(this.root.children);
        }
        const splts = path.split("/");
        let curr = this.root;
        for (let i = 1; i < splts.length; i++) {
            const char = splts[i];
            if (!(char in curr.children)) {
                console.log("debug: not in tree", char, curr);
            }
            curr = curr.children.get(char);
        }
        if (curr.isFile) {
            return curr.name;
        }
        return Object.keys(curr.children);
    }

    /**
     * @param {string} path
     * @return {void}
     */
    mkdir(path) {
        const splits = path.split("/");
        let curr = this.root;
        for (let i = 1; i < splits.length; i++) {
            const char = splits[i];
            if (!(char in curr.children)) {
                curr.children[char] = new TrieNode();
            }
            curr = curr.children[char];
            curr.name = char;
        }
    }

    /**
     * @param {string} filePath
     * @param {string} content
     * @return {void}
     */
    addContentToFile(filePath, content) {
        const splits = filePath.split("/");
        let curr = this.root;
        for (let i = 1; i < splits.length; i++) {
            const char = splits[i];
            if (!(char in curr.children)) {
                curr.children[char] = new TrieNode();
            }
            curr = curr.children[char];
            curr.name = char;
        }
        if (!curr.isFile) {
            curr.isFile = true;
        }

        curr.content = curr.content.concat(content);
        return;
    }

    /**
     * @param {string} filePath
     * @return {string}
     */
    readContentFromFile(filePath) {
        const splits = filePath.split("/");
        let curr = this.root;
        for (let i = 1; i < splits.length; i++) {
            const char = splits[i];
            if (!(char in curr.children)) {
                curr.children[char] = new TrieNode();
            }
            curr = curr.children[char];
        }
        return curr.content;
    }
}

/**
 * Your FileSystem object will be instantiated and called as such:
 * let obj = new FileSystem();
 * let param_1 = obj.ls(path);
 * obj.mkdir(path);
 * obj.addContentToFile(filePath, content);
 * let param_4 = obj.readContentFromFile(filePath);
 */
