import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {DataService} from "../data.service";
import {Injectable} from "@angular/core";

@Injectable()
export class Userguard implements CanActivate {

  constructor(public service: DataService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const data = this.service.getCachedData();
    const uuid = route.params.uuid;

    let hasFound = false;
    data.results.forEach(user => {
      if (user.login.uuid == uuid) {
        hasFound = true;
      }
    });

    if (hasFound)
      return true;

    return this.router.navigateByUrl('users/notfound');
  }


}
