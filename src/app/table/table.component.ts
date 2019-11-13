import { Component, OnInit } from '@angular/core';
import { HofEntry } from '../interfaces/hof-entry';
import { HofDataService } from '../services/hof-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  entries: HofEntry[] = [];

  constructor(private hofData: HofDataService) {}

  ngOnInit() {
    this.hofData.getData().subscribe(data => (this.entries = data.complete));
  }
}
