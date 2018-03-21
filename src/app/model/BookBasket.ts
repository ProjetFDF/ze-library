import { BookCopy } from './BookCopy'

export interface BookBasket
{
    bookBasketId:number;
	bookBasketCreationDate:Date;
    bookBasketDeliveryDate:Date;
	bookBasketBookCopy:Array<number>;
}