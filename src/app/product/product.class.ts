export class Product {

    id: number;
    partNumber: string;
    name: string;
    description: string;
    unit: string;
    price: number;
    vendorId: number;
    isActive: boolean;
    


    constructor(partNumber: string, name: string, description: string, unit: string,
        price: number, vendorId: number){

            this.id = 0;
            this.partNumber = partNumber;
            this.name = name;
            this.description = description;
            this.unit = "1";
            this.price = price;
            this.vendorId = vendorId;
            this.isActive = true
        } 
}
