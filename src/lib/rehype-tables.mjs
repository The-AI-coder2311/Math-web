// Makes Markdown tables work with screen readers and on small screens. A table
// needs a header row in Markdown, even when it's only a grid of numbers, so an empty
// header row is removed, and an empty corner cell stops being announced as a header.
// Each table also gets a wrapper that scrolls, so the table itself stays a real table.
const isEmpty = (cell) => (cell.children || []).every((child) => child.type === 'text' && !child.value.trim());
const elements = (node, tagName) => (node.children || []).filter((child) => child.type === 'element' && child.tagName === tagName);

/** The math in a header cell that holds only math, such as 3^2. KaTeX keeps its source in an annotation. */
function mathIn(node) {
  if (node.tagName === 'annotation') return node.children[0]?.value;
  for (const child of node.children || []) {
    const found = mathIn(child);
    if (found) return found;
  }
  return undefined;
}

function fixHeader(table) {
  const [head] = elements(table, 'thead');
  if (!head) return;
  const cells = elements(head, 'tr').flatMap((row) => elements(row, 'th'));
  if (cells.every(isEmpty)) {
    table.children = table.children.filter((child) => child !== head);
    return;
  }
  for (const cell of cells) {
    if (isEmpty(cell)) {
      cell.tagName = 'td';
      continue;
    }
    cell.properties.scope = 'col';
    // Header cells get read before every cell below them, so they need words that are always spoken.
    const hasWords = cell.children.some((child) => child.type === 'text' && child.value.trim());
    const math = hasWords ? undefined : mathIn(cell);
    if (math) {
      const spoken = math.replace(/\^\{?([^{}\s]+)\}?/g, ' to the power $1');
      cell.children = [
        { type: 'element', tagName: 'span', properties: { className: ['sr-only'] }, children: [{ type: 'text', value: spoken }] },
        { type: 'element', tagName: 'span', properties: { ariaHidden: 'true' }, children: cell.children },
      ];
    }
  }
}

export function rehypeTables() {
  const walk = (node) => {
    (node.children || []).forEach((child, i) => {
      if (child.type === 'element' && child.tagName === 'table') {
        fixHeader(child);
        node.children[i] = { type: 'element', tagName: 'div', properties: { className: ['table-scroll'] }, children: [child] };
      } else {
        walk(child);
      }
    });
  };
  return walk;
}
