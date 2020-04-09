function initMap() {
  // The location of loc
  var loc = { lat: 43.209572, lng: -71.537292 };
  // The map, centered at loc
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: loc,
  });
  // The marker, positioned at loc
  var marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
