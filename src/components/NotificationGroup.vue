<template>
    <div class="mw-vn-notification-group">
        <mw-vn-notification v-for="notification in mwVnGroup" v-bind:key="'notification-' + notification.id"
            v-bind:mw-vn-notification="notification">
        </mw-vn-notification>
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
    props: {
        mwVnGroup: Array, // InternalNotificationConfig[]
    },
    setup() {
        return {
        }
    },
});
</script>

<style scoped lang="scss">
.mw-vn-notification-group {
    position: fixed;
    border: 3px solid red;
}
</style>
