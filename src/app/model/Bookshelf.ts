import { BookCopy } from './BookCopy'

export interface Bookshelf
{
    bookshelfId:number;
	bookshelfName:String;
    bookshelfDescription:String;
	bookNumber:number;
	bookshelfBookCopy:Array<BookCopy>;
}