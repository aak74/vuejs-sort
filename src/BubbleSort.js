'use strict';

import SomeSort from './Sort'

export default function bs(arr) {
    class BubbleSort extends SomeSort {
        sort() {
            var swapped;
            do {
                swapped = false;
                for (var i=0; i < this.arr.length-1; i++) {
                    if (this.arr[i] > this.arr[i+1]) {
                        this.swap(i, i+1);
                        swapped = true;
                    }
                }
            } while (swapped);
        }
    }

    let bs = new BubbleSort(arr);
    bs.sort();
    return bs.steps;
}
