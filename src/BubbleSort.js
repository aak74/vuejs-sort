var resultsBs = [];

function _saveState(arr, left, right) {
    var state = [];
    for (var v in arr) {
        state.push(arr[v]);
    }

    resultsBs.push([state, left, right]);
}

function _swap(arr, left, right) {
    if (left == right) {
        return;
    }
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    _saveState(arr, left, right);
}

export function sort(arr) {
    // if (typeof head == "undefined") head = 0;
    // if (typeof end == "undefined") end = arr.length - 1;
    //
    // if (head == end) return;
    //
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {
                _swap(arr, i, i+1);
                swapped = true;
            }
        }
    } while (swapped);
    return resultsBs;
}
