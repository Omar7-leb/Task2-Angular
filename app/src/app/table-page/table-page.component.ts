import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css'],
})
export class TablePageComponent implements OnInit {
  tableData: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Make the API request when the component initializes
    this.http.get('https://run.mocky.io/v3/ec762773-24bb-45ad-9360-029fd281dcc8')
      .subscribe((data: any) => {
        this.tableData = data;
      });
  }

  navigateToRowInfo(id: number):void {
    this.router.navigate(['/row-info' , id]);
  }
}
