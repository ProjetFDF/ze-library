import { BookCopy } from './BookCopy'

export interface Borrow
{
    borrowDate:String;
    returnDate:String;
	idBorrow:number;
    bookCopy: number;
}