(() => {
    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }


    const createExpForm = document.getElementById('Exp-card');
    const createExpFormHandler = async (event) => {
        event.preventDefault();
        const titulo = document.querySelector("#Exp-card input[name='Titulo-exp']").value;
        const lugar = document.querySelector("#Exp-card input[name='Lugar-exp']").value;
        const fecha = document.querySelector("#Exp-card input[name='Fecha-exp']").value;
        const descripcion = document.getElementById('Desc-exp').value;
        const exp1 = document.querySelector("#Exp-card input[name='Exp1']").value;
        const exp2 = document.querySelector("#Exp-card input[name='Exp2']").value;

        if (titulo!="" && lugar!="" && fecha!="" && descripcion!="" && exp1!="" && exp2!="") {
            try {
                await postData('http://localhost:4567/experiencia', { titulo, lugar, fecha, descripcion, exp1, exp2 });            
                alert('Experiencia agregada correctamente.');
                window.location.href = "/frontend/index.html";
            } catch (error) {            
                alert('Error en la petición.');
            }
        } else{
            alert("Campo vacio o invalido")
        }           
    };
    createExpForm.addEventListener('submit', createExpFormHandler);

    const createConoForm = document.getElementById('Cono-card');
    const createConoFormHandler = async (event) => {
        event.preventDefault();
        const cono = document.querySelector("#Cono-card input[name='Cono1']").value;
        console.log(cono);

        if (cono!="") {
            try {
                await postData('http://localhost:4567/conocimiento', { cono });            
                alert('Conocimiento agregado correctamente.');
                window.location.href = "/frontend/index.html";
            } catch (error) {            
                alert('Error en la petición.');
            }
        } else{
            alert("Campo vacio o invalido")
        }            
    };
    createConoForm.addEventListener('submit', createConoFormHandler);

    const createRecoForm = document.getElementById('Reco-card');
    const createRecoFormHandler = async (event) => {
        event.preventDefault();
        const Reco = document.querySelector("#Reco-card input[name='Reco']").value;
        const Cargo = document.querySelector("#Reco-card input[name='Reco-cargo']").value;
        const Descripcion = document.getElementById('Desc-reco').value;

        if (Reco!="" && Cargo!="" && Descripcion!="") {
            try {
                await postData('http://localhost:4567/recomendacion', { Reco, Cargo, Descripcion });            
                alert('Recomendacion agregada correctamente.');
                window.location.href = "/frontend/index.html";
            } catch (error) {            
                alert('Error en la petición.');
            }
        } else{
            alert("Campo vacio o invalido")
        }        
    };
    createRecoForm.addEventListener('submit', createRecoFormHandler);
})();

