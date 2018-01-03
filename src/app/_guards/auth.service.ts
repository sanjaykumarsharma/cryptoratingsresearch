export class AuthService {
    loggedIn = false;

    isAuthenticated() {
      const promise = new Promise(
        (resolve, reject) => {
          resolve(this.login() );
        }
      );
      return promise;
    }

    login() {
      if (localStorage.getItem('currentUser')) {
        // logged in so return true
        console.log('calling login method');
        console.log(localStorage.getItem('currentUser'));
         return true;
      }else {
        return false;
      }
    }

    logout() {
      this.loggedIn = false;
    }
  }
