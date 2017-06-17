<template>
    <div id="app">
        <button class="control" v-on:click="go">Go</button>
        <div class="item" v-for="col in arr[0]" track-by="$index">
            <div class="item-column"
                v-bind:class="{ 'beSwapedColumn': $index == arr[1], 'swapColumn': $index == arr[2] }"
                v-bind:style="{height: col * 10 + 'px'}">
            </div>
            <div class="item-num">{{col}}</div>
        </div>
    </div>
</template>

<script>
import { quickSort } from './QuickSort'

var go = function () {
    let results = quickSort(arr);
    let ticks = setInterval(function() {
        if(results.length) {
            data.arr = results.shift();
        } else {
            clearInterval(ticks);
        }
    }, 100);
}

let arr = [2, 42, 3, 19, 6, 32, 15, 7, 49, 30, 38, 36, 17, 2, 14, 46, 39, 41, 3, 44, 4, 1, 22, 29, 22, 23, 8, 33, 10, 16, 48, 31, 34, 12, 27, 40, 20, 35, 21, 25];
let data = {
    arr: [arr]
};

export default {
    data () {
      return data;
    },
    methods: {
        go: go
    }
};

go();
</script>

<style>
.control {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 20px;
}
.item {
    display: inline-block;
    width: 20px;
    height: 10px;
    margin-right: 5px;
}
.item-column {
    background-color: green;
}
.item .item-num {
    text-align: center;
}
.item .beSwapedColumn {
    background-color: red;
}
.item .swapColumn {
    background-color: blue;
}
</style>
