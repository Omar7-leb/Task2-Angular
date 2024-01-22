import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css'],
})
export class TablePageComponent implements OnInit {
  // Declare a variable to store the API data
  tableData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Make the API request when the component initializes
    this.http.get('https://run.mocky.io/v3/ec762773-24bb-45ad-9360-029fd281dcc8')
      .subscribe((data: any) => {
        this.tableData = data;
      });
  }
}
