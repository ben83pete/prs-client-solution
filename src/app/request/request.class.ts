export class Request{

    id: number;
    description: string;
    justification: string;
    reject_Reason: string;
    delivery_Mode: string;
    submitDate: string;
    status: string;
    total: number;
    userId: number;
    active: boolean;

    constructor( description: string, justification: string, reject_Reason: string, delivery_Mode: string,
        submitDate: string, status: string, total: number, userId: number){

            this.id = 0;
            this.description = description;
            this.justification = justification;
            this.reject_Reason = reject_Reason;
            this.delivery_Mode = delivery_Mode;
            this.submitDate = submitDate;
            this.status = status;
            this.total = total;
            this.userId = userId;
            this.active = true;
        }

}