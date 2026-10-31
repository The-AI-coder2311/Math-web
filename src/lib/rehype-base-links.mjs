// Lets Markdown authors write links and images as /teachers/ or /images/x.svg.
// When the site is hosted under a sub-path (GitHub Pages), this adds that path.
export function rehypeBaseLinks({ base = '/' } = {}) {
  const prefix = base.replace(/\/$/, '');
  const fix = (value) =>
    typeof value === 'string' && value.startsWith('/') && !value.startsWith('//')
      ? prefix + value
      : value;

  const walk = (node) => {
    if (node.type === 'element') {
      if (node.tagName === 'a') node.properties.href = fix(node.properties.href);
      if (node.tagName === 'img') node.properties.src = fix(node.properties.src);
    }
    (node.children || []).forEach(walk);
  };

  return walk;
}
