export class DetailsComponent {

  route: ActivatedRoute;
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor(private route: ActivatedRoute) {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

}