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
	editorId: number;
	authorIds: Array<number>;
    memberId:number;
}