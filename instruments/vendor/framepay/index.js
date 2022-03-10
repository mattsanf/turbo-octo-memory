export const framepayConfiguration = {
  publishableKey: 'pk_sandbox_RtA7zbc0UMyUnYNJcBCeBoFOJJVOuA31NpykAB9',
  organizationId: '0a2540d2-2285-414d-a677-868bde7e442f',
  websiteId: 'pokemon.nintendo.com',
  transactionData: {
    currency: 'USD',
    amount: 10,
    label: 'Demo purchase label'
  },
};

export const useFramepay = async (
  options = framepayConfiguration
) => {
  let Rebilly = window.Rebilly;
  if (!Rebilly.initialized) {
    await Rebilly.initialize(options);
  }

  return Rebilly;
}
