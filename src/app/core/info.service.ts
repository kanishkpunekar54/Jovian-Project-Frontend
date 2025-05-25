import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InfoService {
    private apiUrl = 'http://localhost:5166/api/Infoes';

    constructor(private http: HttpClient) { }

    getThreatDetails(infoId: string): Observable<any> {
        return this.http.get(`${this.apiUrl}/threat-details/${infoId}`);
    }
}