
function demoVerifyMessage() {

    const dossier = document.getElementById("dossier").value.trim();
    const code = document.getElementById("code").value.trim();

    const result = document.getElementById("result");

    if (!dossier || !code) {

        result.innerHTML = `
            <div class="info-box">
                <div class="info-icon">!</div>

                <p>
                    Veuillez renseigner le numéro de dossier
                    et le code.
                </p>
            </div>
        `;

        return;
    }

    result.innerHTML = `
        <div class="info-box">
            <div class="info-icon">i</div>

            <p>
                Cette interface est une démonstration locale.
                Elle ne vérifie aucun document et ne communique
                avec aucun service officiel.
            </p>
        </div>
    `;
}


function goBack() {
    history.back();
}


function demoVerify() {

    const dossier = document.getElementById("dossier").value.trim();
    const code = document.getElementById("code").value.trim();

    // DONE DEMO
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

    const result = document.getElementById("result");

    if (found) {

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

} else {

    result.innerHTML = `
        <div class="info-box">
            <div class="info-icon">!</div>

            <p>
                Aucun résultat trouvé.
            </p>
        </div>
    `;
    }
    } 
        `;
    }
}
