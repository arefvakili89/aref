const typedhome = new Typed("#home-typed", {
  strings: ["Web Developer", "Free Lanser", "SEO WebSite"],
  typeSpeed: 50,
  backspeed: 2,
  backdelay: 20,
  loop: true,
  cursorChar: "_",
  
});


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  {
    threshold: 0.7 // وقتی 30٪ دیده شد
  }
);

document.querySelectorAll('.progress').forEach(el => {
  observer.observe(el);
});






(function () {
  emailjs.init("UOdifAakGgqH3jv5H");
})();

const form = document.getElementById("contact-form");
const messageBox = document.getElementById("contact-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // پاک کردن پیام قبلی
  messageBox.textContent = "";

  emailjs.sendForm(
    "service_945t7mf",
    "template_uriilou",
    this
  )


  .then(() => {
    messageBox.textContent = " Message send successfully ✅";
    form.reset();
    setTimeout(() => {
  messageBox.textContent = "";
}, 5000);
  })
  .catch(() => {
    messageBox.textContent = " message not send ❌";
  });

});


// .................emailjs.........
// const contactform = document.getElementById('contact-form'),
//       contactmessage = document.getElementById('contact-message')
// // emailjs.init("UOdifAakGgqH3jv5H");

// const sendemail = (e) => {
//   e.preventDefault();
// }

//  emailjs.sendform ( 'service_945t7mf', 'template_uriilou', ' #contact-form' , 'UOdifAakGgqH3jv5H') .then
//   (response) => {
//   console.log('SUCCESS!', response.status, response.text);
// },

// (error) => {
//   console.log('FAILED...', error);
// }

//     .then (()=>{

//       contactmessage.textcontent = 'Message send successfully'
// })
// setTimeout(() => {
//   contactmessage.textContent = "";
// }, 5000);

// contactform.reset();
//     },
//     () => {
//       contactmessage.textContent = "message not send";
//     }
//   );
// };
// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("contact-form").addEventListener("submit", sendEmail);
// });

// contactform.addEventListener('submit',sendemail)
// / ...... ...emailjs...
// const  contactform = document.getElementById("contact-form")

// emailjs.sendForm('service_945t7mf', 'template_uriilou', 'contact-form')
// .then(
//   function (response) {
//     console.log('SUCCESS!', response.status, response.text);
//   },
//   function (err) {
//     console.log('FAILED...', err);
//   },
// );
// ..... ... ... emailjs  ...,,,,,,,,,,,,,,

// function sendemail() {
//   let form = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     subject: document.getElementById("subject").value,
//   };
//   emailjs.send("service_945t7mf", "template_uriilou", form).then(alert("email send!!!!"));
// }

// emailjs.init("UOdifAakGgqH3jv5H");

// const sendEmail = async (event) => {
//   event.preventDefault();

//   const form = event.target;

//   try {
//     const response = await emailjs.sendForm("service_945t7mf", "template_uriilou", form);
//     console.log("Email sent successfully!", response);
//   } catch (error) {
//     console.error("Failed to send email:", error);
//   }
// };

// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("contact-form").addEventListener("submit", sendEmail);
// });

// ........ first site reload .............

window.onload = function () {
  // اگر URL هش داشت
  if (window.location.hash) {

    // حذف هش از آدرس بدون رفرش دوباره
    history.replaceState(null, null, window.location.pathname);

    // بردن اسکرول به بالا
    window.scrollTo(0, 0);
  }
};

// ................. close menu ..............
  const navbarCollapse = document.getElementById('navbarNavAltMarkup');
  const navbarToggle = document.querySelector('.navbar-toggler');

  // بستن منو بعد از کلیک روی لینک‌های منو یا هرجای صفحه
  document.addEventListener('click', function (e) {
    // اگر روی دکمه همبرگر یا منو کلیک شد، کاری نکن
    if (navbarToggle.contains(e.target) || navbarCollapse.contains(e.target)) {
      return;
    }

    // بستن منو
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });
    bsCollapse.hide();
  });

  // بستن منو بعد از کلیک روی هر لینک منو
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    });
  });