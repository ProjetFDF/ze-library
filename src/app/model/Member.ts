export interface Member
{
    idMember: number;
	lastname: String;
    firstname: String;
	email: String;
	password: String;
    address: String;
    city: String;
    postalCode: String;
    phone: String;
	administrateur: boolean;
    bookBasketsIds: Array<number>;
	borrowsIds: Array<number>;
}