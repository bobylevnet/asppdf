import { ItemInterface } from '@/models/items/Item.interface'
import { FilesInterface } from '../files/Files.interface';
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