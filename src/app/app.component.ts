import { Component } from '@angular/core';  
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';  
import { Observable } from 'rxjs';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent {  
  
  title = 'angular-client';  
  //accessToken: string;  
  Login:boolean
  name:any;
  constructor(private adalService: MsAdalAngular6Service) {  
    if(this.adalService.isAuthenticated == true)
    {
      this.Login = true;
      this.name = this.adalService.userInfo.userName

    }else{
      this.Login = false;
      this.name = '';
    }

  }  
  
  
  login(): void {  
    this.adalService.login(); 
    if(this.adalService.isAuthenticated == true)
    {
      this.Login = true;
      this.name = this.adalService.userInfo.userName
    }

    this.name = this.adalService.userInfo.userName
  }  
  
  logout(): void {  
    this.adalService.logout();  
    this.Login = false;
      this.name = '';
  }  
  
  getLoggedInUser(): any {  
    return this.adalService.LoggedInUserEmail;  
  }  
  
  getAccessToken(): Observable<any> {  
    return this.adalService.acquireToken('backend-api-uri');  
  }  
  
  getToken(): string {  
    return this.adalService.accessToken;  
  }  
}