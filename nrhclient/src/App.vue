<template>
    <div id="app">
        <navigation v-if="authenticated"/>
        <router-view />
    </div>
</template>
<script>
import navigation from '@/layouts/Navigation'
import { mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
        })
    },
    components:{
        navigation
    }
}
</script>