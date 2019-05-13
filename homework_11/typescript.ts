class University {

    constructor(public name: string, public dept: string){
    }

    public graduation(year: number): void {
        console.log(`Graduating ${this.dept} ${year} students.`);
    }
}

let mum: University = new University("MUM", "CS");
mum.graduation(2019);