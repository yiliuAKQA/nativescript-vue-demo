const Vue = require('nativescript-vue/dist/index')

Vue.component('image-viewer', {
    props: ['imgSrc'],

    data() {
        return {
            img: ''
        }
    },

    template: `
        <stack-layout>
            <image style="height: 150;" :src="img"></image>
            <scroll-view orientation="horizontal" style="height: 80; margin-top: 20">
                <stack-layout orientation="horizontal">
                    <image v-for="i in 10" key="i" 
                    :src="i%2 ? '~/images/akqa_logo.png' : '~/images/akqa_icon.png'" 
                    @tap="img = i%2 ? '~/images/akqa_logo.png' : '~/images/akqa_icon.png'" style="margin: 0 20px 0 20px"></image>
                </stack-layout>
            </scroll-view>
        </stack-layout>
    `,

    mounted() {
        this.img = this.imgSrc
    }
})

new Vue({
    template: `
        <page>
            <scroll-view>
                <stack-layout>
                    <button @tap="onTap" style="height: 60;">Launch Modal</button>
                    <button @tap="textRed = !textRed" style="color: white; background-color: #666666; width: 80%; height: 60; border-radius: 60;">Change Color</button>
                    <label :style="{color: textRed ? 'red' : 'green'}"
                            style="text-align: center; margin: 15 0; font-size: 40"
                            :text="showTrick ? 'Poof!' : 'Go!'"></label>
                    <button @tap="showTrick = !showTrick" style="height: 60">Tap to show scroll-view</button>
                    
                    <image-viewer v-if="showTrick" :imgSrc="imgSrc"></image-viewer>
                </stack-layout>
            </scroll-view>
        </page>
    `,

    data: {
        textRed: false,
        showTrick: false,
        imgSrc: '~/images/akqa_logo.png'
    },

    methods: {
        onTap() {
            alert('Nice Tap!')
        }
    }
}).$start()
