import './style.css';
import Instruments from './instruments';

document.querySelector('#app').innerHTML = `
  <div id="rebilly-instruments"></div>
`

Instruments.mount({
  form: '#rebilly-instruments'
});