import { Component, OnInit } from '@angular/core';
import { NameServicesService } from '../name-services.service';

interface nameCount{
   name :string;
   count : number;
}
@Component({
  selector: 'app-name-check',
  templateUrl: './name-check.component.html',
  styleUrls: ['./name-check.component.css']
})


export class NameCheckComponent implements OnInit {

  nameCounts:nameCount[]=[];
  constructor( private nameService : NameServicesService){

  }
  ngOnInit(): void {
   
    this.nameService.getNames().subscribe(names => {
      const nameMap: { [key: string]: number } = {};

      names.forEach(name => {
        nameMap[name] = (nameMap[name] || 0) + 1;
      });

      this.nameCounts = Object.entries(nameMap).map(([name, count]) => ({ name, count }));
    });


  }
  getRowColor(count: number): string {
    if (count > 0 && count < 3) return 'red';
    if (count >= 3 && count < 10) return 'yellow';
    if (count >= 10) return 'green';
    return '';
  }
  
}
