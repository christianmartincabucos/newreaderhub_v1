<template>
    <div class="lb" v-if="items.length>0">
        <div class="lb-grid" :class="[css,items.length>cells?'lb-grid-' + cells: 'lb-grid-' + items.length]">
            <div class="lb-item" v-for="(src, i) in items" @click="show(i)" :key="i" :style="bg(src)">
                <span class="lb-more" v-if="i==cells-1 && items.length - cells>0">{{ items.length - cells}}+</span>
            </div>
        </div>

        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <div class="lb-modal" v-if="index>=0">
                <button class="btn btn-outline-danger btn-sm lb-modal-close" @click="close">
                    <i class="fas far fa-times"></i>
                </button>
                <button class="btn btn-outline-primary lb-modal-prev" @click="prev">
                    <i class="fas far fa-angle-left fa-2x"></i>

                </button>
                <button class="btn btn-outline-primary lb-modal-next" @click="next">
                    <i class="fas far fa-angle-right fa-2x"></i>
                </button>

                <div class="lb-modal-img" @click="close">
                    <img :src="src">
                    <div class="spinner spinner-dots-wave" v-if="loading">
                        <span class="badge badge-primary rounded-circle w-10 h-10">
                            <i class="sr-only">&nbsp;</i>
                        </span>
                        <span class="badge badge-primary rounded-circle w-10 h-10">
                            <i class="sr-only">&nbsp;</i>
                        </span>
                        <span class="badge badge-primary rounded-circle w-10 h-10">
                            <i class="sr-only">&nbsp;</i>
                        </span>
                        <span class="badge badge-primary rounded-circle w-10 h-10">
                            <i class="sr-only">&nbsp;</i>
                        </span>
                        <span class="badge badge-primary rounded-circle w-10 h-10">
                            <i class="sr-only">&nbsp;</i>
                        </span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<style scoped>
.lb-grid {
    position: relative;
    display: block;
}

.lb-item {
    position: absolute;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top: solid 2px #fff;
    border-right: solid 2px #fff;
    cursor: pointer;
}


.lb-grid-1 .lb-item {
    width: 100%;
    height: 100%;
}

.lb-grid-2 .lb-item, .lb-grid-3 .lb-item, .lb-grid-4 .lb-item, .lb-grid-5 .lb-item {
    width: 50%;
}

.lb-grid-2 .lb-item, .lb-grid-3 .lb-item:nth-child(1), .lb-grid-4 .lb-item:nth-child(1) {
    height: 100%;
}

.lb-grid-3 .lb-item:nth-child(2), .lb-grid-3 .lb-item:nth-child(3), .lb-grid-5 .lb-item:nth-child(1), .lb-grid-5 .lb-item:nth-child(2) {
    height: 50%;
}

.lb-item:last-child, .lb-grid-2 .lb-item:nth-child(2), .lb-grid-3 .lb-item:nth-child(2), .lb-grid-3 .lb-item:nth-child(3), .lb-grid-4 .lb-item:nth-child(2), .lb-grid-4 .lb-item:nth-child(3), .lb-grid-4 .lb-item:nth-child(4), .lb-grid-5 .lb-item:nth-child(3), .lb-grid-5 .lb-item:nth-child(4), .lb-grid-5 .lb-item:nth-child(5) {
    left: auto;
    right: 0;
    border-right: 0;
}

.lb-grid-3 .lb-item:nth-child(3), .lb-grid-4 .lb-item:nth-child(4), .lb-grid-5 .lb-item:nth-child(2), .lb-grid-5 .lb-item:nth-child(5) {
    bottom: 0;
    top: auto;
}

.lb-grid-4 .lb-item:nth-child(3), .lb-grid-5 .lb-item:nth-child(4) {
    top: 33.333333333333336%;
}

.lb-grid-4 .lb-item:nth-child(2), .lb-grid-4 .lb-item:nth-child(3), .lb-grid-4 .lb-item:nth-child(4), .lb-grid-5 .lb-item:nth-child(3), .lb-grid-5 .lb-item:nth-child(4), .lb-grid-5 .lb-item:nth-child(5) {
    height: 33.333333333333336%;
}

.lb-more {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    color: #fff;
    font-size: 3rem;
    background-color: rgba(0, 0, 0, .4);
}

.lb-more:before {
    display: inline-block;
    content: "";
    vertical-align: middle;
    height: 100%;
}

