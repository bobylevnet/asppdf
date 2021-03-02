import { ItemInterface } from '@/models/items/Item.interface'
import { TargetInterface } from '../items/Target.interface';
/**
* @name TargetStateInterface
* @description
* Интерфейс для состояния Items.
*/
export interface TargetStateInterface {
    loading: boolean
    target: TargetInterface[]
    filter: string
}