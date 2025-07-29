  (function() {
    emailjs.init("lQb0rUDc0h1WRHwpx"); 
  })();

  const sendBtn = document.querySelector('#sendBtn');
  

  const menuBtn = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const modeBtn = document.getElementById('mode-toggle');
  const fromName = document.getElementById('from-name');
  const replyTo = document.getElementById('reply-to');
  const contactMessage = document.getElementById('contact-message');
  const navContact = document.querySelector("#navContact");
  const navHome = document.querySelector("#navHome");
  const navProject = document.querySelector("#navProject");
//   const navBlog = document.querySelector("#navBlog");
  const contactForm = document.querySelector('#contact-form');
  const accordeonItemHeader = document.querySelector(".accordeonItemHeader");
const accordeonItemBody = document.querySelector(".accordeonItemBody");
  
  
  //event handlers
  accordeonItemHeader.addEventListener('click',(e)=>{
  accordeonItemHeader.innerHTML = (accordeonItemHeader.innerHTML==='⬇️  Обо мне'?'➡️  Обо мне':'⬇️  Обо мне');
  accordeonItemBody.style.display = (accordeonItemBody.style.display==='block'?'none':'block');
});

  navContact.addEventListener('click',(e)=>{
    navLinks.classList.toggle('active');
    contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start"
  });
    })
  navHome.addEventListener('click',(e)=>{
    navLinks.classList.toggle('active');
    })
  navProject.addEventListener('click',(e)=>{
    navLinks.classList.toggle('active');
    })
//   navBlog.addEventListener('click',(e)=>{
//     navLinks.classList.toggle('active');
//     })
replyTo.addEventListener('input',()=>{
    replyTo.style.outline =  ((replyTo.value==='') ? "2px solid var(--accent2)" : "none");
   
})
  sendBtn.addEventListener('click', (e)=>{
    e.preventDefault(); 
    if (replyTo.value !== ''){
        sendEmail();
        fromName.value='';
        contactMessage.value='';
        replyTo.value='';
        replyTo.style.outline = "none";


    }else{
        replyTo.style.outline = "2px solid var(--accent2)";
        replyTo.focus();}});
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  modeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
    function sendEmail() {
        
    emailjs.send("service_2bfys4l", "template_gxedn1q", {
      from_name: fromName.value,
      message: contactMessage.value,
      reply_to: replyTo.value,
      time: new Date().toISOString(),
    }).then(
      response => console.log("SUCCESS!", response.status, response.text),
      error => console.error("FAILED...", error)
    );
  }