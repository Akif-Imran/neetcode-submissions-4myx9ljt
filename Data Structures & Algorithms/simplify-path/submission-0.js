class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const stack = [];
        const tokens = path.split("/");

        for (const token of tokens) {
            if (token == "..") {
                stack.pop();
            } else if (token && token != ".") {
                stack.push(token);
            }
        }
        return "/".concat(stack.join("/"));
    }
}
