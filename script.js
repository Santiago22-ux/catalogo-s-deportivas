function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const section = document.getElementById(id);
    if(section) section.classList.add('active');
    window.scrollTo(0,0);
}

function seleccionarYPedir(nombre) {
    const inputRef = document.getElementById('refGeneral');
    if(inputRef) inputRef.value = nombre;
    showSection('pedidos');
}

function addRow() {
    const table = document.querySelector("#tablaEquipos tbody");
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td><input type="text" class="nom"></td>
        <td><input type="number" class="num"></td>
        <td><select class="tal"><option>S</option><option>M</option><option>L</option><option>XL</option></select></td>
    `;
}

function enviarWhatsApp() {
    const telefono = "573106614205";
    const ref = document.getElementById("refGeneral").value;
    const filas = document.querySelectorAll("#tablaEquipos tbody tr");
    
    if(!ref) { alert("Por favor escribe la referencia del uniforme"); return; }

    let mensaje = `¡Hola S DEPORTIVAS!%0A*PEDIDO DE EQUIPO*%0A*Modelo:* ${ref}%0A%0A`;
    let count = 0;

    filas.forEach((f) => {
        const n = f.querySelector(".nom").value;
        const num = f.querySelector(".num").value;
        const t = f.querySelector(".tal").value;
        if(n) {
            count++;
            mensaje += `*${count}.* ${n.toUpperCase()} | # ${num} | Talla: ${t}%0A`;
        }
    });

    if(count === 0) { alert("Agrega al menos un jugador a la lista"); return; }
    
    mensaje += `%0A📸 *Nota:* Te adjunto la imagen del diseño.`;
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
}