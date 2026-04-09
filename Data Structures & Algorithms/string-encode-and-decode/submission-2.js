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
            splitPattern += str[i];
            console.log('start: ', splitPattern, '->', i);
            if (splitPattern.match(delimiter)) {
                i += 1;
                const characters = parseInt(splitPattern.replaceAll('#', ''));
                console.log(characters)
                const sliced = str.slice(i, i + characters);
                console.log(sliced);
                decoded.push(sliced);
                i = i + characters - 1;
                splitPattern = '';
                console.log(decoded);
            }
        }
        return decoded;
    }
}
