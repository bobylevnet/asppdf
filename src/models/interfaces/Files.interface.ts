
{
  /*   "ID": 22, "NameFile": "12.txt",
        "DateCreate": "2021-03-10T00:00:00Z",
        "DateDelete": "2021-03-10T00:00:00Z",
        "PathFile": "./upload/12.txt",
        "IDUser": 3,
            "IdTarget": 0,
            "Uploaded": false */
}
export interface FilesInterface  {
    ID: number,
    NameFile: string,
    DateCreate: string,
    DateDelete: string
    PathFile: string,
    IDUser: number,
    Idtarger: number,
}