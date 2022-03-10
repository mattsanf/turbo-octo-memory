import { createComponent } from '../../vendor/vue/components/component';
import {useFramepay} from '../../vendor/framepay';

const template = `
<form class="rebilly-instruments-form" ref="googlePayForm">
  <div id="google-pay"></div>
</form>
`;

export default createComponent(({
  onMounted,
  ref,
}) => {
  return {
    template,
    setup() {
      const googlePayForm = ref();
      onMounted(async () => {
        const Rebilly = await useFramepay();
  
        Rebilly.on('ready', () => {
          var googlePay = Rebilly.googlePay.mount('#google-pay', {
            type: 'googlePay',
            form: googlePayForm.value,
          });
        });
      });  
      
      return {
        googlePayForm
      };
    }
  }
});