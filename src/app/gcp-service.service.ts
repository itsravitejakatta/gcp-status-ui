import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GcpServiceService {
  host: any = "https://5000-dot-7975695-dot-devshell.appspot.com";
  constructor(private http: HttpClient,) { }
  getInstancesList(region,projectid){
    const httpHeaders = new HttpHeaders();
    const headers = httpHeaders.append('Content-Type', 'application/json');
    const url = this.host + '/'+region+"/"+projectid+"/instances";
    console.log(' Provider API URL ===> ' + url);
    this.http
            .get(url, { headers, withCredentials: true })
            .subscribe ((data: Response) =>{
              console.log("Response ===>",Response);
              return Response;
            });
    // return this.http.get(url, { headers, withCredentials: true })
    // .subscribe(return Response);
      // .map((response: HttpResponse<any>) => {
      //   return response;
      // })
      // .catch((error: HttpErrorResponse) => {
      //   var errMessage = error;
      //    return Observable.throw(errMessage);
      // });
  }
}
