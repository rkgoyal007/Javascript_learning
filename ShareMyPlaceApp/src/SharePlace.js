class PlaceFinder{
    constructor(){
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');

        locateUserBtn.addEventListener('click',this.locateUserHandler);
        addressForm.addEventListener('submit',this.findAddressHandler);
    }

    locateUserHandler(){
        if(!navigator.geolocation){
            alert(' Location feature is not available in your browser - please use a more morden Browser or manually enter an address.');
            return;
        }
        navigator.geolocation.getCurrentPosition(succressResult =>{
            const coordinates = {
                lat: succressResult.coords.latitude + Math.random() * 50,
                lng: succressResult.coords.longitude + Math.random() * 50
            };
            console.log(coordinates);
        }, error =>{
            alert('Could not locate you unfortunately. please enter an address manually');
        });
    }

    findAddressHandler(){

    }
} 

const placeFinder = new PlaceFinder();