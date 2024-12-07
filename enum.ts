
//Enumeration: data type - holds a constant value
//numeric
//string
//heterogenous

enum Browser {
    'Chrome' = getBrowser('Chrome'),
    'Safari' = 33,
    'Firefox' = getBrowser('Firefox'),
    // 'Safari',                                    //consecutive value need to be intialised               
}

function getBrowser(getBrowser: string) : number{
    if(getBrowser === "Chrome") {
        return 115;
    }
    return 1
}

console.log(Browser.Chrome)
// console.log(Browser)
console.log(Browser.Firefox)

enum Environment {
    QA ="qa",
    DEV = "dev",
    STAGE = "stage"
}

console.log(Environment.QA)
console.log(Environment['DEV'])

enum Status {
    ACTIVE = 'active',
    DEACTIVATE = 1,
    INACTIVATE
}

console.log(Status.ACTIVE)
console.log(Status.DEACTIVATE)
console.log(Status.INACTIVATE)