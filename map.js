
function initMap() {
    // Cria um objeto do mapa e especifica o elemento de HTML onde será exibido
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -23.5475, lng: -46.6361 },
      zoom: 15,
    });
  
    // Verifica se o navegador tem suporte a geolocalização
    if (navigator.geolocation) {
      // Obtém a localização atual do usuário
      navigator.geolocation.getCurrentPosition(function(position) {
        // Cria um marcador na localização atual do usuário
        const marker = new google.maps.Marker({
          position: { lat: position.coords.latitude, lng: position.coords.longitude },
          map: map,
          title: "Sua localização",
        });
  
        // Centraliza o mapa na localização atual do usuário
        map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
      });
    } else {
      // Caso o navegador não tenha suporte a geolocalização, exibe uma mensagem de erro
      alert("Seu navegador não suporta geolocalização.");
    }
  }

  var map, infoWindow;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 18
    });
    infoWindow = new google.maps.InfoWindow();
  
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
  
        infoWindow.setPosition(pos);
        infoWindow.setContent('Minha localização');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }
  
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Erro: O serviço de geolocalização falhou.' :
                          'Erro: Seu navegador não suporta geolocalização.');
    infoWindow.open(map);
  }
  