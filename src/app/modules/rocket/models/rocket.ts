export const ConnectionStatus = {
    CONNECTED: 'connected',
    CLOSED: 'closed',
}

export enum Status {
    Launched = 'launched',
    Deployed = 'deployed',
    Failed = 'failed',
    Cancelled = 'cancelled',
    Waiting = 'waiting',
}

export interface Rocket {
    id: string;
    model: string;
    mass: number;
    payload: Payload;
    status: string;
    statusType: Status;
    timestamps: Timestamps;
    altitude: number;
    speed: number;
    acceleration: number;
    thrust: number;
    temperature: number;
    connectionStatus: string;
}

export interface Payload {
    description: string;
    weight: number;
}

// export interface Telemetry {
//     host: string;
//     port: number;
// }

export interface Timestamps {
    launched: null;
    deployed: null;
    failed: null;
    cancelled: null;
}