// Set current year in footer
document.getElementById("year").innerText = new Date().getFullYear();

// Smooth scroll to sections
function scrollToId(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Toggle support email dropdown
function toggleSupport() {
  const box = document.getElementById("supportBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

// Copy promo code to clipboard
document.getElementById("copyPromo").addEventListener("click", function(e){
  e.preventDefault();
  const promo = document.getElementById("promoCode").innerText;
  navigator.clipboard.writeText(promo).then(() => {
    alert("Promo code " + promo + " copied! Use it to claim your bonus.");
  });
});