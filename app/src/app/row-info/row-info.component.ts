import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-row-info',
  templateUrl: './row-info.component.html',
  styleUrl: './row-info.component.css'
})
export class RowInfoComponent implements OnInit {
  @Input() id: string = '';
  rowData: any;

  constructor(private http: HttpClient , private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
    this.http.get(`https://run.mocky.io/v3/${this.id}`)
      .subscribe((data: any) => {
        this.rowData = data; 
  });

  });

}
}