<template>
    <div class="mw-vn-notification">
        {{ mwVnNotification }}
    </div>
</template>

<script lang="ts">

import { defineComponent, computed } from "vue";

export default defineComponent({
    props: {
        mwVnNotification: Object, // InternalNotificationConfig
    },
    setup(props) {
        return {
        }
    },
});
</script>

<style scoped lang="scss">

.mw-vn-notification {
    border: 1px solid green;
    color: black;
    background: gray;
}
</style>
