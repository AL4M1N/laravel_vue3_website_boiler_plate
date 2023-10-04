
import './../../bootstrap';
import './../../../sass/app.scss';

import { createApp } from 'vue';
// import App from './App.vue';

// Router
import Router from './routes';

// Vuex File
import Store from './store';

//vue-filter
// import { filter } from './common/filter'

// import { VueReCaptcha } from 'vue-recaptcha-v3'

//geolocation
// import VueGeolocation from 'vue-browser-geolocation';

//google map
// import * as VueGoogleMaps from 'vue2-google-maps'





// Vue.use(VueReCaptcha, {
//   siteKey: '6LdTC5wmAAAAAHjesWn5Icx0SquuY5CrryzVNmsF'
// })



// mixin global added
import common from './common/mixin';


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const Vuetify = createVuetify({
  components,
  directives,
})

// VueProgressBar
import VueProgressBar from "@aacassandra/vue3-progressbar";
const options = {
  color: '#66FE5E',
  failedColor: 'red',
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top", // left, right, top, bottom
  inverse: false,
};

// VueSweetalert2
// import VueSweetalert2 from 'vue-sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';
// import Swal from 'sweetalert2';
// const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: null,
//   timerProgressBar: true,
// })
// window.Swal = Swal;
// window.Toast = Toast;


// import Pagination from 'laravel-vue-pagination';
import DataNotAvailable from './../pages/common/tbl/data_not_available.vue';
import TblDataLoader from './../pages/common/tbl/tbl_loader.vue';
import IndexComponent from '../index.vue';



const app = createApp({
  data() {
    return {
      preloader: false,
    }
  }
});

app.config.isCustomElement = (tag) => tag.startsWith('v-');

// tbl data not available
app.component('data-not-available', DataNotAvailable);

// tbl data loader
app.component('tbl-data-loader', TblDataLoader);

// website index component
app.component('index-component', IndexComponent);


app.mixin(common);


app.use(Router)
  .use(Vuetify)
  .use(Store)
  .use(VueProgressBar, options)
  // .use(VueSweetalert2)
  .mount('#app');

