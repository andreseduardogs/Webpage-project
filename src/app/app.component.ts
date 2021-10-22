import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GoogleSigninService } from './google-signin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Andgit-webpage';

  user!: gapi.auth2.GoogleUser;

  constructor(private signInService: GoogleSigninService, private ref : ChangeDetectorRef){

  }
  ngOnInit(): void {
    this.signInService.observable().subscribe ( user => {
      this.user = user
      this.ref.detectChanges()
    })
  }

  signIn(){
    this.signInService.signIn()
  }
  
  signOut(){
    this.signInService.signOut()
  }
}
