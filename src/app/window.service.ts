import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class WindowService {

//   constructor() { }
// }

@Injectable()
export class WindowService {

  get windowRef() {
    return window
  }

}