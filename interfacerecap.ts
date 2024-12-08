
interface user {
    name: string;
    email: string;
    id: number
}

interface admin extends user {
    address: string
}

// same name interface
interface a {
    name: string
}
interface a {
    no : number
}


function info(obj: admin, obj1: a) {
    obj.address = "dscsn sdd"
    obj.email = "cb@gamil.com"

    obj1.name = "jcjks"
    obj1.no = 765
}


//type
type val = string | number | boolean

// let ds: val = 786
// let ds: val = "ddcsd"
let ds: val = true
