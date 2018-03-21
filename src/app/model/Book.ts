import { Author } from './Author'
import { Category } from './Category'
import { Editor } from './Editor'

export interface Book {

	idBook: number;
	ISBN: number;
	bookTitre: String;
    bookDescription: String;
    imagePath:String;
    popularBook: boolean;
    periodicBook:boolean;
	bookPrice: number; // verifier le type
	publicationDate: Date;
    category: number;
	editor: number;
	authors: Array<number>;

}

