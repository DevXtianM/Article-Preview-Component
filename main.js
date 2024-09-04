const social_modal = document.querySelector(".share");
const author_container = document.querySelector(".container-author");

function loader(){
    console.log("Hello")
    social_modal.style.display = "none";
}


function showSocials(){
    if (social_modal.style.display === "none" || social_modal.style.display === "") {
        // Check if the social modal is currently hidden or not set
        social_modal.style.display = "flex";
        if (window.innerWidth < 640) {
            // For screens narrower than 640px
            author_container.style.display = "none"; // Hide the author container
        } else {
            // For screens wider than 640px
            social_modal.style.position = "absolute"; // Adjust position if needed
            author_container.style.display = "grid"; // Show the author container
            
            const author_social_btn = document.getElementById("SocialShareBtn_author");
            author_social_btn.style.backgroundcolor = "Very-Dark-Grayish-Blue" 

            const sharebtn = document.getElementById("SocialShareBtn");
            sharebtn.remove();
        }
    } else {
        // If the social modal is currently visible
        social_modal.style.display = "none";
        author_container.style.display = "grid"; // Ensure author container is visible
    }
}

function toggleSocials(){
    if (social_modal.style.display === "flex"){
        social_modal.style.display = "none";
        author_container.style.display = "grid";
    }
}