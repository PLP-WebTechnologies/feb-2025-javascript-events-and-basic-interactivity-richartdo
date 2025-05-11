// Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button Clicked!');
  });
  
  document.getElementById('keypressInput').addEventListener('keyup', (e) => {
    console.log('Key pressed:', e.key);
  });
  
  const secretBtn = document.getElementById('secretBtn');
  secretBtn.addEventListener('dblclick', () => alert('Double-click Secret!'));
  
  let holdTimeout;
  secretBtn.addEventListener('mousedown', () => {
    holdTimeout = setTimeout(() => alert('Long press detected!'), 1000);
  });
  secretBtn.addEventListener('mouseup', () => clearTimeout(holdTimeout));
  
  // Interactive Elements
  document.getElementById('changeBtn').addEventListener('click', (e) => {
    e.target.textContent = "Changed!";
    e.target.style.backgroundColor = "coral";
  });
  
  const images = [
    "https://via.placeholder.com/200?text=Image+1",
    "https://via.placeholder.com/200?text=Image+2",
    "https://via.placeholder.com/200?text=Image+3"
  ];
  let currentImg = 0;
  document.getElementById('nextImg').addEventListener('click', () => {
    currentImg = (currentImg + 1) % images.length;
    document.getElementById('galleryImg').src = images[currentImg];
  });
  
  document.querySelectorAll('.tabBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tabContent').forEach(c => c.classList.remove('activeTab'));
      document.getElementById(btn.dataset.tab).classList.add('activeTab');
    });
  });
  
  // Form Validation
  document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('feedback');
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback.textContent = 'Invalid email format';
      return;
    }
  
    if (password.length < 8) {
      feedback.textContent = 'Password must be at least 8 characters';
      return;
    }
  
    feedback.textContent = 'Form submitted successfully!';
  });
  
  // Real-time Feedback
  document.getElementById('password').addEventListener('input', (e) => {
    const feedback = document.getElementById('feedback');
    if (e.target.value.length < 8) {
      feedback.textContent = 'Password too short';
    } else {
      feedback.textContent = 'Password looks good';
    }
  });
  