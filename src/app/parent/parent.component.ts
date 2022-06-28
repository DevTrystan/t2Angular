import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

fuseauxHoraires: any[] = [
  {
    Pays: 'Europe/Paris',
    Horaire: 'UTC+1'
  },
]
  constructor() { }

  ngOnInit(): void {
  }

  public setTime(Pays: string, Horaire:string): string {
    const date = new Date().toLocaleString('fr-FR', { timeZone:  Pays });
    const time = date.split(' ')[1];
    // Il manque la partie qui permet de mettre l'heure à jour toutes les
   //secondes.
    return time;
   }

}
