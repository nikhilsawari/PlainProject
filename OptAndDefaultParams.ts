
function optionalpram(new1: string, new2?: number) {
    console.log(new1 + " & "+ new2)
}

optionalpram("sdcjkbk")


function defaultParams(new3: number, new4 = 100) {
    console.log(new3 + " & "+ new4)
}

defaultParams(231)