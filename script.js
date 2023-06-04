console.log("script running...")
document.querySelector('.cro').style.display = 'none';
document.querySelector('.ham').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ha').style.display = 'inline'
        document.querySelector('.cro').style.display = 'none'
    }
    else {
        document.querySelector('.ha').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cro').style.display = 'inline'

        }, 350);

   } })
