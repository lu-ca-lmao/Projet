        // Fonctionnalité du bouton like
    function setupLikeButtons() {
        // Initialiser les compteurs depuis le localStorage
        let likes1 = localStorage.getItem('likeCount1') || 0;
    let likes2 = localStorage.getItem('likeCount2') || 0;
    let likes3 = localStorage.getItem('likeCount3') || 0;

    document.getElementById('likeCount1').textContent = likes1;
    document.getElementById('likeCount2').textContent = likes2;
    document.getElementById('likeCount3').textContent = likes3;

    // Mettre à jour le total
    updateTotalLikes();

    // Configurer les boutons
    document.getElementById('likeBtn1').addEventListener('click', function () {
        let current = parseInt(document.getElementById('likeCount1').textContent);
    current++;
    document.getElementById('likeCount1').textContent = current;
    localStorage.setItem('likeCount1', current);
    updateTotalLikes();
    animateLike(this);
            });

    document.getElementById('likeBtn2').addEventListener('click', function () {
        let current = parseInt(document.getElementById('likeCount2').textContent);
    current++;
    document.getElementById('likeCount2').textContent = current;
    localStorage.setItem('likeCount2', current);
    updateTotalLikes();
    animateLike(this);
            });

    document.getElementById('likeBtn3').addEventListener('click', function () {
        let current = parseInt(document.getElementById('likeCount3').textContent);
    current++;
    document.getElementById('likeCount3').textContent = current;
    localStorage.setItem('likeCount3', current);
    updateTotalLikes();
    animateLike(this);
            });
        }

    // Mettre à jour le total des likes
    function updateTotalLikes() {
        let likes1 = parseInt(document.getElementById('likeCount1').textContent) || 0;
    let likes2 = parseInt(document.getElementById('likeCount2').textContent) || 0;
    let likes3 = parseInt(document.getElementById('likeCount3').textContent) || 0;

    let total = likes1 + likes2 + likes3;
    document.getElementById('totalLikes').textContent = total;
        }

    // Animation pour les boutons like
    function animateLike(button) {
        button.style.transform = 'scale(1.2)';
    button.style.backgroundColor = '#ff6b6b';

            setTimeout(() => {
        button.style.transform = 'scale(1)';
    button.style.backgroundColor = '#4ecdc4';
            }, 300);
        }

    // Basculer entre mode sombre et clair
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

    // Changer l'icône
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
    this.style.backgroundColor = '#ff6b6b';
            } else {
        icon.className = 'fas fa-moon';
    this.style.backgroundColor = '#333';
            }

    // Sauvegarder la préférence
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });

    // Charger la préférence de thème
    function loadThemePreference() {
            const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
    const icon = themeToggle.querySelector('i');
    icon.className = 'fas fa-sun';
    themeToggle.style.backgroundColor = '#ff6b6b';
            }
        }

    // Partage du fanzine
    document.getElementById('shareBtn').addEventListener('click', function () {
            if (navigator.share) {
        navigator.share({
            title: 'Fanzine One-Pager',
            text: 'Découvrez ce fanzine one-pager créé avec HTML, CSS et JS!',
            url: window.location.href,
        })
            .then(() => console.log('Partage réussi'))
            .catch((error) => console.log('Erreur de partage', error));
            } else {
        // Fallback pour les navigateurs qui ne supportent pas l'API Web Share
        alert('Copiez le lien pour partager ce fanzine: ' + window.location.href);
            }
        });

        // Animation de défilement fluide pour les ancres
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
        });

    // Initialisation au chargement de la page
    document.addEventListener('DOMContentLoaded', function () {
        setupLikeButtons();
    loadThemePreference();
        });