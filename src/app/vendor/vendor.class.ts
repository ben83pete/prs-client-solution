export class Vendor {
    id: number;
    name: string;
    address:string;
    city: string;
    state: string;
    zipcode: string;
    phone: string;
    email: string;
    isPreferred: boolean;
    isActive: boolean;


    constructor(name: string, address: string, city: string, state: string, zipcode: string, 
        phone: string, email:string)
        {
        this.id = 0;
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.phone = phone;
        this.email = email;
        this.isPreferred = this.isPreferred;
        this.isActive = true;
    }

}
