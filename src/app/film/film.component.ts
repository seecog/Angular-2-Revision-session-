import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
post : any;
  constructor(private activatedRoute : ActivatedRoute,private httpClient : HttpClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((res)=>{
      console.log('The param is ',res['id'])
this.httpClient.get("https://jsonplaceholder.typicode.com/posts/"+res['id']).subscribe((postRes)=>{
console.log('The post detail is ',postRes);
this.post = postRes;
},
(err)=>{
  console.log('The error is ',err);
}
)
    })
  }

}
