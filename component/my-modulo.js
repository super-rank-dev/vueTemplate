export default{
    name:"my-nav",
    template: /*html*/`
    <div class="navbar">
            <img :src="config.imagenlogo">
            <ul>
                <li><a href="#" v-text="config.enlace1"></a></li>
                <li><a href="#" v-text="config.enlace2"></a></li>
                <li><a href="#" v-text="config.enlace3"></a></li>
            </ul>
            <div class="navbar-icons">
                <img :src="config.imagen1">
                <img :src="config.imagen2">
                <img :src="config.imagen3">
            </div>
        </div>
    `,
    props:{
        config : Object
    }
}