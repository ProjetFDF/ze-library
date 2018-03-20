import { Library } from './Library'
import { Member } from './Member'


export interface Registration
{	
    registrationId:number;
	registrationDate:Date;
    member: Member;
	library: Library;
    
}