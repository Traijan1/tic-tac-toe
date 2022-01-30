<template>
    <span @click="clicked(position)" class="tile">
        <slot></slot>
    </span>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    clicked: Function,
    position: Number
  }
})

export default class Tile extends Vue { }
</script>

<style lang="scss" scoped>
    $margin: 10px;
    $size: 50px;

    .tile {
        border-radius: 10px;
        display: inline-block;
        background-color: rgb(75, 179, 75);
        color: white;

        width: $size;
        height: $size;

        font-size: 20px;
        text-align: center;
        line-height: 50px;

        margin-bottom: $margin;
        margin-right: $margin;
        padding: 5px;
    }

    .tile:hover {
        background-color: rgb(44, 138, 44);
    }
</style>