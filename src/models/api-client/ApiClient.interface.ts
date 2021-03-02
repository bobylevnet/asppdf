import { ItemsApiClientInterface } from './items'
import { UploadApiClientInterface } from './upload';
import { BaseApiClientInterface } from './base'

/**
* @Name ApiClientInterface
* @description
* Интерфейс-обёртка, заключающая в себе все клиентские API-модули в целях лучшей ор\
ганизации кода.
*/
export interface ApiClientInterface {
    items: ItemsApiClientInterface,
    upload: UploadApiClientInterface,
    target: ItemsApiClientInterface,
    base: BaseApiClientInterface
}