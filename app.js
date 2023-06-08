import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import myModulo from './component/my-modulo.js';
import myModulo1 from './component/my-modulo1.js';
import main from './main.js';

let app = createApp(main);

app.component(myModulo.name, myModulo);
app.component(myModulo1.name, myModulo1);

app.mount('#app')