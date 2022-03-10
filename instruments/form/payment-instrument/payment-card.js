import { createComponent } from '../../vendor/vue/components/component';
import {useFramepay} from '../../vendor/framepay';

const template = `
  <form class="rebilly-instruments-form">
    <input
      data-rebilly="fullName"
      placeholder="Cardholder Name"
    />
    <div id="payment-card"></div>
    <button>Submit</button>
  </form>
`;

export default createComponent(({onMounted}) => {
  return {
    template,
    setup() {
      onMounted(async () => {
        const Rebilly = await useFramepay();
  
        Rebilly.on('ready', () => {
          const card = Rebilly.card.mount('#payment-card');
        });
      });      
    }
  }
});