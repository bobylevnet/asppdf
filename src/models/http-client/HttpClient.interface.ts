import { HttpRequestParamsInterface } from './HttpRequestParams.interface'
/**
* @Name HttpClientInterface
* @description
* Интерфейс для обёртки HttpClient.
*/
export interface HttpClientInterface {
    get<T>(parameters: HttpRequestParamsInterface): Promise<T>
    post<T>(parameters: HttpRequestParamsInterface): Promise<T>
}