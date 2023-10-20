export class DetailsComponent {
  route: ActivatedRoute;
  housingLocationId = -1;
  constructor(private route: ActivatedRoute) {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
  }
}