export class User {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    isReviewer: boolean;
    isAdmin: boolean;
    isActive: boolean;


    constructor(userName: string, password: string, firstName: string, lastName: string, 
        phone: string, email:string, isReviewer: false, isAdmin: false, isActive: true)
        {
        this.id = 0;
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.isReviewer = isReviewer;
        this.isAdmin = isAdmin;
        this.isActive = isActive;
    }

}
