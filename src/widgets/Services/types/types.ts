

export enum ButtonTypes {
    MANICURE = "Manicure",
    GEL_POLISH_MANICURE = "Gel polish manicure",
    GEL_POLISH_MANICURE_AND_GEL_STRENGTHENING = "Gel polish manicure and Gel strengthening",
    PEDICURE = "Pedicure",
    PEDICURE_REGULAR_POLISH = "Pedicure regular polish",
    GEL_POLISH_PEDICURE = "Gel Polish Pedicure"
}

export interface Buttons {
    id: number,
    title: string,
    time: string,
    price: string,
    description: string
}
