import { Author } from './Author'
import { Category } from './Category'
import { Editor } from './Editor'

export interface Book {

	idBook: number;
	isbn: number;
	bookTitre: String;
    bookDescription: String;
    imagePath:String;
    popularBook: boolean;
    periodicBook:boolean;
	bookPrice: number; // verifier le type
	publicationDate: String;
    categoryId: number;
	editorId: number;
	authorIds: Array<number>;
	
}

