<template>
    <div class="mw-vn-notification-display">
        <mw-vn-notification-group
            v-for="(group, i) in notificationGroups"
            v-bind:key="'mw-vn-group-' + i"
            v-bind:class="['mw-vn-group-' + i]"
            v-bind:mw-vn-group="group"
            ></mw-vn-notification-group>
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";

import { useVueNotify } from '../index';

export default defineComponent({
    props: {},
    setup() {
        let vueNotify = useVueNotify();
        let notificationGroups = vueNotify.getNotificationGroups();

        return {
            notificationGroups,
        }
    },
});
</script>

<style scoped lang="scss">
.mw-vn-notification-display {
    position: fixed;
    z-index: 1000;

    .mw-vn-group-0 { top: 0;    left: 0;                                     }
    .mw-vn-group-1 { top: 0;    left: 50%; transform: translate(-50%, 0);    }
    .mw-vn-group-2 { top: 0;    right: 0;                                    }
    .mw-vn-group-3 { top: 50%;  left: 0;   transform: translate(0, -50%);    }
    .mw-vn-group-4 { top: 50%;  left: 50%; transform: translate(-50%, -50%); }
    .mw-vn-group-5 { top: 50%;  right: 0;  transform: translate(0, -50%);    }
    .mw-vn-group-6 { bottom: 0; left: 0;                                     }
    .mw-vn-group-7 { bottom: 0; left: 50%; transform: translate(-50%, 0);    }
    .mw-vn-group-8 { bottom: 0; right: 0;                                    }
}
</style>
