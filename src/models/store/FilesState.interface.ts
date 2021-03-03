import { ItemInterface } from '@/models/interfaces/Item.interface'
import { FilesInterface } from '../interfaces/Files.interface';

/**
* @name TargetStateInterface
* @description
* Интерфейс для состояния Items.
*/
export interface FilesStateInterface {
    files: FilesInterface[]
}