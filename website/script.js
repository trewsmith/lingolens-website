document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progress-bar");
    const learnMoreBtn = document.getElementById("learn-more-btn");
    const buyNowBtn = document.getElementById("buy-now");
    const wishlistBtn = document.getElementById("add-to-wishlist");
    
    window.addEventListener("scroll", () => {
        let scrollTop = document.documentElement.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercent + "%";
    });
    
    learnMoreBtn.addEventListener("click", () => {
        document.getElementById("product").scrollIntoView({ behavior: "smooth" });
    });
    
    buyNowBtn.addEventListener("click", () => {
        alert("Redirecting to checkout...");
        window.location.href = "checkout.html"; // Placeholder for actual checkout page
    });
    
    wishlistBtn.addEventListener("click", () => {
        alert("Added to Wishlist!");
    });
});