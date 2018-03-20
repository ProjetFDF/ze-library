import {injectable} from '@angular/core';

@injectable()
export class MessagesService {
isDiasplayed = true;
alertClass = "";
message = "";
contructor() {}

displayerrorMessage(message: string){
    this.message = message;
    this.alertClass = "alert alert-danger";

}

displaySuccessfullMessage(message: string) {
this.message = message;
    this.alertClass = "alert alert-success";

}
displayWarningfullMessage(message: string) {
this.message = message;
    this.alertClass = "alert alert-warning";

}


}