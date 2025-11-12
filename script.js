let currentColor = '#FFFFFF';

function generateColor() {
    // Génerer une couleur hexadecimale
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).toUpperCase();
    applyColor(randomColor);
}

function generateRandomColor(){
    // Version plus aléatoire
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    applyColor(color);
}

function applyColor(color) {
    currentColor = color;
    document.body.style.backgroundColor = color;
    document.getElementById('colorBox').style.backgroundColor = color;
    document.getElementById('colorCode').textContent = color;
}

function copyColor() {
    navigator.clipboard.writeText(currentColor).then(() => {
        const message = document.getElementById('copiedMessage');
        message.style.display = 'block';
        setTimeout(() => {
            message.style.diplay = 'none';
        }, 1000);
    }).catch(err => {
        console.error('Erreur de copie :',err);
    });
}

// Génère une couleur au chargement
generateRandomColor();