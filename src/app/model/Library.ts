import { Registration } from './Registration'
import { Book } from './Book'

export interface Library
{
    idLibrary:number;
	libraryCode:String;
	libraryName:String;
    libraryAddress:String;
	registrations:Array<Registration> ;
	books:Array<Book>;

}