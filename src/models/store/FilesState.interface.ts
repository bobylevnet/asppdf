import { ItemInterface } from '@/models/items/Item.interface'
import { FilesInterface } from '../items/Files.interface';

/**
* @name TargetStateInterface
* @description
* Интерфейс для состояния Items.
*/
export interface FilesStateInterface {
    files: FilesInterface[]
}