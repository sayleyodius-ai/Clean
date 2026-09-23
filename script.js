function demoVerify() {

    const dossier = document.getElementById("dossier").value.trim();
    const code = document.getElementById("code").value.trim();
    const result = document.getElementById("result");

    // Done DEMO
    const data = [
        {
            dossier: "251006-505544",
            code: "4SSP3AYEG3P3UK2H",
            image: "visa1.jpg"
        },
        {
            dossier: "123456-789",
            code: "ABC123XYZ",
            image: "visa2.jpg"
        }
    ];

    const found = data.find(item =>
        item.dossier === dossier &&
        item.code === code
    );

    // Pa gen dossier/code ki koresponn
    if (!found) {

        result.innerHTML = `
            <div class="info-box">
                <div class="info-icon">!</div>

                <p>
                    Aucun résultat trouvé.
                </p>
            </div>
        `;

        return;
    }

    // Verifye si imaj la egziste VREMAN
    const image = new Image();

    image.onload = function () {

        // Se sèlman si imaj la chaje avèk siksè
        // n ap montre SITUATION Valido
        result.innerHTML = `
            <div class="situation-result">
                <span class="situation-label">
                    SITUATION
                </span>

                <span class="situation-value">
                    Valido
                </span>
            </div>

            <div style="padding:20px">
                <img
                    src="${found.image}"
                    alt="Document DEMO"
                    style="
                        width:100%;
                        border:1px solid #ccc;
                        display:block;
                    "
                >
            </div>
        `;
    };

    image.onerror = function () {

        // Si imaj la pa egziste,
        // PA montre Valido ditou
        result.innerHTML = `
            <div class="info-box">
                <div class="info-icon">!</div>

                <p>
                    Aucun résultat trouvé.
                </p>
            </div>
        `;
    };

    // Kòmanse verifye imaj la
    image.src = found.image;
}
