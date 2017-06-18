<template>
<div id="app">
    <button class="control" v-on:click="start">Start</button>
    <div class="sort-list">
        <sort data-sort="QuickSort"></sort>
        <sort data-sort="BubbleSort"></sort>
    </div>
</div>
</template>

<script>
import sort from './Sort.vue'


const initialArr = [2, 42, 3, 19, 6, 32, 15, 7, 49, 30, 38, 36, 17, 2, 14, 46, 39, 41, 3, 44, 4, 1, 22, 29, 22, 23, 8, 33, 10, 16, 48, 31, 34, 12, 27, 40, 20, 35, 21, 25];
// let arr = initialArr.slice();
let data = {
    arr: [initialArr]
};

export default {
    name: 'App',
    data() {
        return data;
    },
    // methods: {
    //     start: start
    // },
    components: {
        sort
    }
};

</script>

<style>
.control {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    font-size: 20px;
}

.one-sort {
    margin-bottom: 20px;
}
</style>
