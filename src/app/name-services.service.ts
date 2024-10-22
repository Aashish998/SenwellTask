import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameServicesService {
    

  private names : string[]=[
         'Ashish', 
         'Aditya' ,'Aditya',
         'Aman' ,'Aman' , 'Aman',
         'Shubham','Shubham','Shubham','Shubham',
          'Usama', 'Usama', 'Usama', 'Usama', 'Usama',
        'Kunal', 'Kunal','Kunal','Kunal','Kunal','Kunal','Kunal','Kunal','Kunal','Kunal',
        'Rahul', 'Rahul', 'Rahul', 'Rahul', 'Rahul', 'Rahul', 'Rahul', 'Rahul', 'Rahul', 'Rahul', 'Rahul',
        ];

  constructor() { }

    getNames() : Observable<string[]>{
      return of(this.names);
    }
}
