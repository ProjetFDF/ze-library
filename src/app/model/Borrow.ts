import { BookCopy } from './BookCopy'

export interface Borrow
{
    borrowDate:Date;
    returnDate:Date;
	idBorrow:number;
    bookCopy: number;
}