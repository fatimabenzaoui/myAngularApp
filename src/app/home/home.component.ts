import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apiKey = "https://api.nasa.gov/planetary/apod?api_key=wtbx7AkGJWsprpnvdkCuP9xDyQzjAGpwP7pNXeCX";
  media: { media_type: string; };
  constructor(
    private http : HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(this.apiKey).subscribe(
      (response:any) => {
        this.media = response;
        //console.log(response);
      }
    );
  }

}




// const ApiApodNasa = () => {

//   const [media, setMedia] = useState(null);

//   useEffect(() => {
//     fetchMedia();

//     async function fetchMedia() {
//       const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
//       const res = await fetch(url);
//       const data = await res.json();
//       setMedia(data);
//       console.log(data);
//     }
//   }, []);

//   if (media) {
//     return media;
//   }
