import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {

  authCheck$ = new Subject<any>();

  constructor(private _authFB : AngularFireAuth, private _router : Router, private _ngZone : NgZone ) { }

  registerWithEmail(auth_details){

    this._authFB.auth.createUserWithEmailAndPassword(auth_details.email, auth_details.password)
    .then((data) => {
      this.checkUserStatus();
      this._router.navigate(['/login']);
    })
  .catch((err) => {
    console.log(err);
  });
}

loginWithEmail(auth_details){
  this._authFB.auth.signInWithEmailAndPassword(auth_details.email, auth_details.password)
  .then((data) => {
    this.checkUserStatus();
    this._router.navigate(['/home']);
  })
  .catch((err) => {
    console.log(err);
  })
}

checkUserStatus(){
  this._authFB.auth.onAuthStateChanged((details) => {
  this.authCheck$.next(details);
    
  })
}
logout(){
  this._authFB.auth.signOut()
  .then(() => {
    this._router.navigate(['/login']);
  });
}
loginWithGoogle(){
  this._ngZone.runOutsideAngular(() => {
    this._authFB.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  .then((data) => {
    console.log(data);
    this.checkUserStatus();
    this._router.navigate(['/home']);
  });

  });
  
}

}
