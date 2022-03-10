import { useVue } from './vendor/vue';
import { useComponent } from './vendor/vue/components/component';
import { useFramepay } from './vendor/framepay';

class Instruments {
  constructor() {
    this.version = '0.0.1';
  }

  mount(options = {
    form: '#rebilly-instruments'
  }) {
    useVue({
      onload: async ({createApp}) => {
        await useFramepay();
        createApp({
          template: `<rebilly-instruments-form/>`,
          components: {
            RebillyInstrumentsForm: useComponent('form')
          }
        }).mount(options.form);
      }
    });
  }
}

const RebillyInstruments = new Instruments();
export default RebillyInstruments;