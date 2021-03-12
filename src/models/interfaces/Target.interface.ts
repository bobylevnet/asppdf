import { ItemInterface } from "./Item.interface";


export interface TargetInterface extends ItemInterface {
    UserTargetID: number
    TargetName: string
    selected: boolean
}