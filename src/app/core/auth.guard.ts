import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,private router:Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return true;

    // if (this.auth.isSignedInStream) {
    //   console.log("access granted");
    //   return true;
    // }else {
    //   console.log("access denied");
    //   return false;
    // }


    // return this.auth.currentUserObservable
    //   .take(1)
    //   .map(user => !!user)
    //   .do(loggedIn => {
    //     if (!loggedIn) {
    //       console.log("access denied");
    //       this.router.navigate(['/login']);
    //     }
    //   })

  }

}
