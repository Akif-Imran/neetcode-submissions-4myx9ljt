class TrieNode {
  constructor() {
    this.children = new Map();
    this.top = []; // best ≤3 sentences that pass through this node
  }
}

class AutocompleteSystem {
  constructor(sentences, times) {
    this.root = new TrieNode();
    this.count = new Map(); // sentence -> total count (the one true count)
    for (let i = 0; i < sentences.length; i++) this.add(sentences[i], times[i]);
    this.node = this.root;   // null means "dead": the prefix doesn't exist
    this.buf = "";
  }

  cmp = (a, b) => {
    const d = this.count.get(b) - this.count.get(a);
    if (d !== 0) return d;
    return a < b ? -1 : a > b ? 1 : 0;
  };

  add(s, t) {
    this.count.set(s, (this.count.get(s) || 0) + t);
    let node = this.root;
    for (const ch of s) {
      if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
      node = node.children.get(ch);
      if (!node.top.includes(s)) node.top.push(s);
      node.top.sort(this.cmp);              // at most 4 items, so constant cost
      if (node.top.length > 3) node.top.pop();
    }
  }

  input(c) {
    if (c === "#") {
      this.add(this.buf, 1);
      this.buf = "";
      this.node = this.root;
      return [];
    }
    this.buf += c;
    if (this.node) this.node = this.node.children.get(c) ?? null; // once dead, stay dead
    return this.node ? [...this.node.top] : [];
  }
}