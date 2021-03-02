import { ItemInterface } from '@/models/items/Item.interface'
import { UploadInterface } from '@/models/upload/Upload.interface';
/**
* @Name ItemsApiClientInterface
* @description
* Интерфейс для клиентского API-модуля Items
*/
export interface UploadApiClientInterface {
    fetchItems: (data: FormData) => Promise<UploadInterface>
}