export const createComponent = (component = () => {}) => {
  if (window.Vue) {
    const {defineComponent} = window.Vue
    const componentResolved = component(window.Vue);   
    return defineComponent(componentResolved);
  }
  throw new Error('Vue.js not loaded');
}

export const useComponent = (name) => {
  const {
    defineAsyncComponent
  } = window.Vue;

  return defineAsyncComponent({
    loader: () => import(/* @vite-ignore */`../../../${name}`),
  });
}
