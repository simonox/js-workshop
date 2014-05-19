var x = [undefined, null, 0, 1, new Boolean(false)];

for (var i = 0; i < 5; i++) {
    if (x[i]) {
        console.log("truethy: " + x[i]);
    }else {
        console.log("falsy: " + x[i]);
    }
}