export default function ReactWrapper(loadComponent) {
  return {
    name: "ReactWrapper",
    async mounted(el) {
      const [{ createElement, default: React }, { createRoot }] =
        await Promise.all([import("react"), import("react-dom/client")]);

      const Component = await loadComponent();
      const root = createRoot(el);
      root.render(createElement(Component.default || Component));
      this._root = root;
    },
    unmounted() {
      if (this._root) this._root.unmount();
    },
    render() {
      return null;
    },
  };
}
