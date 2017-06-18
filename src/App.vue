<template>
<div id="app">
    <button class="control" v-on:click="start">Start</button>
    <div class="sort-list">
        <sort algorithm="QuickSort" :inarr="ina" :left="left" :right="right"></sort>
    </div>
</div>
</template>

<script>
import sort from './Sort.vue'

const initialArr = [2, 42, 3, 19, 6, 32, 15, 7, 49, 30, 38, 36, 17, 2, 14, 46, 39, 41, 3, 44, 4, 1, 22, 29, 22, 23, 8, 33, 10, 16, 48, 31, 34, 12, 27, 40, 20, 35, 21, 25];

let data = {
    arr: [initialArr],
    left: 0,
    right: initialArr.length -1
};
let results;

import {
    sort as qs
} from './QuickSort'

var start = function() {
    // console.log('start', this, data);
    let arr = initialArr.slice();
    visualize(qs(arr));
}

var visualize = function(results) {
    // console.log('visualize', this, results);
    let ticks = setInterval(function() {
        if (results.length) {
            var res = results.shift();
            Vue.set(data.arr, 0, res[0]);
            data.left = res[1];
            data.right = res[2];
        } else {
            clearInterval(ticks);
        }
    }, 100);
}

export default {
    name: 'App',
    data: function() {
        var res = data;
        return res;
    },
    methods: {
        start: start
    },
    components: {
        sort
    },
    computed: {
        ina: function () {
            // console.log('computed', data.arr, data.arr[1]);
            // return [1, 2];
            return data.arr;
        }
    }
};

</script>

<style>
.control {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    font-size: 20px;
}

.one-sort {
    margin-bottom: 20px;
}
</style>
