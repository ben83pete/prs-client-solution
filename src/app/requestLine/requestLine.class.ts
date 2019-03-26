export class RequestLine{

    id: number;
    requestId: number;
    productId: number;
    quantity: number;
    active: boolean;

    constructor(requestId: number = 0, productId: number = 0, quantity: number =1 ){

        this.id = 0;
        this.requestId = requestId;
        this.productId = productId;
        this.quantity = quantity;
        this.active = true;
    }
}