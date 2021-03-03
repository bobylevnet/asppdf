//import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { HttpClient, HttpRequestParamsInterface } from '@/models/http-client'
import { BaseApiClientUrlsInterface } from './BaseApiClientUrls.interface'
import { BaseApiClientInterface } from './BaseApiClient.interface'
import { ItemInterface } from '@/models/interfaces/Item.interface'
import { AuthInterface } from '@/models/interfaces/Auth.interface'

/**
* @Name BaseApiClientModel
* @description
* Реализует интерфейс BaseApiClientInterface

*/
export class BaseApiClientModel implements BaseApiClientInterface {

    private readonly urls!: BaseApiClientUrlsInterface
    constructor(urls: BaseApiClientUrlsInterface) {
        this.urls = urls
    }

    //запрос авторизации 
    auth(): Promise<AuthInterface> {
        let urlr = ""
        urlr = this.urls.authurl 
        const getParameters: HttpRequestParamsInterface = {
            url: urlr,
            requiresToken: false
        }
        return HttpClient.get<AuthInterface>(getParameters)

        // })
    }


    reqeust(model: string, action: string, datajs: string): Promise<any[]> {
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