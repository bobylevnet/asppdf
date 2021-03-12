import { UsersInterface } from '@/models/interfaces/Users.interface'
/**
* @name UsersStateInterface
* @description
* Интерфейс для состояния Items.
*/
export interface UsersStateInterface {
    loading: boolean
    users: UsersInterface[]
}