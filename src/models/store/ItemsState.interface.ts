import { ItemInterface } from '@/models/interfaces/Item.interface'
/**
* @name ItemsStateInterface
* @description
* Интерфейс для состояния Items.
*/
export interface ItemsStateInterface {
    loading: boolean
    items: ItemInterface[]
}