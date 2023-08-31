'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
let resumeLoaded = false; // Variable to track if resume page has been loaded

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        // Check if the page is "resume" and it has already been loaded
        if (pages[i].dataset.page === "resume" && resumeLoaded) {
          pages[i].classList.add("active");
          navigationLinks[i].classList.add("active");
          window.scrollTo(0, 0);
        } else if (pages[i].dataset.page === "resume" && !resumeLoaded) {
          // Show password input using SweetAlert2
          Swal.fire({
            title: "Masukkan Password:",
            input: "password",
            showCancelButton: true,
            confirmButtonText: "Verifikasi",
            cancelButtonText: "Batal",
            allowOutsideClick: false
          }).then((result) => {
            if (result.isConfirmed) {
              const password = result.value;
              // Check if the password is correct
              if (password === "mus@2001") { // Replace "your-password" with the actual password
                resumeLoaded = true; // Mark resume page as loaded
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Access denied",
                  text: "Invalid password"
                });
              }
            }
          });
        } else {
          pages[i].classList.add("active");
          navigationLinks[i].classList.add("active");
          window.scrollTo(0, 0);
        }
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}


// Ambil elemen link kontak
const contactLink = document.getElementById("contact-link");
// Tambahkan variabel untuk melacak status tampilan nomor
let isNumberVisible = false;
// Tambahkan event listener untuk klik
contactLink.addEventListener("click", function(event) {
  event.preventDefault(); // Mencegah perilaku default dari tautan
  if (isNumberVisible) {
    // Jika nomor sudah ditampilkan, langsung arahkan ke link WhatsApp
    window.open("https://wa.me/+6283191914685", "_blank");
  } else {
    // Jika nomor belum ditampilkan, tampilkan dialog permintaan kata sandi menggunakan SweetAlert2
    Swal.fire({
      title: "Masukkan Password",
      input: "password",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Verifikasi",
      cancelButtonText: "Batal",
      showLoaderOnConfirm: true,
      preConfirm: (password) => {
        // Ganti dengan validasi password yang sesuai
        if (password === "mus@2001") {
          // Jika password benar, tampilkan nomor dan ubah status menjadi true
          isNumberVisible = true;
          contactLink.textContent = "0823-6014-6314";
        } else {
          Swal.showValidationMessage("Password salah");
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  }
});
// Ambil elemen link tanggal lahir
const birthdayLink = document.getElementById("birthdayDate");
// Tambahkan event listener untuk klik
birthdayLink.addEventListener("click", function(event) {
  event.preventDefault(); // Mencegah link melakukan aksi default (membuka halaman baru)
  // Tampilkan dialog permintaan kata sandi menggunakan SweetAlert2
  Swal.fire({
    title: "Masukkan Password",
    input: "password",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Verifikasi",
    cancelButtonText: "Batal",
    showLoaderOnConfirm: true,
    preConfirm: (password) => {
      // Ganti dengan validasi password yang sesuai
      if (password === "mus@2001") {
        // Jika password benar, tampilkan tanggal lahir
        const birthdayDate = document.createElement("time");
        birthdayDate.textContent = "26 Maret 2001";
        birthdayLink.parentNode.replaceChild(birthdayDate, birthdayLink);
      } else {
        Swal.showValidationMessage("Password salah");
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var mainContent = document.getElementById('main-content');
  var popup = document.getElementById('popup');
  var userAnswer = document.getElementById('answer');
  var resultMessage = document.getElementById('result');

  // Daftar jawaban yang benar
  var correctAnswers = ['19', '2019', 'stambuk 2019','stambuk19'];

  // Fungsi untuk memeriksa jawaban kuis
  function checkAnswer() {
    var userAnswerValue = userAnswer.value.toLowerCase();

    if (correctAnswers.includes(userAnswerValue)) {
      resultMessage.innerHTML = '<span class="correct-answer">Jawaban Anda benar! Selamat datang di Halaman Utama.</span>';
      popup.style.display = 'none';
      mainContent.style.display = 'block';
      showHiyaaPopup();
      
    } else {
      resultMessage.innerHTML = '<span class="wrong-answer">Jawaban salah. Silakan coba lagi.</span>';
    }
  }

  // Menambahkan event listener untuk mendeteksi tombol "Enter" pada input jawaban
  userAnswer.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default Enter behavior (e.g., submitting the form)
      checkAnswer(); // Panggil fungsi checkAnswer
    }
  });

  // Fungsi untuk menampilkan popup "Hiyaa Kepo"
  function showHiyaaPopup() {
    Swal.fire({
      title: "Hiyaaa Kepo!",
      text: "Mau ngapain?",
      showCancelButton: true,
      confirmButtonText: "Kepo nih",
      cancelButtonText: "Ssst diem",
      icon: "info",
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Waduh, Kepo dianya",
          text: "Yauda yok cari tahu tentang Mustofa",
          icon: "success"
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Oke, diem yaa",
          text: "Pura-pura nggatau aja",
          icon: "info"
        });
      }
    });
  }

    // Memanggil fungsi checkAnswer saat tombol submit ditekan
    document.getElementById('submit').addEventListener('click', checkAnswer);
  });
