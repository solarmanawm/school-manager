import { AxiosPromise } from 'axios';
interface RequestBuilderInterface {
}
declare type Params = {
    [key: string]: any;
};
declare type Headers = {
    [key: string]: string;
};
declare type Data = {
    [key: string]: any;
};
declare class RequestBuilder<T> implements RequestBuilderInterface {
    private requestConfig;
    private baseUrl;
    method(method: string): RequestBuilder<T>;
    url(url: string): RequestBuilder<T>;
    params(params: Params): RequestBuilder<T>;
    headers(headers: Headers): RequestBuilder<T>;
    data(data: Data): RequestBuilder<T>;
    send(): AxiosPromise<T>;
    mock<T>(state: boolean): Promise<{
        error?: Error;
        item: T;
    }>;
}
export default RequestBuilder;
