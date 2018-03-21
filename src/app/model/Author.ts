import { Book } from './Book'

export interface Author {
    authorId: number;
	authorLastname:String;
    authorFirstname: String;
	booksList : Array<number>;
}

