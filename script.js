setTimeout(function() {
  const splash = document.getElementById('splash-screen');
  const main = document.getElementById('main-content');

  splash.style.transition = 'opacity 1.5s ease';
  splash.style.opacity = '0';

  setTimeout(() => {
    splash.classList.add('hidden');
    main.classList.remove('hidden');
    main.style.opacity = '0';
    main.style.transition = 'opacity 1.5s ease';
    setTimeout(() => main.style.opacity = '1', 50);
  }, 1500);

}, 5000);

//INFO PANEL
const infoBtn = document.getElementById("info-button");
const infoPanel = document.getElementById("info-panel");
const closeInfo = document.getElementById("close-info");

infoBtn.addEventListener("click", () => {
  infoPanel.classList.toggle("show");
});

closeInfo.addEventListener("click", () => {
  infoPanel.classList.remove("show");
});


// IMAGE SWITCH
function removeFilter(image) {
  image.classList.add("noFilter");
}


// IMAGE POSITION - FIXED POSITIONS
function positionImages() {
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
  const isLandscape = window.matchMedia("(orientation: landscape)").matches;
  
  let imageStyles;

    
  // Landscape mode - USE DESKTOP LAYOUT
  if (isLandscape && (isMobile || isTablet)) {
    imageStyles = {
      img1:  { top: '5%',   left: '10%',  rotate: '10deg' },
      img2:  { top: '15%',  right: '5%',  rotate: '-15deg' },
      img3:  { bottom: '8%', left: '40%', rotate: '5deg' },
      img4:  { top: '30%',  right: '60%', rotate: '-5deg' },
      img5:  { top: '50%',  right: '50%', rotate: '-51deg' },
      img6:  { bottom: '20%', left: '60%', rotate: '20deg' },
      img7:  { bottom: '10%', right: '10%', rotate: '-5deg' },
      img8:  { bottom: '10%', left: '40%', rotate: '-5deg' },
      img9:  { top: '10%',  left: '30%', rotate: '-5deg' },
      img10: { bottom: '2%',  right: '1%',  rotate: '-25deg' },
      img11: { bottom: '2%',  left: '0.2%', rotate: '-70deg' },
      img12: { bottom: '1%',  left: '0.5%', rotate: '-30deg', zIndex: 0 }
    };
  }
  
  // Mobile: FIXED CLUSTERED POSITIONS (won't change)
  else if (isMobile) {
    imageStyles = {
      img1:  { top: '3%',   right: '20%',   rotate: '12deg' }, //Bangles
      img2:  { top: '8%',  left: '15%',  rotate: '-8deg' }, //Rose
      img3:  { top: '15%',  left: '45%',  rotate: '-10deg' }, //Glass
      img4:  { top: '17%',  right: '7%', rotate: '-15deg' }, //Bars
      img5:  { top: '25%',  left: '40%',   rotate: '18deg' }, //Coins
      img6:  { top: '55%',  right: '8%',  rotate: '-10deg' }, //Frame
      img7:  { top: '10%',  left: '12%',  rotate: '8deg' }, //Pen
      img8:  { top: '28%',  right: '15%', rotate: '-12deg' }, //Fork
      img9:  { top: '38%',  left: '10%',  rotate: '15deg' }, //Crown
      img10: { top: '56%',  right: '5%',  rotate: '-18deg' }, //Necklace
      img11: { bottom: '10%', left: '8%',   rotate: '10deg' }, //Spoon
      img12: { bottom: '2%', left: '2%', rotate: '-8deg' } //Lamp
    };
  }
  // Tablet - UNCHANGED
  else if (isTablet) {
    imageStyles = {
      img1:  { top: '5%',   left: '8%',   rotate: '8deg' },
      img2:  { top: '15%',  right: '8%',  rotate: '-12deg' },
      img3:  { top: '25%',  left: '35%',  rotate: '4deg' },
      img4:  { top: '35%',  right: '50%', rotate: '-4deg' },
      img5:  { top: '45%',  left: '45%',  rotate: '-30deg' },
      img6:  { bottom: '25%', left: '55%', rotate: '15deg' },
      img7:  { bottom: '15%', right: '12%', rotate: '-4deg' },
      img8:  { bottom: '15%', left: '35%', rotate: '-4deg' },
      img9:  { top: '12%',  left: '28%',  rotate: '-4deg' },
      img10: { bottom: '5%',  right: '5%',  rotate: '-20deg' },
      img11: { bottom: '5%',  left: '2%', rotate: '-50deg' },
      img12: { bottom: '3%',  left: '3%', rotate: '-25deg', zIndex: 0 }
    };
  }
  // Desktop - UNCHANGED
  else {
    imageStyles = {
      img1:  { top: '5%',   left: '10%',  rotate: '10deg' },
      img2:  { top: '16%',  right: '5%',  rotate: '-15deg' },
      img3:  { bottom: '8%', left: '40%', rotate: '5deg' },
      img4:  { top: '30%',  right: '60%', rotate: '-5deg' },
      img5:  { top: '50%',  right: '50%', rotate: '-51deg' },
      img6:  { bottom: '20%', left: '60%', rotate: '20deg' },
      img7:  { bottom: '10%', right: '10%', rotate: '-5deg' },
      img8:  { bottom: '30%', left: '43%', rotate: '-5deg' },
      img9:  { top: '10%',  left: '30%', rotate: '-5deg' },
      img10: { bottom: '2%',  right: '1%',  rotate: '-25deg' },
      img11: { bottom: '2%',  left: '0.2%', rotate: '-70deg' },
      img12: { bottom: '1%',  left: '0.5%', rotate: '-30deg', zIndex: 10 }
    };
  }
  
  // Apply styles
  Object.keys(imageStyles).forEach(className => {
    const el = document.querySelector(`.${className}`);
    if (el) {
      const s = imageStyles[className];
      
      el.style.position = 'absolute';
      el.style.transition = 'transform 0.3s ease';
      el.style.height = 'auto';
      
      el.style.top = 'auto';
      el.style.bottom = 'auto';
      el.style.left = 'auto';
      el.style.right = 'auto';
      
      if (s.top)    el.style.top = s.top;
      if (s.bottom) el.style.bottom = s.bottom;
      if (s.left)   el.style.left = s.left;
      if (s.right)  el.style.right = s.right;
      
      el.style.transform = `rotate(${s.rotate})`;
      el.style.setProperty('--rotate', s.rotate);
      if (s.zIndex !== undefined) el.style.zIndex = s.zIndex;
    }
  });
}

