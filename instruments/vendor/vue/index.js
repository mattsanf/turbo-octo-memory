export const useVue = ({
  onload = () => {}
} = {}) => {
  const script = document.createElement('script');
  script.async = true;
  script.onload = () => onload(window.Vue);
  script.src = 'https://unpkg.com/vue@3/dist/vue.global.prod.js';
  document.getElementsByTagName('head')[0].appendChild(script);
}