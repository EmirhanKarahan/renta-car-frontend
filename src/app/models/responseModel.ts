import { ResponseModelBase } from "./responseModelBase";

export interface ResponseModel<T> extends ResponseModelBase{
    data:T;
}