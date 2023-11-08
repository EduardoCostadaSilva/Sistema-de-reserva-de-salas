
 function TraduzirEng() {
  let disp = document.getElementById("disp");
  let h2 = document.getElementById("h2");
  let sala1 = document.getElementById("sala1");
  let p1 = document.getElementById("p1");
  let sala2 = document.getElementById("sala2");
  let p2 = document.getElementById("p2");
  let sala3 = document.getElementById("sala3");
  let p3 = document.getElementById("p3");
  let span = document.getElementById("span");
  let span2 = document.getElementById("span2");

   disp.innerHTML = "Availability of Meeting Rooms";
   h2.innerHTML = "Meeting rooms ";
   sala1.innerHTML = "Room 1";
   span.innerHTML = " Available ";
   p1.innerHTML = " This room is suitable for meetings of up to 14 people. Equipped with a large screen TV and whiteboard, is ideal for presentations and group collaboration. Available now";
   sala2.innerHTML = " Room 2";
   span.innerHTML = " Reserved ";
   p2.innerHTML = "This room has capacity for 8 people and is equipped with video conferencing. Reserved for a meeting at 2 p.m. Available after 3pm. ";
   sala3.innerHTML = " Room 3";
   p3.innerHTML = " Room 3 is perfect for small meetings of up to 6 people. It has an incredible view of the city. Available all day.";
   
 
  }
 function TraduzirEsp() {
  let disp = document.getElementById("disp");
  let h2 = document.getElementById("h2");
  let sala1 = document.getElementById("sala1");
  let p1 = document.getElementById("p1");
  let sala2 = document.getElementById("sala2");
  let p2 = document.getElementById("p2");
  let sala3 = document.getElementById("sala3");
  let p3 = document.getElementById("p3");

  disp.innerHTML="Disponibilidad de salas de reuniones";
  h2.innerHTML = "Salas de reuniones";
  sala1.innerHTML = "Sala 1";
  span.innerHTML = "disponible";
  p1.innerHTML = "Esta sala es adecuada para reuniones de hasta 14 personas. Equipado con un televisor de pantalla grande y pizarra, es ideal para presentaciones y colaboración en grupo. Disponible ahora.";
  sala2.innerHTML = "Sala 2 ";
  span2.innerHTML="Reservado";
  p2.innerHTML = "Esta sala tiene capacidad para 8 personas y está equipada con videoconferencia. Reservado para una reunión a las 2 p. m. Disponible después de las 15 h. "
  sala3.innerHTML = "Sala 3 ";
  span.innerHTML= "disponible";
  p3.innerHTML = " La sala 3 es perfecta para pequeñas reuniones de hasta 6 personas. Tiene una vista increíble de la ciudad. Disponible todo el día."
 
}


  const userLanguage = navigator.language || navigator.userLanguage;

  function traduzirSite(idioma) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[idioma][key];
    });
}

traduzirSite(userLanguage);


/* wochpwuoevwvhev 
titulo Meeting rooms
 sala 1(room 1) This room is suitable for meetings of up to 14 people. Equipped with a large screen TV and
 whiteboard, is ideal for presentations and group collaboration. Available now
sala2 This room has capacity for 8 people and is equipped with video conferencing. Reserved for
                        a meeting at 2 p.m. Available after 3pm.
sala3 Room 3 is perfect for small meetings of up to 6 people. It has an incredible view of the
                        city. Available all day.
                        disp Availability of Meeting Rooms

                        






*/ 