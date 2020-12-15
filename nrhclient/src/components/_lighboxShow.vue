<template>
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
</template>
<script>
export default {
    props:[],
    data() {
        return {
            loading: false,
            events: []
        }
    },
}
</script>