positionImages();
window.addEventListener('resize', positionImages);

/* ===============================
   MORPH MODAL SYSTEM
================================== */

const galleryImages = document.querySelectorAll('.scattered-image');
const morphModal    = document.getElementById('morphModal');
const morphImage    = document.getElementById('morphImage');
const morphTitle    = document.getElementById('modalTitle');
const morphSubtitle = document.getElementById('modalSubtitle');
const morphDescription = document.getElementById('modalDescription');
const closeBtn      = document.querySelector('.close');

galleryImages.forEach(img => {
  if (img.classList.contains('img12')) return; // skip lamp
  img.addEventListener("click", function (e) {
    e.preventDefault();

    const rect = this.getBoundingClientRect();

    // Populate modal content (image hidden to start)
    morphImage.src = this.src;
    morphImage.style.opacity = '0';
    morphTitle.textContent       = this.dataset.title       || "";
    morphSubtitle.textContent    = this.dataset.subtitle    || "";
    morphDescription.textContent = this.dataset.description || "";

    // Show modal (no 'show' yet — just unhide so we can measure)
    morphModal.classList.remove("hidden");
    document.body.classList.add("no-scroll");

    // Let browser render modal so morphImage has a real position
    requestAnimationFrame(() => {
      const targetRect = morphImage.getBoundingClientRect();

      // Create a flying clone starting at the thumbnail's position
      const clone = document.createElement('img');
      clone.src = this.src;
      clone.style.cssText = `
        position: fixed;
        top:    ${rect.top}px;
        left:   ${rect.left}px;
        width:  ${rect.width}px;
        height: ${rect.height}px;
        margin: 0;
        border-radius: 8px;
        object-fit: contain;
        z-index: 99999;
        pointer-events: none;
        transition: all 0.75s cubic-bezier(.22,1,.36,1);
      `;
      document.body.appendChild(clone);

      requestAnimationFrame(() => {
        morphModal.classList.add("show");

        clone.style.top    = targetRect.top    + 'px';
        clone.style.left   = targetRect.left   + 'px';
        clone.style.width  = targetRect.width  + 'px';
        clone.style.height = targetRect.height + 'px';
        clone.style.borderRadius = '12px';

        clone.addEventListener('transitionend', () => {
          morphImage.style.opacity = '1';
          clone.remove();
        }, { once: true });
      });
    });
  });
});

// Close modal
function closeMorph() {
  morphModal.classList.remove("show");
  setTimeout(() => {
    morphModal.classList.add("hidden");
    morphImage.style.opacity = '1'; // reset for next open
  }, 500);
  document.body.classList.remove("no-scroll");
}

closeBtn.addEventListener("click", closeMorph);

morphModal.addEventListener("click", function(e) {
  if (e.target.classList.contains("morph-backdrop")) {
    closeMorph();
  }
});

/* ===============================
   TRIGGER GALLERY
================================== */

const gallery = document.querySelector(".gallery-container");
const images = document.querySelectorAll(".scattered-image");

images.forEach(img => {
  if (img.classList.contains('img12')) return; // skip lamp
  img.addEventListener("click", (e) => {
    e.preventDefault();
    spawnMultiple(img);
  });
});

function spawnMultiple(sourceImg) {

  const amountToSpawn = 3 + Math.floor(Math.random() * 3); 
  // Spawns 3–5 images per click

  const rect = sourceImg.getBoundingClientRect();
  const galleryRect = gallery.getBoundingClientRect();

  const baseTop = rect.top - galleryRect.top;
  const baseLeft = rect.left - galleryRect.left;

  for (let i = 0; i < amountToSpawn; i++) {

    const newImg = document.createElement("img");
    newImg.src = sourceImg.src;

    newImg.classList.add("clone", "scattered-image");

    // Random size (small to large)
   const randomSize = 150 + Math.random() * 300;
    newImg.style.width = randomSize + "px";

    // Spread outward from clicked image
    const offsetX = (Math.random() - 0.5) * 300;
    const offsetY = (Math.random() - 0.5) * 300;

    newImg.style.position = "absolute";
    newImg.style.top = baseTop + offsetY + "px";
    newImg.style.left = baseLeft + offsetX + "px";

    // Slight rotation
    const rotation = (Math.random() - 0.5) * 40;
    newImg.style.transform = `rotate(${rotation}deg) scale(0)`;

    gallery.appendChild(newImg);

    // Animate in
    setTimeout(() => {
      newImg.style.transform = `rotate(${rotation}deg) scale(1)`;
      newImg.style.opacity = "1";
    }, 20);
  }
}
