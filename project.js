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

  const contactForm = document.querySelector('#contact-form');
const ipBtn = document.querySelector('#ipBtn');  
const ipHeadBtn = document.querySelector('#ipHeadBtn');
const background = document.querySelector('#background');
const output = document.querySelector('#output');
//functions
const getIp = ()=>{
    window.open('http://31.56.240.83:1987', '_blank');
    //если бы сервер был https, работало бы это
    //     fetch('http://31.56.240.83:1987')
    //      .then(response => response.json())
    //      .then(data => {
    //          output.innerHTML=`Ваш IP: ${data.ip}`;
    //          background.style.display = 'flex';
    //            })
    //      .catch(error => {
    //          output.innerHTML=`${error}`;
    //          background.style.display = 'flex';
    //          });



  };
//events handlers
ipHeadBtn.addEventListener('click', getIp );
ipBtn.addEventListener('click', getIp);
  background.addEventListener('click',()=>{
    background.style.display = 'none';
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