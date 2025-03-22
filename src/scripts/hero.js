useEffect(() => {
    const video = document.getElementById("bgVideo");
    if (video) {
        video.play().catch(error => console.log("Autoplay blocked:", error));
    }
}, []);