export interface Gym {
    dates: string[];
    duration: number;
    durationUnits: string;
    locale: Locale;
    feePerSemester: number;
    cardDeposit: number;
    currency: string;
}

export interface Locale {
    [key: string]: LocaleContent;
}

export interface LocaleContent {
    header: string;
    subHeader: string;
    location: string;
    feePerSemesterText: string;
    cardDepositText: string;
    infoText: string;
    questionsText: string;
}