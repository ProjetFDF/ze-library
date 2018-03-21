import { Borrow } from './Borrow'
import { BookBasket } from './BookBasket'

export interface Member
{
    idMember: number;
	lastname: String;
    firstname: String;
	email: String;
	password: String;
    address: String;
    city: String;
    postalCode: String;
    phone: String;
	administrateur: boolean;
	borrows: Array<number>;
	bookBaskets: Array<number> ;
}