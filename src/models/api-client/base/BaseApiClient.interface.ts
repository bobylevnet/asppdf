import { AuthInterface } from "@/models/interfaces/Auth.interface";

/**
* @Name BaseApiClientInterface
* @description
* Интерфейс для клиентского API общий принимает любой тип
*/
export interface BaseApiClientInterface {
    reqeust: (url: string) => Promise<any[]>,
    auth: () => Promise<AuthInterface>
}