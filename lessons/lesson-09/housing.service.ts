getAllHousingLocations(): HousingLocation[] {
  return this.housingLocationList;
}

getHousingLocationById(id: number): HousingLocation | undefined {
  return this.housingLocationList.find(housingLocation => housingLocation.id === id);
}