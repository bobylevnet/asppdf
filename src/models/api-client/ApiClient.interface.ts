import { UsersApiClientInterface } from './users'
import { UploadApiClientInterface } from './upload';
import { BaseApiClientInterface } from './base'


/**
* @Name ApiClientInterface
* @description
* Интерфейс-обёртка, заключающая в себе все клиентские API-модули в целях лучшей ор\
ганизации кода.
*/
export interface ApiClientInterface {
    users: UsersApiClientInterface,
    upload: UploadApiClientInterface,
    target: BaseApiClientInterface,
    base: BaseApiClientInterface
}