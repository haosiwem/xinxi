import {Inject, Injectable, InjectionToken, Optional} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {isNullOrUndefined} from 'util';

export interface UploadConfig {
  url: string;
  source?: string;
  reportProcess?: boolean;
}

// 提供服务的数据源配置信息
export const UPLOAD_TOKEN = new InjectionToken<UploadConfig>('upload');

@Injectable()
export class UploadService {
  constructor(@Optional() @Inject(UPLOAD_TOKEN) private config: UploadConfig, private httpClient: HttpClient) {
    if (isNullOrUndefined(config)) {
      console.error('config is undefined,you can define token yourself.');
    }
  }

  /**
   * 请求上传文件
   * @param file 文件内容
   * @returns {Observable<HttpEvent<any>>}
   */
  public requestUpload(file: any): Observable<HttpEvent<any>> {
    if (!this.config) {
      console.error(
        'config is undefined,you can not use this function.you can define token yourself or use anther method to implement. by zwl');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    if (this.config.source) {
      formData.append('source', this.config.source);
    }
    const request = new HttpRequest('POST', this.config.url, formData, {
      withCredentials: true,
      reportProgress: this.config.reportProcess
    });
    return this.httpClient.request(request);
  }

  /**
   * 请求上传文件
   * @param file 文件
   * @param {string} url 服务器地址
   * @param {boolean} reportProcess 是否显示进度
   * @param {string} source 数据源
   * @returns {Observable<HttpEvent<any>>}
   */
  public requestOriginUpload(file: any, url: string, reportProcess: boolean = false, source?: string): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('file', file);
    if (source) {
      formData.append('source', source);
    }
    const request = new HttpRequest('POST', url, formData, {
      withCredentials: true,
      reportProgress: reportProcess
    });
    return this.httpClient.request(request);
  }
}


