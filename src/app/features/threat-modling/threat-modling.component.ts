import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../core/info.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-threat-modling',
  templateUrl: './threat-modling.component.html',
  styleUrls: ['./threat-modling.component.css'],
  imports: [NgIf, NgFor],
  standalone: true
})
export class ThreatModlingComponent implements OnInit {
  threatDetails: any;
  loading = false;
  error = '';

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    const infoId = localStorage.getItem('currentProjectId');
    if (infoId) {
      this.fetchThreatDetails(infoId);
    } else {
      this.error = 'No project selected.';
    }
  }

  fetchThreatDetails(infoId: string) {
    this.loading = true;
    this.infoService.getThreatDetails(infoId).subscribe({
      next: (data) => {
        this.threatDetails = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load threat details';
        this.loading = false;
      }
    });
  }
}
