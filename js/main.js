const contactForm = document.querySelector(".contact-form");
const contactLink = document.querySelectorAll(".contact");
const about = document.querySelector(".myBio");
const img = document.querySelector(".myprofile-image");

var i=0, text;
text = 'Create a colorful & Interesting Websites', 'what'

     function typing(){
              if(i < text.length){
                        document.querySelector(".profile-bio h3").innerHTML += text.charAt(i);
                        i++;        
      } }

    setInterval(() => {
                  typing();
                }, 90);

  contactLink.forEach((contact)=>{
            contact.addEventListener("click", function(){
                          contactForm.style.transform = "translate(0px)"
                          
              })
  })
  const closeContact = document.querySelector(".btn-close").addEventListener("click", 
  function (){
              contactForm.style.transform = "translate(-450px)"
  })
  about.addEventListener('click', ()=>{
    img.style.display = 'block';
    img.style.transition = 'all 5s ease-in';
  })