import { ItemInterface } from '@/models/items/Item.interface'
/**
* @name ItemsStateInterface
* @description
* Интерфейс для состояния Items.
*/
export interface ItemsStateInterface {
    loading: boolean
    items: ItemInterface[]
}