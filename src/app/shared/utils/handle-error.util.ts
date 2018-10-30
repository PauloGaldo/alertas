import { HttpErrorResponse } from '@angular/common/http';
import { throwError as throwError } from 'rxjs';

export function HandleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
        console.error(error.error.message);
    } else {
        console.log(error);
    }
    return throwError(error.error.mensaje);
}
