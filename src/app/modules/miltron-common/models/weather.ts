export interface Weather {
    temperature: number;
    humidity: number;
    pressure: number;
    precipitation: Precipitation;
    time: Date;
    wind: Wind;
}

export interface Precipitation {
    probability: number;
    rain: boolean;
    snow: boolean;
    sleet: boolean;
    hail: boolean;
}

export interface Wind {
    direction: string;
    angle: number;
    speed: number;
}