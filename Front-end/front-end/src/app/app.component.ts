import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'diary-app-frontend';
  stories: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadStories();
  }

  // Function to fetch stories from the backend
  loadStories(): void {
    this.http.get('http://localhost:3000/stories').subscribe(
      (data: any) => {
        this.stories = data;
      },
      error => {
        console.error('Error fetching stories:', error);
      }
    );
  }
}
