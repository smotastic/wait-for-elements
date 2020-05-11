
const waitForKey = (elements, callback, waitOnce = false) => {

    if (!Array.isArray(elements)) {
        elements = [elements];
    }

    let found = {};
    let interval = setInterval(() => {
        let nonFoundElements = elements.filter(ele => !found[ele]);
        for (element of nonFoundElements) {
            let foundNode = document.querySelector(element);
            if (document.querySelector(element)) {
                found[element] = true;
                callback(foundNode);
                if (waitOnce) {
                    break;
                }
            }
        }
        let foundElements = Object.keys(found);
        // ich brauch nur eins ODER erst raus wenn alle da sind
        if ((waitOnce && foundElements.length >= 1) || (foundElements.length === elements.length)) {
            clearInterval(interval);
        }
    }, 300);
}
