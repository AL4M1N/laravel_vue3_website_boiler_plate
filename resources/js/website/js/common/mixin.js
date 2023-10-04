import axios from "axios";
import { mapGetters } from 'vuex'

// import globalRolePermissions from './../../../role_permissions'
// import { forEach, isEmpty } from "lodash";

// import { Loader } from "google-maps";

// const loader = new Loader("AIzaSyB6puUIWCOF03RCx02QIWcKH0WDpvXtLbc");
// const google = await loader.load();

export default {
    data() {
        return {
            // Our data object that holds the Laravel paginator data
            allData: {},
            website_content: [],

            // Loading Animation
            dataLoading: false,
            dataLodaing: false,

        }
    },

    methods: {

    },

    watch: {


    },

    created() {


    },

    mounted() {

    },

    destroyed() {

    },

    computed: {

        ...mapGetters({
            'lang': 'getLanguages',
            'crntlang': 'getCrntLanguages',
            'websiteinfo': 'getWebsiteInfo',
        }),

    },


}

