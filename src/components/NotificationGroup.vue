<template>
    <div class="mw-vn-notification-group">
        <transition-group name="mw-vn-show-dismiss">
            <div v-for="notification in mwVnGroup" v-bind:key="'notification-' + notification.id">
                <mw-vn-notification v-bind:mw-vn-notification="notification"></mw-vn-notification>
            </div>
        </transition-group>
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
    props: {
        mwVnGroup: Array, // InternalNotificationConfig[]
    },
    setup(props) {
        return {
        }
    },
});
</script>

<style scoped lang="scss">
.mw-vn-notification-group {
    position: fixed;

    .mw-vn-show-dismiss-enter-active,.mw-vn-show-dismiss-leave-active {
        transition: all 0.5s ease;
    }
    .mw-vn-show-dismiss-enter-from { opacity: 0; transform: translateX(-100px); }
    .mw-vn-show-dismiss-leave-to   { opacity: 0; transform: translateX(100px); }
}
</style>
