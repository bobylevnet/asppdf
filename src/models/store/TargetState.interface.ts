import { ItemInterface } from '@/models/interfaces/Item.interface'
import { TargetInterface } from '../interfaces/Target.interface';
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