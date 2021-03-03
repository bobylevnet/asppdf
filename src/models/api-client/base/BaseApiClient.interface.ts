import { AuthInterface } from "@/models/interfaces/Auth.interface";

/**
* @Name BaseApiClientInterface
* @description
* Интерфейс для клиентского API общий принимает любой тип
*/
export interface BaseApiClientInterface {
    reqeust: (model: string, action: string, datajs: string) => Promise<any[]>,
    auth: () => Promise<AuthInterface>
}