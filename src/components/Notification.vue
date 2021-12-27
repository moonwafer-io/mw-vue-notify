<template>
    <div class="mw-vn-notification" v-bind:class="mwVnNotification.cssClasses"
        v-on:mouseenter="isHovered = true"
        v-on:mouseleave="isHovered = false, tryCloseNotification()">
        <component
            v-bind:is="mwVnNotification.componentName"
            v-bind="mwVnNotification.data"></component>
        <span v-if="mwVnNotification.dismissButton" class="mw-vn-dismiss-x" v-on:click="closeNotification()" title="Dismiss">&times;</span>
    </div>
</template>

<script lang="ts">

import { defineComponent, ref } from "vue";

import { useVueNotify } from '../index';

export default defineComponent({
    props: {
        mwVnNotification: Object, // InternalNotificationConfig
    },
    setup(props) {
        let vueNotify = useVueNotify();

        let isHovered = ref(false);
        let shouldDelete = ref(false);

        function closeNotification() {
            vueNotify.deleteNotification(props.mwVnNotification?.id);
        }

        // Delete it after the requested number of milliseconds
        if (props.mwVnNotification?.dismissAfterMillis !== 0) {
            setTimeout(() => {
                if   (!isHovered.value) closeNotification();
                else shouldDelete.value = true;
            }, props.mwVnNotification!.dismissAfterMillis);
        }

        return {
            isHovered,
            closeNotification,
            tryCloseNotification: () => { if (shouldDelete.value) closeNotification(); },
        }
    },
});
</script>

<style scoped lang="scss">

$light-red: rgb(255, 175, 175);
$light-yellow: rgb(255, 255, 175);
$light-green: rgb(100, 255, 175);
$light-blue: rgb(175, 175, 255);

$dark-red: rgb(50, 25, 25);
$dark-yellow: rgb(50, 50, 25);
$dark-green: rgb(25, 50, 25);
$dark-blue: rgb(25, 25, 50);

@mixin notification-coloring($background, $foreground) {
    color: $foreground;
    border-color: $foreground;
    background: $background;
}

.mw-vn-notification {
    position: relative;

    padding: 25px;
    margin: 5px;
    max-width: 600px;

    border-radius: 5px;

    color: black;
    border: 1px solid black;
    background: darkgray;

    &.mw-vn-failure { @include notification-coloring($light-red, $dark-red); }
    &.mw-vn-warning { @include notification-coloring($light-yellow, $dark-yellow); }
    &.mw-vn-success { @include notification-coloring($light-green, $dark-green); }
    &.mw-vn-info    { @include notification-coloring($light-blue, $dark-blue); }

    .mw-vn-dismiss-x {
        font-size: 20px;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        padding: 2px 7px;
    }
}

</style>
