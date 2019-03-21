export class Request{

    id: number;
    description: string;
    justify: string;
    rejectReason: string;
    deliveryMode: string;
    submitDate: string;
    status: string;
    total: number;
    userId: number;
    isActive: boolean;

    constructor( description: string, justify: string, rejectReason: string, deliveryMode: string,
        submitDate: string, status: string, total: number, userId: number){

            this.id = 0;
            this.description = description;
            this.justify = justify;
            this.rejectReason = rejectReason;
            this.deliveryMode = deliveryMode;
            this.submitDate = submitDate;
            this.status = status;
            this.total = total;
            this.userId = userId;
            this.isActive = true;
        }

}