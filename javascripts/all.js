const sidebarBtn = document.querySelector('#sidebar-btn');
const body = document.querySelector('body');

sidebarBtn.addEventListener('click', (e)=> {
    // console.log(e)
    e.preventDefault();
    body.classList.toggle('sidebar-toggled');
});
