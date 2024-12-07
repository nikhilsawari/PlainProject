

let identification: (string | number)
// identification = 'nikh',
// identification = 22

function getId(id: string|number) {
    if(typeof(id) === 'string') {
        console.log(id+"my_string");
    }
    else{
        console.log('my_string');
    }
}

getId('mmm');