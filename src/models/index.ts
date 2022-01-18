export enum StoveType { Gas, FireStove, OpenFire}

export interface TrailInventoryConfig{
    shelter:boolean,
    personal: boolean,
    outOfCam:boolean,
    hiking: boolean,
    hasBathroom:boolean,
    cooking:boolean,
    stove:StoveType,
    
        
}