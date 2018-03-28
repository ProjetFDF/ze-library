
import { Author } from '../model/Author';
import { Editor } from '../model/Editor';
export interface BookBasketFull
{
    bookBasketId:number;
	bookBasketCreationDate:String;
    bookBasketDeliveryDate:String;
	idBook: number;
	isbn: number;
	bookTitre: String;
    bookDescription: String;
    imagePath:String;
    popularBook: boolean;
    periodicBook:boolean;
	bookPrice: number;
	publicationDate: String;
    categoryId: number;
	editor: Editor;
	authors: Array<Author>;
    memberId:number;
}