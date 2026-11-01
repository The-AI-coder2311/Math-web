// remark-math treats a one-line $$...$$ as inline math, which draws fractions small.
// This makes a paragraph holding only $$...$$ a full-size equation on its own line.
export function remarkDisplayMath() {
  return (tree, file) => {
    const source = String(file);
    const walk = (node) => {
      (node.children || []).forEach((child, i) => {
        const math = child.type === 'paragraph' && child.children.length === 1 && child.children[0];
        const offset = math?.type === 'inlineMath' ? math.position?.start?.offset : undefined;
        if (offset !== undefined && source.startsWith('$$', offset)) {
          node.children[i] = {
            type: 'math',
            value: math.value,
            data: {
              hName: 'pre',
              hChildren: [
                {
                  type: 'element',
                  tagName: 'code',
                  properties: { className: ['language-math', 'math-display'] },
                  children: [{ type: 'text', value: math.value }],
                },
              ],
            },
          };
        } else {
          walk(child);
        }
      });
    };
    walk(tree);
  };
}
