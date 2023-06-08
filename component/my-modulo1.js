export default {
    name: "my-banner",
    template:/*html*/`
    <div class="banner">
                <div class="left-column">
                    <div class="search-box">
                        <img :src="config.imglupita">
                        <input type="text">
                    </div>
                    <h1 v-html="config.titulo"></h1>
                    <h3 v-html="config.otrotitulo"></h3>
                    <p v-html="config.otrowe"></p>
                    <div class="btn">
                        <button type="button" class="primary-btn" v-text="config.boton"></button>
                        <button type="button" v-text="config.otroboton"></button>
                    </div>
                    <div class="social-icons">
                        <img :src="config.imagen4">
                        <img :src="config.imagen5">
                        <img :src="config.imagen6">
                        <img :src="config.imagen7">
                    </div>
                </div>
    
                <div class="right-column"></div>
                <img :src="config.imagen8">
            </div>
            `,
    props: {
        config: Object
    }
}