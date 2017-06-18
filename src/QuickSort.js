var results = [];

function _saveState(arr, left, right) {
    var state = [];
    for (var v in arr) {
        state.push(arr[v]);
    }

    results.push([state, left, right]);
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

export function sort(arr, head, end) {
    if (typeof head == "undefined") head = 0;
    if (typeof end == "undefined") end = arr.length - 1;

    if (head == end) return;

    var startIndex = head;
    var pivot = arr[end];

    for (var v = head; v < end; v++) {
        if (arr[v] < pivot) {
            _swap(arr, startIndex++, v);
        }
    }
    _swap(arr, startIndex, end);

    if (startIndex > head) sort(arr, head, startIndex - 1);
    if (startIndex < end) sort(arr, startIndex + 1, end);

    return results;
}
