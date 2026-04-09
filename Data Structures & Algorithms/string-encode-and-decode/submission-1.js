class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';
        for (const str of strs) {
            encoded = encoded + `#${str.length}#${str}`;
        }
        console.log(encoded);
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const delimiter = /#[0-9]+#/;
        const decoded = [];
        let splitPattern = '';
        for (let i = 0; i < str.length; i++) {
            if (splitPattern.match(delimiter)) {
                const characters = parseInt(splitPattern.replaceAll('#', ''));
                const sliced = str.slice(i, i + characters);
                decoded.push(sliced);
                i = i + characters - 1;
                splitPattern = '';
            } else {
                splitPattern += str[i];
            }
        }
        return decoded;
    }
}
