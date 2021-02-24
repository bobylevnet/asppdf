/**
* @name HttpRequestParamsInterface
* @description
* Параметры для запросов GET/POST/PUT в HttpClient
*/
export interface HttpRequestParamsInterface {
    url: string
    requiresToken: boolean
    payload?: any
}