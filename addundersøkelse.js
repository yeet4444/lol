function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let hasVisitedChessCom = false; // Track if the user has visited Chess.com
let ads = []; // Store all ads
let isSecondClick = false; // Flag to check if the second click has occurred

// Function to apply color change to all ads
function startColorChange() {
  ads.forEach(ad => {
    ad.colorChanging = true;
    setInterval(() => {
      if (ad.colorChanging) {
        ad.style.backgroundColor = getRandomColor();
      }
    }, 500); // Change color every 0.5 seconds
  });
}

function createAd() {
  // Create the ad container
  const adContainer = document.createElement("div");
  adContainer.style.position = "fixed";
  adContainer.style.bottom = `${Math.random() * 80}vh`; // Random vertical position
  adContainer.style.left = `${Math.random() * 80}vw`; // Random horizontal position
  adContainer.style.backgroundColor = getRandomColor(); // Initial random color
  adContainer.style.color = "white";
  adContainer.style.padding = "20px";
  adContainer.style.textAlign = "center";
  adContainer.style.border = "2px solid #000";
  adContainer.style.borderRadius = "10px";
  adContainer.style.boxShadow = "0px 2px 10px rgba(0, 0, 0, 0.5)";
  adContainer.style.width = "250px";
  adContainer.style.cursor = "move";
  adContainer.id = `chessAd-${Math.random()}`;

  let clickCount = 0;

  // Add ad content
  adContainer.innerHTML = `
    <strong>♟️ Join Chess.com!</strong><br>
    Play online chess with millions of players worldwide.<br>
    <a href="https://www.chess.com" target="_blank" style="color: #00ccff; text-decoration: none;" class="chessLink">Click here to start!</a>
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
    clickCount++;

    if (clickCount === 1) {
      // Start changing the color for this ad after the first click
      adContainer.colorChanging = true;
      setInterval(() => {
        if (adContainer.colorChanging) {
          adContainer.style.backgroundColor = getRandomColor();
        }
      }, 500); // Change color every 0.5 seconds
    } else if (clickCount === 2) {
      // After the second click, create 100 new ads
      for (let i = 0; i < 100; i++) {
        createAd(); // Spawn 100 new ads
      }

      // Start color change for all ads after the second click
      startColorChange();
      adContainer.remove(); // Remove the current ad after spawning new ones
    }
  });

  // Append the close button to the ad container
  adContainer.appendChild(closeButton);

  // Add the ad container to the list of ads
  ads.push(adContainer);

  // Add event listener to Chess.com links in all ads (new or old)
  const chessLinks = adContainer.querySelectorAll('.chessLink');
  chessLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Show the "Remove All Ads" button once any Chess.com link is clicked
      createRemoveAllAdsButton();
    });
  });

  // Add the ad container to the body
  document.body.appendChild(adContainer);
}

// Function to create the "Remove All Ads" button
function createRemoveAllAdsButton() {
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove All Ads";
  removeButton.style.position = "fixed";
  removeButton.style.bottom = "20px";
  removeButton.style.left = "50%";
  removeButton.style.transform = "translateX(-50%)";
  removeButton.style.padding = "10px 20px";
  removeButton.style.background = "#ff0000";
  removeButton.style.color = "#fff";
  removeButton.style.border = "none";
  removeButton.style.borderRadius = "5px";
  removeButton.style.cursor = "pointer";
  removeButton.style.zIndex = "1000"; // Ensure the button is on top

  // Event listener for removing all ads
  removeButton.addEventListener("click", () => {
    ads.forEach((ad) => {
      ad.remove(); // Remove each ad
    });
    ads = []; // Clear the ads array
  });

  // Add the "Remove All Ads" button to the body
  document.body.appendChild(removeButton);
}

// Create the first ad
createAd();
