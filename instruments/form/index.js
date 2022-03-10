import { useComponent, createComponent } from '../vendor/vue/components/component';
import { useData } from '../fetch-data';

const template = `
<div>
  <div style="display: flex; flex-direction: column; align-items: center">
    <paypal />
    <google-pay />
  </div>
  <hr/>
  <details class="rebilly-instruments-accordion" :open="selectedMethod === 'payment-card'"> 
    <summary @click.prevent="selectedMethod = 'payment-card'">Payment Card</summary>
    <payment-card v-show="selectedMethod === 'payment-card'"/>
  </details>
  <details class="rebilly-instruments-accordion" :open="selectedMethod === 'bank-account'">
    <summary @click.prevent="selectedMethod = 'bank-account'">Bank Account</summary>
    <bank-account v-show="selectedMethod === 'bank-account'"/>
  </details>
</div>
`;

export default createComponent(({
  ref
}) => {
  return {
    components: {
      paymentCard: useComponent('form/payment-instrument/payment-card'),
      bankAccount: useComponent('form/payment-instrument/bank-account'),
      googlePay: useComponent('form/payment-instrument/google-pay'),
      paypal: useComponent('form/payment-instrument/pay-pal'),
    },
    template,
    setup() {
      const data = useData();
      return {
        data,
        selectedMethod: ref('payment-card')
      }
    },
  }
});