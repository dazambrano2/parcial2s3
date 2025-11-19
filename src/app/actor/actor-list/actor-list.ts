import { Component, OnInit } from '@angular/core';
import { ActorDTO } from '../actorDTO';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-pais-list',
  templateUrl: './actor-list.html',
  styleUrls: ['./actor-list.css'], 
  standalone: false
})
export class ActorList implements OnInit {
  actores: Array<ActorDTO> = [];
  edadPromedio?: number;
  selected: boolean = false;
  selectedActor!: ActorDTO;


  constructor(private actorService: ActorService) { }

    onSelected(actor: ActorDTO): void {
    this.selected = true;
    this.selectedActor = actor;
    }

  ngOnInit(): void {
    this.actorService.getActores().subscribe((data) => {
    this.actores = data;
    this.computeAverageAge();
    
      });
    };

  private computeAverageAge() {
    const currentYear = 2025; 
    const ages = this.actores
      .map(a => (a.born_year ? currentYear - a.born_year : undefined))
      .filter((v): v is number => typeof v === 'number' && !isNaN(v));
    const mean = ages.reduce((s, v) => s + v, 0) / (ages.length || 1);
    this.edadPromedio = Math.round(mean); 
  }

  }
