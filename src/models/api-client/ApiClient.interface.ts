import { ItemsApiClientInterface } from './items'

/**
* @Name ApiClientInterface
* @description
* Интерфейс-обёртка, заключающая в себе все клиентские API-модули в целях лучшей ор\
ганизации кода.
*/
export interface ApiClientInterface {
    items: ItemsApiClientInterface
}