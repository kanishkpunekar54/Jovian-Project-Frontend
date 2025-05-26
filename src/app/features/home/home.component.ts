import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  infoList: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const actorId = localStorage.getItem('actorId');
    if (actorId) {
      this.http.get<any[]>(`http://localhost:5166/api/Infoes/by-actor/${actorId}`)
        .subscribe({
          next: (data) => {
            console.log('Data fetched:', data);
            this.infoList = data;
          },
          error: (err) => { /* handle error */ }
        });
    }
  }

  setCurrentProjectId(id: string) {
    localStorage.setItem('currentProjectId', id);
  }
}
