import { Bookshelf } from './Bookshelf'
import { BookBasket } from './BookBasket'
import { Book } from './Book'

export interface BookCopy
{
    idBookCopy : number;
	bookCopyTitle: String;
	bookshelf:Bookshelf;
	bookBaskets:Array<BookBasket>;
    book: Book;
}