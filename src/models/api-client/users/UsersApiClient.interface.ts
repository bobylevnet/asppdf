import { UsersInterface } from '@/models/interfaces/Users.interface'
/**
* @Name ItemsApiClientInterface
* @description
* Интерфейс для клиентского API-модуля It
*/
export interface UsersApiClientInterface {
    fetchUsers: () => Promise<UsersInterface[]>
}