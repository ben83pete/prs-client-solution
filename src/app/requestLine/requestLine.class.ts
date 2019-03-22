export class RequestLine{

    id: number;
    requestId: number;
    productId: number;
    quantity: number;
    active: boolean;

    constructor(requestId: number, productId: number, quantity: number){

        this.requestId = requestId;
        this.productId = productId;
        this.quantity = quantity;
        this.active = true;
    }
}