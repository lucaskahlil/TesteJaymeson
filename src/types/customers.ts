export type Customer = {
    id: string;
    code: string;
    name: string;
    network: string;
    commercialAssistant?: CommercialAssistant;
}

export type CommercialAssistant = {
    id: string
    name: string;
    email: string;
    phone: string;
}