/* 
.lb-more:after{
    position: absolute;
    top: 0;
    left: 0;
    left: 0;
    right: 0;
    z-index: -1;   
    content: "";
    background: #222;
    opacity: 0.9;
} */

.lb-modal {
    transition: opacity .2s ease;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    min-height: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .8);
    display: block;
    -webkit-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -o-user-select: none;
    user-select: none;
}

.lb-modal-close {
    position: absolute;
    right: 20px;
    top: 20px;
    color: #fff;
}

.lb-modal-next, .lb-modal-prev {
    position: absolute;
    top: 50%;
    left: 20px;
    margin-top: -25px;
    /* width: 50px;
    height: 50px; */
    z-index: 999;
    cursor: pointer;
    color: #fff;
    background-color: transparent;
    border: none;
}

.lb-modal-next {
    left: auto;
    right: 20px;
}

.lb-modal-img {
    position: absolute;
    top: 10px;
    left: 70px;
    right: 70px;
    bottom: 10px;
    text-align: center;
}

.lb-modal-img:before {
    display: inline-block;
    content: "";
    vertical-align: middle;
    height: 100%;
}

.lb-modal-img img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
    object-fit: contain;
}

.lb-modal-img .spinner {
    width: 150px;
    position: absolute;
    margin-left: -75px;
    top: 50%;
    left: 50%;
    z-index: 1;
}
.h-250{
    height: 20rem!important;
}

.lightbox {
	display: block;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, .5);
	visibility: hidden;
	opacity: 0;
}

.lightboxClose {
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
}

.lightboxPrev {
	display: block;
	position: absolute;
	left: 0px;
	top: 30%;
	width: 10%;
	height: 40%;
	background-color: rgba(255, 255, 255, 0.1);
}

.lightboxNext {
	display: block;
	position: absolute;
	right: 0px;
	top: 30%;
	width: 10%;
	height: 40%;
	background-color: rgba(255, 255, 255, 0.1);
}

.animate {
	-webkit-transition: .25s ease-in-out;
	-moz-transition: .25s ease-in-out;
	-ms-transition: .25s ease-in-out;
	-o-transition: .25s ease-in-out;
	transition: .25s ease-in-out;
}

/* Styles the lightbox content, centering it vertically and horizontally, adds the zoom-in transition and makes it responsive using a combination of margin and absolute positioning */

.lightbox img, .lightbox iframe {
	margin: auto;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	max-width: 40%;
	max-height: 40%;
	border: 2px solid white;
	box-sizing: border-box;
}

/* Uses the :target pseudo-class to perform the animations upon clicking the .lightbox anchor */

.lightbox:target {
	visibility: visible;
	opacity: 1;
}

.lightbox:target img, .lightbox:target iframe {
	max-width: 95%;
	max-height: 95%;
}

</style>
<script>

    export default {

        props: {
            items: {
                type: Array,
                default: () => { return [] }
            },

            css: {
                type: String,
                default: () => 'h-250 h-md-400 h-lg-600'
            },

            cells: {
                type: Number,
                default: () => 5
            }
        },

        data() {
            return {
                src: '',
                index: -1,
                loading: false,
                events: []
            }
        },

        methods: {


            bind() {

                if (this.events.length > 0) return;

                this.events.push(['keydown', e => {
                    if (this.index < 0) return;
                    if (e.keyCode === 37) {
                        this.prev();
                    } else if (e.keyCode === 39) {
                        this.next();
                    } else if (e.keyCode === 27) {
                        this.close();
                    }
                }]);
                this.events.forEach(e => { window.addEventListener(e[0], e[1]); });
            },

            show(i) {

                if (i >= this.items.length) {
                    i = 0;
                }
                if (i < 0) {
                    i = this.items.length - 1;
                }
                this.loading = true;
                this.bind();
                this.index = i;
                var src = this.items[i];
                var img = new Image();
                img.src = src;
                img.onload = () => {
                    this.loading = false;
                    this.src = src;
                }
            },
            next() {
                this.show(this.index - 1);
            },

            prev() {
                this.show(this.index + 1);
            },
            close() {
                this.index = -1;
                this.events.forEach(e => { window.removeEventListener(e[0], e[1]); });
                this.events = [];
            },
            bg(i) {
                return i && i.length > 0 ? `background-image: url('${i}')` : '';
            }

        },


    }
</script>