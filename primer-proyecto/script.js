

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginMsg = document.getElementById('login-msg');
    const loginContainer = document.getElementById('login-container');
    const appContent = document.getElementById('app-content');
    const btnLogout = document.getElementById('btn-logout');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); 

            const usernameInput = document.getElementById('username').value.trim();
            const passwordInput = document.getElementById('password').value.trim();

            
            if (usernameInput !== '' && passwordInput === '') {
                loginMsg.style.color = '#4ade80'; 
                loginMsg.textContent = '¡Acceso concedido! Entrando a Death Beach... 🖤';

                
                setTimeout(() => {
                    loginContainer.style.display = 'none'; 
                    appContent.style.display = 'block';    
                    window.scrollTo(0, 0);                 
                }, 600);

            } else {
                loginMsg.style.color = '#ef4444'; 
                loginMsg.textContent = 'Usuario o contraseña incorrectos. (Prueba: admin / 1234)';
            }
        });
    }

    
    if (btnLogout) {
        btnLogout.addEventListener('click', (event) => {
            event.preventDefault();
            appContent.style.display = 'none';
            loginContainer.style.display = 'flex';
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            loginMsg.textContent = '';
        });
    }
});