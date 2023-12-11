export default class GeolocationService {
  constructor() {
    this.latitude = null;
    this.longitude = null;
  }

  getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            resolve({ latitude: this.latitude, longitude: this.longitude });
          },
          (error) => {
            reject(error.message);
          }
        );
      } else {
        reject("Geolocation is not supported by this browser");
      }
    });
  }
}
