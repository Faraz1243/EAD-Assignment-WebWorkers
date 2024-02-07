// worker.js
self.onmessage = function(event) {
    const array = event.data;
    const sortedArray = array.sort((a, b) => a - b);
    self.postMessage(sortedArray);
};
