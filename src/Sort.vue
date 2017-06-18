<template>
<div class="one-sort">
    <div class="item" v-for="(col, index) in arr[0]">
        <div class="item-column" v-bind:class="{ 'swap-left': index == arr[1], 'swap-right': index == arr[2] }" v-bind:style="{height: col * 8 + 'px'}">
        </div>
        <div class="item-num">{{col}}</div>
    </div>
</div>
</template>


<script>
const initialArr = [2, 42, 3, 19, 6, 32, 15, 7, 49, 30, 38, 36, 17, 2, 14, 46, 39, 41, 3, 44, 4, 1, 22, 29, 22, 23, 8, 33, 10, 16, 48, 31, 34, 12, 27, 40, 20, 35, 21, 25];
// let arr = initialArr.slice();
let data = {
    arr: [initialArr]
};

import {
    sort as qs
} from './QuickSort'

var start = function() {
    let arr = initialArr.slice();
    vizualize(qs(arr));
}

var vizualize = function(results) {
    let ticks = setInterval(function() {
        if (results.length) {
            data.arr = results.shift();
        } else {
            clearInterval(ticks);
        }
    }, 100);
}


start();



export default {
    name: 'sort',
    data: function() {
        return data;
    }
}
</script>

<style>
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

.item-column.swap-left {
    background-color: red;
}

.item-column.swap-right {
    background-color: blue;
}
</style>
