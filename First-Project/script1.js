        const sidebar = document.querySelector("aside");
        const menuBtn = document.getElementById("menu_bar");
        const closeBtn = document.getElementById("close_btn");
        const themeToggler = document.querySelector(".theme-toggler");
        const lightBtn = themeToggler.querySelector("span:nth-child(1)");
        const darkBtn = themeToggler.querySelector("span:nth-child(2)");

        console.log("Script loaded");
        console.log("Light button:", lightBtn);
        console.log("Dark button:", darkBtn);

        // Menu button functionality
        if (menuBtn) {
          menuBtn.addEventListener("click", () => {
            console.log("Menu clicked");
            sidebar.classList.add("active");
          });
        }

        // Close button functionality
        if (closeBtn) {
          closeBtn.addEventListener("click", () => {
            console.log("Close clicked");
            sidebar.classList.remove("active");
          });
        }

        // Theme toggler - Light mode
        if (lightBtn) {
          lightBtn.addEventListener("click", (e) => {
            console.log("Light mode clicked");
            e.stopPropagation();
            document.body.classList.remove("dark-mode");
            lightBtn.classList.add("active");
            darkBtn.classList.remove("active");
          });
        }

        // Theme toggler - Dark mode
        if (darkBtn) {
          darkBtn.addEventListener("click", (e) => {
            console.log("Dark mode clicked");
            e.stopPropagation();
            document.body.classList.add("dark-mode");
            darkBtn.classList.add("active");
            lightBtn.classList.remove("active");
          });
        }