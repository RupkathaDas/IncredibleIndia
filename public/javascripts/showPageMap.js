
  
mapboxgl.accessToken = 'pk.eyJ1IjoicnVwa2F0aGEiLCJhIjoiY2twb3p4emJ6MHI1aTJ1bnVveHM5d2xwbiJ9.asXkbFZOzUyI-CaSZ9jWnw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 10 // starting zoom
});

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campground.title}</h3><p>${campground.location}</p>`
            )
    )
    .addTo(map)