<template>
    <div class="mw-vn-notification-group">
        <transition-group :name="transformPosition">
            <div v-for="notification in mwVnGroup" v-bind:key="'notification-' + notification.id">
                <mw-vn-notification v-bind:mw-vn-notification="notification"></mw-vn-notification>
            </div>
        </transition-group>
    </div>
</template>

<script lang="ts">

import { computed, defineComponent } from "vue";
import { InternalNotificationConfig } from "../types";

export default defineComponent({
    props: {
        mwVnGroup: Array, // InternalNotificationConfig[]
    },
    setup(props) {
        let lastTransformPosition = '';
        return {
            transformPosition: computed(() => {
                if (props.mwVnGroup!.length === 0) { return lastTransformPosition; }

                // All notifications in this group have the same position. Based on that,
                // determine which way they should slide "onto" or "off of" the screen.
                switch ((props.mwVnGroup![0] as InternalNotificationConfig).position) {
                    case 'top-left':
                    case 'middle-left':
                    case 'bottom-left':
                        lastTransformPosition = 'mw-vn-show-dismiss-left';
                        return lastTransformPosition;

                    case 'top-right':
                    case 'middle-right':
                    case 'bottom-right':
                        lastTransformPosition = 'mw-vn-show-dismiss-right';
                        return lastTransformPosition;

                    case 'top-center':
                        lastTransformPosition = 'mw-vn-show-dismiss-top';
                        return lastTransformPosition;

                    case 'middle-center':
                        lastTransformPosition = 'mw-vn-show-dismiss-middle';
                        return lastTransformPosition;

                    case 'bottom-center':
                        lastTransformPosition = 'mw-vn-show-dismiss-bottom';
                        return lastTransformPosition;
                }
            }),
        }
    },
});
</script>

<style scoped lang="scss">
.mw-vn-notification-group {
    position: fixed;

    .mw-vn-show-dismiss-top-enter-active,    .mw-vn-show-dismiss-top-leave-active,
    .mw-vn-show-dismiss-bottom-enter-active, .mw-vn-show-dismiss-bottom-leave-active,
    .mw-vn-show-dismiss-left-enter-active,   .mw-vn-show-dismiss-left-leave-active,
    .mw-vn-show-dismiss-right-enter-active,  .mw-vn-show-dismiss-right-leave-active,
    .mw-vn-show-dismiss-middle-enter-active, .mw-vn-show-dismiss-middle-leave-active {
        transition: all 0.5s ease;
    }

    $slide-distance: 100px;

    // Top
    .mw-vn-show-dismiss-top-enter-from,.mw-vn-show-dismiss-top-leave-to {
        opacity: 0; transform: translateY(-$slide-distance);
    }

    // Bottom
    .mw-vn-show-dismiss-bottom-enter-from,.mw-vn-show-dismiss-bottom-leave-to {
        opacity: 0; transform: translateY($slide-distance);
    }

    // Left
    .mw-vn-show-dismiss-left-enter-from,.mw-vn-show-dismiss-left-leave-to {
        opacity: 0; transform: translateX(-$slide-distance);
    }

    // Right
    .mw-vn-show-dismiss-right-enter-from,.mw-vn-show-dismiss-right-leave-to {
        opacity: 0; transform: translateX($slide-distance);
    }

    // Middle
    .mw-vn-show-dismiss-middle-enter-from,.mw-vn-show-dismiss-middle-leave-to {
        opacity: 0;
    }

}
</style>
