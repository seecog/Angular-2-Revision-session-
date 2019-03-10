import { CanActivate } from '@angular/router';


export class AuthGuardService implements CanActivate{



canActivate(){
    return false;
}

}

