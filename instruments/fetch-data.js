export class Data {
  constructor(data = {}) {
    Object.entries({
      ...data
    }).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  get showPaypal() {
    return this.paypal;
  }
}

export function useData(Vue = window.Vue) {
  const {ref, onMounted} = Vue;

  const data = ref(null);

  onMounted(async () => {
    const fields = await new Promise((resolve) => {
      setTimeout(() => resolve({
        paypal: true,
      }), 1000);
    });
    data.value = new Data(fields);
  });

  return data;
}