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
    defineComponent,
    defineAsyncComponent
  } = window.Vue;

  return defineAsyncComponent({
    loader: () => import(/* @vite-ignore */`../../../${name}`),
    loadingComponent: defineComponent({
      template: `<p>LOADING...</p>`,
      setup() {
        console.log('loading...');
      }
    }),
  });
}
