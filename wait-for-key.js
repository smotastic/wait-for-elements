const waitForKeyElements = (elements, callback, waitOnce = false) => {

    let alreadyFound = {};

    let interval = setInterval(() => {
        let foundNodes = document.querySelectorAll(elements);
        let foundNodesArray = Array.prototype.slice.call(foundNodes);
        let nonAlreadyFoundNodes = foundNodesArray.filter(node => !alreadyFound[node]);
        let elementsFinished = true;

        if (nonAlreadyFoundNodes.length > 0) {

            for (foundNode of nonAlreadyFoundNodes) {
                alreadyFound[foundNode] = true;
                let cancelFound = callback([foundNode]);
                if (cancelFound) {
                    elementsFinished = false;
                }
            }
        }
        else {
            elementsFinished = false;
        }


        if (elementsFinished && waitOnce) {
            clearInterval(interval);
        }
    }, 300);
}
