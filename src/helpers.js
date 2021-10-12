/**Takes in an array of items.
 * Returns a randomly selected item from array of items */

 function choice(items) {
    const randIndex = Math.floor(Math.random() * items.length);
    return items[randIndex];
}

/**Takes in an array of items and an item to be matched.
 * Removes the first matching item from items, if item exists, and returns it. 
 * Otherwise returns undefined. */

function remove(items, item) {
    const itemIndex = items.indexOf(item);
    return items.splice(itemIndex, 1)[0];
}

export {choice, remove};