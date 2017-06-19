'use strict';

import SomeSort from './Sort'

class QuickSort extends SomeSort {

    sort(head, end) {
        if (typeof head == "undefined") head = 0;
        if (typeof end == "undefined") end = this.arr.length - 1;

        if (head == end) return;

        var startIndex = head;
        var pivot = this.arr[end];

        for (var v = head; v < end; v++) {
            if (this.arr[v] < pivot) {
                this.swap(startIndex++, v);
            }
        }
        this.swap(startIndex, end);

        if (startIndex > head) this.sort(head, startIndex - 1);
        if (startIndex < end) this.sort(startIndex + 1, end);
    }
}

export default function qs(arr) {
    let qs = new QuickSort(arr);
    qs.sort();
    return qs.steps;
}
