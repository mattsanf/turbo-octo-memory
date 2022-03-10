import { createComponent } from '../../vendor/vue/components/component';
import {useFramepay} from '../../vendor/framepay';

const template = `
  <form class="rebilly-instruments-form">
    <div id="rebilly-instruments-account-type"></div>
    <div id="rebilly-instruments-account-number"></div>
    <div id="rebilly-instruments-routing-number"></div>
    <button>Submit</button>
  </form>
`;

export default createComponent(({onMounted}) => {
  return {
    template,
    setup() {
      onMounted(async () => {
        const {Rebilly} = await useFramepay();

        Rebilly.on('ready', () => {
          console.log('ready bank account');
          const accountType = Rebilly.bban.mount('#rebilly-instruments-account-type', 'accountType');
          const accountNumber = Rebilly.bban.mount('#rebilly-instruments-account-number', 'accountNumber');
          const routingNumber = Rebilly.bban.mount('#rebilly-instruments-routing-number', 'routingNumber');
        })

      })
    }
  }
});