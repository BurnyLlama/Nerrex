  function showHome() {
    document.getElementById('home').style.cssText = "border-bottom: 3px solid #4D395C;";
    document.getElementById('faq').style.cssText = "border-bottom: 0;";
    document.getElementById('contact').style.cssText = "border-bottom: 0;";
    document.getElementById('gp').style.cssText = "border-bottom: 0;";
    document.querySelector('.home').style.cssText = "display: ;";
    document.querySelector('.faq').style.cssText = "display: none;";
    document.querySelector('.contact').style.cssText = "display: none;";
    document.querySelector('.gp').style.cssText = "display: none;";
  };
  function showFAQ() {
    document.getElementById('home').style.cssText = "border-bottom: 0;";
    document.getElementById('faq').style.cssText = "border-bottom: 3px solid #4D395C;";
    document.getElementById('contact').style.cssText = "border-bottom: 0;";
    document.getElementById('gp').style.cssText = "border-bottom: 0;";
    document.querySelector('.home').style.cssText = "display: none;";
    document.querySelector('.faq').style.cssText = "display: ;";
    document.querySelector('.contact').style.cssText = "display: none;";
    document.querySelector('.gp').style.cssText = "display: none;";
  };
  function showContact() {
    document.getElementById('home').style.cssText = "border-bottom: 0;";
    document.getElementById('faq').style.cssText = "border-bottom: 0;";
    document.getElementById('contact').style.cssText = "border-bottom: 3px solid #4D395C;";
    document.getElementById('gp').style.cssText = "border-bottom: 0;";
    document.querySelector('.home').style.cssText = "display: none;";
    document.querySelector('.faq').style.cssText = "display: none;";
    document.querySelector('.contact').style.cssText = "display: ;";
    document.querySelector('.gp').style.cssText = "display: none;";
  };
  function showGP() {
    document.getElementById('home').style.cssText = "border-bottom: 0;";
    document.getElementById('faq').style.cssText = "border-bottom: 0;";
    document.getElementById('contact').style.cssText = "border-bottom: 0;";
    document.getElementById('gp').style.cssText = "border-bottom: 3px solid #4D395C;";
    document.querySelector('.home').style.cssText = "display: none;";
    document.querySelector('.faq').style.cssText = "display: none;";
    document.querySelector('.contact').style.cssText = "display: none;";
    document.querySelector('.gp').style.cssText = "display: ;";
  };
