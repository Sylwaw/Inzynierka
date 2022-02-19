export interface IPersonCreate {
    name: string;
    secondName?: string;
    surname: string;
    dictCity: string;
    heightFrom?: number;
    heightTo?: number;
    weightFrom?: number;
    weightTo?: number;
    otherDetails?: string;
    clothesDescription?: string;
    tatoosDescription?: string;
    scarsDescription?: string;
    dateOfDisappear: Date;
    isAtRisk: boolean;
    description?: string;
    yearOfBirth?: number;
    dictEyeID: number;
    pictures?: string[];
    isWaiting: boolean;
}
