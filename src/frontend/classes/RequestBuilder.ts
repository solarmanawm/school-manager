import {AxiosRequestConfig, AxiosPromise} from 'axios'

import axios from '../axios'

interface RequestBuilderInterface {}

type Params = {[key: string]: any}

type Headers = {[key: string]: string}

type Data = {[key: string]: any}

interface RequestConfigInterface {
    method: string;
    url: string;
    params: Params;
    headers: Headers;
    data: Data;
}

class RequestBuilder<T> implements RequestBuilderInterface {
    private requestConfig: RequestConfigInterface = {
        method: '',
        url: '',
        params: {},
        headers: {},
        data: {},
    }

    method(method: string): RequestBuilder<T> {
        this.requestConfig.method = method
        return this
    }

    url(url: string): RequestBuilder<T> {
        this.requestConfig.url = url
        return this
    }

    params(params: Params): RequestBuilder<T> {
        this.requestConfig.params = params
        return this
    }

    headers(headers: Headers): RequestBuilder<T> {
        this.requestConfig.headers = headers
        return this
    }

    data(data: Data): RequestBuilder<T> {
        this.requestConfig.data = data
        return this
    }

    send(): AxiosPromise<T> {
        if (this.requestConfig.method === '' || this.requestConfig.url === '') {
            throw new Error('[RequestBuilder] No method or url defined.')
        }

        return axios(this.requestConfig as AxiosRequestConfig)
    }

    mock<T>(state: boolean): Promise<{error?: Error; item: T}> {
        const error = state ? undefined : new Error('Mocked error in RequestBuilder')
        return Promise.resolve({
            error,
            item: {} as T,
        })
    }
}


export default RequestBuilder
