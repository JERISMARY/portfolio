// script.js — minimal UX enhancements and form handling
document.addEventListener('DOMContentLoaded', ()=>{
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // nav toggle for mobile
  const t = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  t && t.addEventListener('click', ()=>{
    const vis = navList.style.display === 'flex';
    navList.style.display = vis ? 'none' : 'flex';
    navList.style.flexDirection = 'column';
  });

  // contact form — lightweight validation + send to a configured endpoint
  const form = document.getElementById('contactForm');
  form && form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim()
    };
    if(!data.name || !data.email || !data.message){
      alert('Please fill all fields.');
      return;
    }

    // Show a native success flow — replace with real endpoint in production
    try{
      // Example: POST to your serverless endpoint
      // await fetch('/api/contact', {method:'POST', body:JSON.stringify(data), headers:{'Content-Type':'application/json'}})
      form.reset();
      alert('Thanks! Message recorded.');
    }catch(err){
      console.error(err);
      alert('Something went wrong. Try again later.');
    }
  });

  // Download resume action (replace with your resume link)
  const dl = document.getElementById('downloadResume');
  dl && dl.addEventListener('click', ()=>{
    // Replace '#' with your resume file URL
    const resumeUrl = './documents/resume.pdf';

    window.open(resumeUrl, '_blank');
  });
});