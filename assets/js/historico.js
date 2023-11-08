const historicoReservas = [];
 
    function adicionarReserva() {
      const nome = document.getElementById("room").value;
      const data = document.getElementById("date").value;
      const local = document.getElementById("time").value;
      const reserva = { nome, data, local };
      historicoReservas.push(reserva);
      atualizarListaReservas();
      console.log(`Reserva de ${nome} para ${data} ás ${local} adicionada com sucesso!`);
    }
 
    function listarReservas(nome) {
      const reservasDaPessoa = historicoReservas.filter((reserva) => reserva.nome === nome);
      if (reservasDaPessoa.length > 0) {
        console.log(`Histórico de reservas para ${nome}:`);
        reservasDaPessoa.forEach((reserva) => {
          console.log(`Data: ${reserva.data}, Horário: ${reserva.local}`);
        });
      } else {
        console.log(`${nome} não possui reservas registradas.`);
      }
    }
 
    function atualizarListaReservas() {
      const reservasList = document.getElementById("reservasList");
      reservasList.innerHTML = "";
 
      historicoReservas.forEach((reserva) => {
        const reservaInfo = document.createElement("p");
        reservaInfo.textContent = `Nome: ${reserva.nome}, Data: ${reserva.data}, Horário: ${reserva.local}`;
        reservasList.appendChild(reservaInfo);
      });
    }
 