//import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { HttpClient, HttpRequestParamsInterface } from '@/models/http-client'
import { UsersApiClientUrlsInterface } from './UsersApiClientUrls.interface'
import { UsersApiClientInterface } from './UsersApiClient.interface'
import { UsersInterface } from '@/models/interfaces/Users.interface'
/**
* @Name ItemsApiClientModel
* @description
* Реализует интерфейс ItemsApiClientInterface

*/
export class UsersApiClientModel implements UsersApiClientInterface {

    private readonly urls!: UsersApiClientUrlsInterface
    constructor(urls: UsersApiClientUrlsInterface) {
        this.urls = urls
    }

    fetchUsers(): Promise<UsersInterface[]> {
       // return new Promise<ItemInterface[]>((resolve) => {
            const getParameters: HttpRequestParamsInterface = {
                url: this.urls.fetchItems,
                requiresToken: false
            }
        return HttpClient.get<UsersInterface[]>(getParameters)
           
       // })
    }
}