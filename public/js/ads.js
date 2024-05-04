
document.addEventListener('DOMContentLoaded', function () {
    const phads = []

    for (let i = 1; i <= 82; i++) {
        phads.push({
            adid: document.getElementById(`g${i}im`),
            linkid: document.getElementById(`g${i}l`)
        });
    }
    

    const ads = [
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" }, 
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" }, 
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" }, 
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" },
        { link: "https://discord.gg/ZuMrXGvxuD", image: "/imgs/a/72890.png" }
    ];
    

    for (let i = 0; i < phads.length; i++) {
        try {
            let adElement = phads[i].adid;
            let linkElement = phads[i].linkid;
            if (adElement && linkElement) {
                adElement.src = ads[i].image;
                linkElement.href = ads[i].link;
            } else {
                console.log('Element not found for index', i);
            }
        } catch (error) {
            console.log('Error updating ad elements:', error);
        }
    } 
}); 
