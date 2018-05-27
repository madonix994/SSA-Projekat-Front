export interface IRecord
{
    Person_Name: string;
    Person_Surname: string;
    Type_Name: string;
    City_Name: string;
    Address: string;
    Apartment_Number: number;
    Owner_Name: string;
    Owner_Surname: string;
    Date_Time: string;
    Record_Status: string;
    Record_Id: number;
    P_Person_Id: number;
    A_Apartment_Id: number;
    // OSTALI PODACI NISU POTREBNI ZA ISPIS
    // Appartment_Status: string;
    // Ppt: number;
    // Card_Number: number;
    // JMBG: number;
}