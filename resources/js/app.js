require('./bootstrap');

// Import modules...
import { createApp, h, Vue } from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import VueSweetalert2 from 'vue-sweetalert2';
import moment from 'moment';
import CardModal from './Components/CardModal'
import Card from './Components/Card'
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Checkbox from 'primevue/checkbox';
import Column from 'primevue/column';
import Editor from 'primevue/editor';
import Panel from 'primevue/panel';
import PrimeVue from 'primevue/config';
import Calendar from 'primevue/calendar';
import Divider from 'primevue/divider';
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import Image from 'primevue/image';
import qs from 'qs';
import AudioVisual from 'vue-audio-visual'

import 'sweetalert2/dist/sweetalert2.min.css';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'                 
import 'primeicons/primeicons.css'    


const el = document.getElementById('app');

const app = createApp({
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => require(`./Pages/${name}`).default,
        }),
})
    .mixin({ methods: { route } })
    .use(InertiaPlugin)
    .use(VueSweetalert2)
    .use(moment)
    .use(PrimeVue)
    .use(AudioVisual)
    .component("card-modal",CardModal)
    .component('calendar', Calendar)
    .component('Checkbox',Checkbox)
    .component('Column',Column)
    .component('Accordion',Accordion)
    .component('AccordionTab',AccordionTab)
    .component('Editor',Editor)
    .component('Button', Button)
    .component('Divider', Divider)
    .component("card",Card)
    .component('RadioButton',RadioButton)
    .component('InputText',InputText)
    .component('Image',Image)
    .component('InputNumber',InputNumber)
    .component('Textarea',Textarea)
    .component('Dialog',Dialog)
    .component('Dropdown',Dropdown)
    .component('DataTable',DataTable)
    .component('Panel',Panel)

app.config.globalProperties.$qs = qs;
app.mount(el)


InertiaProgress.init({ color: '#4B5563' });
