<template>
<div class="one-sort">
    <h2>{{algorithm}}</h2>
    <div class="item" v-for="(col, index) in arr[0]">
        <div class="item-column" v-bind:class="{ 'swap-left': index == left, 'swap-right': index == right }" v-bind:style="{height: col * 8 + 'px'}">
        </div>
        <div class="item-num">{{col}}</div>
    </div>
</div>
</template>


<script>

export default {
    name: 'sort',
    props: ['algorithm', 'inarr', 'left', 'right'],
    data: function() {
        // console.log('data', this);
        return {arr: this.inarr};
    },
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
