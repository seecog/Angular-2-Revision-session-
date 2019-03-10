import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

private films : any[];
  constructor(private httpClient :  HttpClient) { }

  ngOnInit() {
    this.httpClient.get("https://jsonplaceholder.typicode.com/posts").subscribe(
      (res : any[])=>{
console.log('The response is ',JSON.stringify(res ));
this.films = res.slice(0,3);
    },
    (err)=>{
      console.log('The error is ',err)
    })
  }

}
