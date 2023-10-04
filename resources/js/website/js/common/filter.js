import { createApp } from 'vue';

const app = createApp(/* your Vue app instance */);

app.config.globalProperties.$filters = {
  subString(content, length) {
    return content.substring(0, length);
  },

  currencyConverter(amount, currency = '৳ ') {
    if (!amount) return '';
    const value = amount.toLocaleString(undefined, { minimumFractionDigits: 2 });
    return currency + value;
  },
};

// ... Mount the app to your DOM or perform other actions ...