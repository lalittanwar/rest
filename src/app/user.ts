export class User {
    public id:number;
    public firstname: string;
    public email: string;
    public password:string;
    public phone:number;
    public dob :Date;

 /* constructor(id,firstname,lastname) { 
          this.idc=id;
          this.firstnamec=firstname;
          this.lastnamec=lastname;
       }
       */
       constructor(){}

       setId(id1:number){
       this.id=id1;
        }
        setfirstname(firstname1:string){
       this.firstname=firstname1;
        }
        setemail(email1:string){
        this.email=email1;
        }
        setpassword(password1:string){
            this.password=password1;
        }
        setphone(phone1:number){
        this.phone=phone1;
        }
        setdob(dob1:Date){
            this.dob=dob1;
        }
    }

/*

export class User {
    public id:number;
    public name: string;
    public year: number;
    public color:string;
    public pantone_value:string;
}

*/