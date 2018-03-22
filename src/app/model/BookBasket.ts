import { BookCopy } from './BookCopy'

export interface BookBasket
{
    bookBasketId:number;
	bookBasketCreationDate:String;
    bookBasketDeliveryDate:String;
	bookBasketBookCopy:Array<number>;
}