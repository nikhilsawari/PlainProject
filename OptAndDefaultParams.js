function optionalpram(new1, new2) {
    console.log(new1 + " & " + new2);
}
optionalpram("sdcjkbk");
function defaultParams(new3, new4) {
    if (new4 === void 0) { new4 = 100; }
    console.log(new3 + " & " + new4);
}
defaultParams(231);
