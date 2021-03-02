//import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { HttpClient, HttpRequestParamsInterface } from '@/models/http-client'
import { BaseApiClientUrlsInterface } from './BaseApiClientUrls.interface'
import { BaseApiClientInterface } from './BaseApiClient.interface'
import { ItemInterface } from '@/models/items/Item.interface'

/**
* @Name BaseApiClientModel
* @description
* Реализует интерфейс ItemsApiClientInterface

*/
export class BaseApiClientModel implements BaseApiClientInterface {

    private readonly urls!: BaseApiClientUrlsInterface
    constructor(urls: BaseApiClientUrlsInterface) {
        this.urls = urls
    }

    reqeust(model: string, action: string, datajs: string): Promise<any[]> {
       // return new Promise<ItemInterface[]>((resolve) => {
        let urlr = ""
            urlr = this.urls.baseurl + `{"model":"${model}", "action":"${action}"}&datajs={${datajs}}`
            const getParameters: HttpRequestParamsInterface = {
                url: urlr,
                requiresToken: false    
            }
            return HttpClient.get<any[]>(getParameters)
           
       // })
    }
}