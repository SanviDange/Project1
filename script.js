// FADE ON HOMEPAGE - with error checking
setTimeout(function() {
  const splashScreen = document.getElementById('splash-screen');
  const mainContent = document.getElementById('main-content');
  
  if (splashScreen && mainContent) {
    splashScreen.classList.add('hidden');
    mainContent.classList.remove('hidden');
    mainContent.style.display = 'block';
    document.body.style.overflow = 'auto';
  }
}, 15000);

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
  if (isMobile) {
    imageStyles = {
      img1:  { top: '3%',   right: '20%',   rotate: '12deg' }, //Bangles
      img2:  { top: '8%',  left: '15%',  rotate: '-8deg' }, //Rose
      img3:  { top: '15%',  left: '45%',  rotate: '-10deg' }, //Glass
      img4:  { top: '17%',  right: '7%', rotate: '-15deg' }, //Bars
      img5:  { top: '25%',  left: '40%',   rotate: '18deg' }, //Coins
      img6:  { top: '28%',  right: '8%',  rotate: '-10deg' }, //Frame
      img7:  { top: '10%',  left: '12%',  rotate: '8deg' }, //Pen
      img8:  { top: '28%',  right: '15%', rotate: '-12deg' }, //Fork
      img9:  { top: '88%',  left: '10%',  rotate: '15deg' },
      img10: { top: '98%',  right: '5%',  rotate: '-18deg' },
      img11: { top: '108%', left: '8%',   rotate: '10deg' },
      img12: { top: '118%', right: '10%', rotate: '-8deg' }
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
      if (s.zIndex !== undefined) el.style.zIndex = s.zIndex;
    }
  });
}

positionImages();
window.addEventListener('resize', positionImages);