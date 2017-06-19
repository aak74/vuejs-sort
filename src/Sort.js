'use strict';

export default class SomeSort {
    constructor(arr) {
        this.steps = [];
        this.arr = arr;
    }

    saveStep(left, right) {
        var state = [];
        for (var v in this.arr) {
            state.push(this.arr[v]);
        }
        this.steps.push([state, left, right]);
    }

    swap(left, right) {
        if (left == right) {
            return;
        }
        var temp = this.arr[left];
        this.arr[left] = this.arr[right];
        this.arr[right] = temp;

        this.saveStep(left, right);
    }

    sort(left, right) {
    }
}
