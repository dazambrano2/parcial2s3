import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actor-detail',
  standalone: false,
  templateUrl: './actor-detail.html',
  styleUrls: ['./actor-detail.css'],
})
export class ActorDetail implements OnInit {
  actorId!: string;
  @Input() actorDetail!: ActorDetail;
  name: any;
  born_year: any;
  country: any;
  genre: any;
  description: any;
  main_award: any;
  img_url: any;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private actorService: ActorService
  ) { }

  getActor() {
    this.actorService.getActor(this.actorId).subscribe(apiData => {
      this.actorDetail = apiData;
    })
  }

  ngOnInit() {
    if (this.actorDetail === undefined) {
      this.actorId= this.route.snapshot.paramMap.get('id')!;
      if (this.actorId) {
        this.getActor();
      }
    }
  }
}
