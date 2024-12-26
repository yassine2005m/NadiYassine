// Add interactivity to the site

document.addEventListener("DOMContentLoaded", () => {
    // Reservation form validation
    const reservationForm = document.querySelector("form[action='/submit_reservation']");

    if (reservationForm) {
        reservationForm.addEventListener("submit", (e) => {
            const date = document.querySelector("#date").value;
            const menu = document.querySelector("#menu").value;

            if (!date || !menu) {
                e.preventDefault();
                alert("Veuillez remplir tous les champs pour réserver.");
            }
        });
    }

    // Payment form validation
    const paymentForm = document.querySelector("form[action='/submit_payment']");

    if (paymentForm) {
        paymentForm.addEventListener("submit", (e) => {
            const amount = document.querySelector("#amount").value;
            const card = document.querySelector("#card").value;

            if (!amount || !card) {
                e.preventDefault();
                alert("Veuillez remplir tous les champs pour effectuer un paiement.");
            } else if (!/^[0-9]{16}$/.test(card)) {
                e.preventDefault();
                alert("Veuillez entrer un numéro de carte valide (16 chiffres).");
            }
        });
    }

    // Command tracking dummy function
    const commandList = document.querySelector("#commandes ul");

    if (commandList) {
        const commands = [
            { id: 1, status: "Confirmée" },
            { id: 2, status: "En préparation" },
            { id: 3, status: "Livrée" },
        ];

        commands.forEach((command) => {
            const li = document.createElement("li");
            li.textContent = `Commande #${command.id} : ${command.status}`;
            commandList.appendChild(li);
        });
    }
    document.addEventListener("DOMContentLoaded", () => {
        // Vérifier si l'utilisateur est connecté
        const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    
        if (!isLoggedIn) {
            // Si l'utilisateur n'est pas connecté, rediriger vers login.html
            window.location.href = "login.html";
        }
    });
    
});
