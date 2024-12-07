class firstClass {

    surname: string;
    myId: number;

    constructor(sname: string, id: number){
        this.surname = sname,
        this.myId = id
    }

    displaye = () => {
        console.log(this.surname+ " and " + this.myId)
    }

}

let f = new firstClass("awari", 22)
f.displaye()