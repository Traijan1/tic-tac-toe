<template>
    <span v-if="game.winnerFound" id="winMessage">{{ game.message }}</span> 
    <br>
    <span id="currentChar">Current Move from: <b>{{ game.currentChar }}</b></span>
    <br>
    <span :key="item" v-for="(item, index) in game.field" id="field">
        <Tile :clicked="setField" :position="index">
            {{item == " " ? "&nbsp;" : item}} 
        </Tile>

        <br v-if="(index + 1) % 3 == 0" />
    </span>

    <!-- <button v-if="game.winnerFound" @click="newGame()">New Round</button> -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Tile from "./Tile.vue";
import { TicTacToe } from "../objects/TicTacToe";
import { Sign } from "../objects/Sign";

@Options({
  components: {
      Tile
  }
})

export default class Field extends Vue {
    cross = Sign.Cross;
    circle = Sign.Circle;

    game: TicTacToe = new TicTacToe();

    public setField(position: number): void {
        this.game.setField(position);
    }

    public newGame(): void {
        this.game.newGame();
    }
}
</script>

<style lang="scss" scoped>
    * {
        user-select: none;
    }

    #field {
        position: relative;
        top: 100px;
        left: 140px;
    }

    #winMessage {
        position: absolute;
        top: 45px;
        left: 175px;
        font-size: 25px;
    }

    #currentChar {
        position: absolute;
        top: 100px;
        left: 150px;
        font-size: 18px;
    }
</style>