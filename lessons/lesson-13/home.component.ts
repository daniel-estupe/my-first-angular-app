filteredLocationList: HousingLocation[] = [];

constructor() {
  this.housingLocationList = this.housingService.getAllHousingLocations();
  this.filteredLocationList = this.housingLocationList;
}

filterResults(text: string) {
  if (!text) {
    this.filteredLocationList = this.housingLocationList;
  }

  this.filteredLocationList = this.housingLocationList.filter(
    housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
  );
}