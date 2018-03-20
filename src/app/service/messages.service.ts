import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
isDisplayed = true;
alertClass = "";
message = "";
contructor() {}

displayErrorMessage(message: string){
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