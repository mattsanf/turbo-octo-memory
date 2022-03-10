import { createComponent } from '../../vendor/vue/components/component';
import {useFramepay} from '../../vendor/framepay';

const template = `
<form class="rebilly-instruments-form">
  <div id="pay-pal"></div>
</form>
`;

export default createComponent(({
  onMounted,
}) => {
  return {
    template,
    setup() {
      onMounted(async () => {
        const {Rebilly} = await useFramepay();
  
        Rebilly.on('ready', () => {
          console.log('ready paypal');
          var paypal = Rebilly.paypal.mount('#pay-pal');
        });
      });
    }
  }
});