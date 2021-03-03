import { ItemInterface } from '@/models/interfaces/Item.interface'
import { UploadInterface } from '../upload/Upload.interface';
/**
* @name UploadStateInterface
* @description
* Интерфейс для состояния Items.
*/
export interface UploadStateInterface {
    loading: boolean
    files: UploadInterface
}