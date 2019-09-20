import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class GuestService {
  public token: string;

  constructor(private http: HttpClient) {}

  private url = "http://localhost:3000/guests";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "my-auth-token"
    })
  };

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend retornou o código ${error.status}, ` +
          `body do retorno: ${error.error}`
      );
    }
    return throwError("Algo de errado aconteceu. Tente novamente.");
  }

  sendGuestsToApi(guests: Object): Observable<Object> {
    return this.http
      .post<Object>(this.url, guests, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
