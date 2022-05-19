<template>
    <div class="mw-vn-message-with-list">
        <p v-if="message">{{ message }}</p>
        <ul>
            <li v-for="(item, i) in items" v-bind:key="'item-' + i">{{ item }}</li>
        </ul>
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
    props: {
        message: String,
        items: Array, // string[]
    },
    setup(props) {
        return {
        }
    },
});
</script>

<style lang="scss">

.mw-vn-message-with-list {
    p  { margin: 0 0 10px 0; }
    ul { margin: 0; }
}
</style>
