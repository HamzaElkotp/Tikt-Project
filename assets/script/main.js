let burgerIconSide = document.querySelector(".sideMenuIcon")
let sider = document.querySelector(".sideBar")
burgerIconSide?.addEventListener('click', ()=>{
    sider.classList.toggle('active');
})


// ################################################ LOGOUT
let logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener('click', async ()=>{
    try {
        const response = await fetch('/logout', { 
            method: 'POST',
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const data = await response.json();

        } else {
            console.error('Request failed:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Request error:', error);
    }
})