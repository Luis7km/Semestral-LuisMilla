(() => {
    const experienciaContainer = document.querySelector('.Exp-dir');
    const getExperiencia = async (event) => {
        const experienciaRaw = await fetch('http://localhost:4567/experiencia');
        const { group } = await experienciaRaw.json();

        group.forEach(({ titulo, lugar, fecha, descripcion, exp1, exp2 }) => {
            const template = `<section class="Exp-card-form">
            <section>
                <a><img src="https://via.placeholder.com/100x100/FFFF00/000000?text=LM"></a>
            </section>
            <section class="Text-content">
                <h2 style="color: black;">${titulo}</h2>
                <div id="Sub-exp">
                    <h3>${lugar}</h3>
                    <h3>${fecha}</h3>
                </div>
                <p class="parrafo">${descripcion}</p>
                <section class="Exp-any">
                    <p class="any-exp">${exp1}</p>
                    <p class="any-exp">${exp2}</p>
                </section>
            </section> 
        </section>`
            experienciaContainer.innerHTML += template;
        });
    };
    window.addEventListener('load', getExperiencia);
    // --------------------------------------------------

    const conocimientoContainer = document.querySelector('.Cono-dir');
    const getConocimientos = async (event) => {
        const conocimientoRaw = await fetch('http://localhost:4567/conocimiento');
        const { group1 } = await conocimientoRaw.json();
        // console.log(group);
        group1.forEach(({ cono1 }) => {
            const template = `<section class="Cono-any">
            <p class="any-cono">${cono1}</p>
        </section>`
            conocimientoContainer.innerHTML += template;
        });
    };
    window.addEventListener('load', getConocimientos);
    // --------------------------------------------------

    const recomendacionesContainer = document.querySelector('.Redo-dir');
    const getRecomendaciones = async (event) => {
        const recomendacionRaw = await fetch('http://localhost:4567/recomendacion');
        const { group2 } = await recomendacionRaw.json();
        console.log(group2);
        group2.forEach(({ recomendador, cargo, descripcion }) => {
            const template = `<section>
                                <section class="Reco-card-form">
                                    <section class="Sub-reco">
                                        <h2 style="color: black;">${recomendador}</h2>
                                        <h3>${cargo}</h3>
                                    </section>
                                    <section>
                                        <a><img src="https://via.placeholder.com/100x100/FFFF00/000000?text=LM"></a>
                                    </section>
                                </section>
                                <section>
                                    <p class="parrafo">${descripcion}</p>
                                </section>
                            </section>`
            recomendacionesContainer.innerHTML += template;
        });
    };
    window.addEventListener('load', getRecomendaciones);

})();