import { Library } from './Library'
import { Member } from './Member'


export interface Registration
{	
    registrationId:number;
	registrationDate:Date;
    member: number;
	library: number;
    
}