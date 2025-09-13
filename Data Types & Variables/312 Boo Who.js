/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function booWho(bool) {
    if (typeof bool !== 'boolean') {
        return false;
    }
    return true;
}

booWho(null);
// Should return false.

booWho(true);
// Should return true.

booWho([1, 2, 3]);
// Should return false.

booWho([].slice);
// Should return false.

booWho({ "a": 1 });
// Should return false.