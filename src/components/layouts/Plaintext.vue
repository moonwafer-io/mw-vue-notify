<template>
    <div class="mw-vn-plaintext">
        <p v-for="(message, i) in messages" v-bind:key="'mw-vn-message-' + i">{{ message }}</p>
    </div>
</template>

<script lang="ts">

import { computed, defineComponent } from "vue";

export default defineComponent({
    props: {
        message: [String, Array], // string or string[]
    },
    setup(props) {
        return {
            messages: computed(() => Array.isArray(props.message) ? props.message : [props.message])
        }
    },
});
</script>

<style scoped lang="scss">

.mw-vn-plaintext {
    p {
        margin: 0;

        &:not(:first-child) { margin-top: 10px; }
    }
}
</style>
