import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apiKey = 'https://api.nasa.gov/planetary/apod?api_key=wtbx7AkGJWsprpnvdkCuP9xDyQzjAGpwP7pNXeCX';
  media: { media_type: string; };

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(this.apiKey).subscribe(
      (response: any) => {
        this.media = response;
        // console.log(response);
      }
    );
  }
}
