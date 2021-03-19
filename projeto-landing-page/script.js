const Menu = {

    open() {
        let menu = document.getElementById("menu")

        if(menu.style.display == "flex") {
            Menu.close()
        } else {
            menu.style.display = "flex"
            menu.style.flexDirection = "column"
            menu.innerHTML = `  
                <div class="links">
                    <a onclick="Menu.close()" href="#projects">Projects</a>
                    <a onclick="Menu.close()" href="#sessions">Partners</a>
                    <a onclick="Menu.close()" href="#faq">FAQ</a>
                    <a onclick="Menu.close()" href="#masters">Masters</a>
                    <a onclick="Menu.close()" href="#classes">Classes</a>
                    <a onclick="Menu.close()" href="#course-experience">Course Experience</a>
                    <a onclick="Menu.close()" href="#about-us">About us</a>
                </div>
                <div class="close-btn">
                    <a onclick="Menu.close()" href="#">X Fechar</a>
                </div>
            `
        }   
    },

    close() {
        let menu = document.getElementById("menu")

        menu.style.display = "none"
    },
}
