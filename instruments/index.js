import { useVue } from './vendor/vue';
import { useComponent } from './vendor/vue/components/component';
import { useFramepay } from './vendor/framepay';

class Instruments {
  constructor() {
    this.version = '0.0.1';
  }

  async mount(options = {
    form: '#rebilly-instruments'
  }) {
    return new Promise((resolve) => {
      document.addEventListener('touchstart', () => {}, {passive: true});
      const form = document.querySelector(options.form);
      form.innerHTML = `
        
      `

      useVue({
        onload: async ({createApp}) => {
          useFramepay();
          createApp({
            template: `<rebilly-instruments-form/>`,
            components: {
              RebillyInstrumentsForm: useComponent('form')
            }
          }).mount(options.form);
          resolve();
        }
      });
    })
  }
}

const RebillyInstruments = new Instruments();
export default RebillyInstruments;