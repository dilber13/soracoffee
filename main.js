/* Sora Coffee — tek betik. Derleme adımı yok. */

/* Açık/kapalı göstergesi: Europe/Istanbul saatine göre, 09:00–02:00 (gece yarısını aşar).
   JS yoksa HTML'deki "Her gün 09:00–02:00" metni olduğu gibi kalır. */
(function () {
  var els = document.querySelectorAll('[data-durum]');
  if (!els.length) return;

  function istanbulSaati() {
    try {
      var s = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Istanbul', hour: '2-digit', hourCycle: 'h23'
      }).format(new Date());
      return parseInt(s, 10);
    } catch (e) {
      return null; // saat dilimi desteklenmiyorsa yedek metin kalır
    }
  }

  function guncelle() {
    var saat = istanbulSaati();
    if (saat === null || isNaN(saat)) return;
    var acik = saat >= 9 || saat < 2;
    var metin = acik ? 'Şu an açığız · Gece 2\'ye kadar' : 'Şu an kapalıyız · Sabah 9\'da açıyoruz';
    els.forEach(function (el) {
      el.textContent = '';
      var nokta = document.createElement('span');
      nokta.className = 'durum-nokta';
      nokta.setAttribute('aria-hidden', 'true');
      el.appendChild(nokta);
      el.appendChild(document.createTextNode(metin));
      el.classList.toggle('durum-acik', acik);
      el.classList.toggle('durum-kapali', !acik);
      el.hidden = false;
    });
  }

  guncelle();
  setInterval(guncelle, 60000);
})();

/* Menü ▾ açılır alt menüsü: tıklayınca açılır, Esc kapatır, dışarı tıklayınca
   ya da odak menüden çıkınca kapanır. JS yoksa "Menü" menu.html'e giden bir
   bağlantı olarak kalır ve alt menü üzerine gelince/odakla görünür. */
(function () {
  var li = document.querySelector('.nav-menu');
  if (!li) return;
  var link = li.querySelector(':scope > a');
  var liste = li.querySelector('.alt-menu');
  if (!link || !liste) return;

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'alt-ac';
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', liste.id);
  if (link.hasAttribute('aria-current')) btn.setAttribute('data-gecerli', '');
  btn.innerHTML = link.textContent +
    '<svg viewBox="0 0 10 10" aria-hidden="true" focusable="false">' +
    '<path d="M1 3.5l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';
  li.replaceChild(btn, link);

  function ac(durum) {
    li.classList.toggle('acik', durum);
    btn.setAttribute('aria-expanded', String(durum));
  }
  btn.addEventListener('click', function () {
    ac(btn.getAttribute('aria-expanded') !== 'true');
  });
  li.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && li.classList.contains('acik')) {
      ac(false);
      btn.focus();
    }
  });
  li.addEventListener('focusout', function (e) {
    if (!li.contains(e.relatedTarget)) ac(false);
  });
  document.addEventListener('click', function (e) {
    if (!li.contains(e.target)) ac(false);
  });
})();

/* Bölüm başlığı ve ilk görsel ekrana girince bir kez belirir; 02:00 ışınları
   bir kez doğar. Gizli başlangıç durumu CSS'te yalnızca html.js altında ve
   prefers-reduced-motion: no-preference içinde. IntersectionObserver yoksa ya
   da 2 saniye içinde hiç tetiklenmezse her şey görünür yapılır. */
(function () {
  var hedefler = [];
  document.querySelectorAll('main > section:not(.hero):not(.kisa-sss):not(.sss-sayfa)').forEach(function (bolum) {
    var baslik = bolum.querySelector('h2');
    var gorsel = null;
    bolum.querySelectorAll('figure').forEach(function (f) {
      if (!gorsel && !f.closest('li')) gorsel = f;
    });
    [baslik, gorsel].forEach(function (el) {
      if (el) { el.classList.add('goster'); hedefler.push(el); }
    });
  });
  var isinlar = document.querySelector('.isinlar');
  if (isinlar) hedefler.push(isinlar);

  function goster(el) {
    el.classList.add(el === isinlar ? 'dogdu' : 'gorundu');
  }
  function hepsiniGoster() { hedefler.forEach(goster); }

  if (!('IntersectionObserver' in window)) { hepsiniGoster(); return; }

  var tetiklendi = false;
  var io = new IntersectionObserver(function (girdiler) {
    tetiklendi = true;
    girdiler.forEach(function (g) {
      if (g.isIntersecting) { goster(g.target); io.unobserve(g.target); }
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  hedefler.forEach(function (el) { io.observe(el); });
  setTimeout(function () { if (!tetiklendi) { io.disconnect(); hepsiniGoster(); } }, 2000);
})();
