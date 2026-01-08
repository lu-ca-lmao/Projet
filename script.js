function createFloatingClip(elementId, points) {
    const el = document.getElementById(elementId);
    if (!el) return;

    let targetX = 0, targetY = 0;
    let offsetX = 0, offsetY = 0;

    el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 90;
        targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 90;
    });

    function animate() {
        offsetX += (targetX - offsetX) * 0.08;
        offsetY += (targetY - offsetY) * 0.08;

        // Mise à jour du clip-path
        const polygon = `polygon(
            ${points[0][0] + offsetX * 1.4}% ${points[0][1] + offsetY * 1.4}%,
            ${points[1][0] + offsetX * 1.4}% ${points[1][1] + offsetY * 1.4}%,
            ${points[2][0] + offsetX * 1.4}% ${points[2][1] + offsetY * 1.4}%,
            ${points[3][0] + offsetX * 1.4}% ${points[3][1] + offsetY * 1.4}%
        )`;

        el.style.clipPath = polygon;
        requestAnimationFrame(animate);
    }

    animate();
}

// Initialisation quand la page est chargée
document.addEventListener('DOMContentLoaded', function () {
    // image 1
    createFloatingClip("blueDIV", [[20, 10], [80, 10], [60, 90], [40, 90]]);
    // image 2
    createFloatingClip("redDIV", [[10, 30], [90, 30], [100, 85], [20, 85]]);
    // image 3
    createFloatingClip("greenDIV", [[30, 40], [90, 30], [70, 85], [40, 95]]);
    // image 4
    createFloatingClip("yellowDIV", [[30, 40], [90, 30], [70, 85], [40, 95]]);
    // image 5
    createFloatingClip("blackDIV", [[30, 40], [90, 30], [70, 85], [40, 95]]);
});