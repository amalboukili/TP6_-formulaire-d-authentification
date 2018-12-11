import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { from } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  private login: string;
  private pass: string;
  private isLoggedIn: boolean = false;
  data: any = null;
  constructor(private _http: HttpClient) {
  }

  onSubmit() {
    this._http.get('http://mouradmaach.com/auth.php/' + this.login + '/' + this.pass )
    //.map((res: Response) => res.json())
      .subscibe(data => {
      this.data = data;
      console.log(this.data);
    });
    this.isLoggedIn = this.data.logged;
    }

    logout() {
      this.isLoggedIn = false;
    }
  }
