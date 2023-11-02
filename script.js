particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#F6842A"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#ffff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      }
    },
    "retina_detect": true
  });
  const yearSelect = document.getElementById('year');
        const board2023 = document.getElementById('board-2023'); 
        const board2022 = document.getElementById('board-2022');
        // board2022.style.display = 'none';
        yearSelect.addEventListener('change', () => {
          if(yearSelect.value === '2023') {
            board2023.style.display = 'block';
            board2022.style.display = 'none';
          } else {
            board2023.style.display = 'none';
            board2022.style.display = 'block';
          }
        })