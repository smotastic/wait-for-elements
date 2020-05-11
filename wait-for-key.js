
const waitForKey = (elements = [], callback) => {

    if (!Array.isArray(elements)) {
        elements = [elements];
    }

    let found = {};
    let interval = setInterval(() => {
        let nonFoundElements = elements.filter(ele => !found[ele]);
        for (element of nonFoundElements) {
            if (document.querySelector(element)) {
                found[element] = true;
            }
        }
        if (Object.keys(found).length === elements.length) {
            clearInterval(interval);
            callback();
        }
    }, 300);
}
