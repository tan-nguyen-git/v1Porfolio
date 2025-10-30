let darkMode = localStorage.getItem('dark-mode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = ()=>{
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'active' );
}

const disableDarkmode = ()=>{
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', null );
}
if(darkMode === 'active')enableDarkmode();



themeSwitch.addEventListener("click", ()=>{
    darkMode = localStorage.getItem('dark-mode');
    darkMode !== "active" ? enableDarkmode() : disableDarkmode();
})