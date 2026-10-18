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

  function goster(el) {
    el.classList.add('gorundu');
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

/* Telefon/tablet menüsü (1100px altı): tam ekran krem panel. Açıkken sayfanın
   geri kalanı inert olur, Esc kapatır ve odak düğmeye döner. JS yoksa
   bağlantılar başlıkta satırlara sarılmış olarak görünür. */
(function () {
  var ust = document.querySelector('.ust');
  var nav = document.getElementById('ana-nav');
  if (!ust || !nav) return;
  var kok = document.documentElement;
  var genis = window.matchMedia('(min-width: 1101px)');

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'menu-ac';
  btn.setAttribute('aria-controls', 'ana-nav');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-label', 'Menüyü aç');
  btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<g class="ac"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></g>' +
    '<g class="kapat"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></g></svg>';
  ust.appendChild(btn);

  var arka = document.querySelectorAll('main, .alt, .eylem-cubugu, .atla');

  function ayarla(acik) {
    kok.classList.toggle('menu-acik', acik);
    btn.setAttribute('aria-expanded', String(acik));
    btn.setAttribute('aria-label', acik ? 'Menüyü kapat' : 'Menüyü aç');
    arka.forEach(function (el) { el.inert = acik; });
  }

  btn.addEventListener('click', function () {
    var acik = !kok.classList.contains('menu-acik');
    ayarla(acik);
    if (acik) { var ilk = nav.querySelector('a, button'); if (ilk) ilk.focus(); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && kok.classList.contains('menu-acik') && !nav.querySelector('.nav-menu.acik')) {
      ayarla(false);
      btn.focus();
    }
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a') && kok.classList.contains('menu-acik')) ayarla(false);
  });
  genis.addEventListener('change', function (e) { if (e.matches) ayarla(false); });
})();

/* Harita yalnızca istek üzerine: "Haritayı göster"e basılana kadar Google'a
   bağlanılmaz, çerez bırakılmaz. JS yoksa "Google Haritalar'da aç" bağlantısı kalır. */
(function () {
  document.querySelectorAll('[data-harita]').forEach(function (kutu) {
    var btn = kutu.querySelector('.harita-ac');
    if (!btn) return;
    btn.hidden = false;
    btn.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = kutu.getAttribute('data-harita');
      f.title = "Sora Coffee'nin haritadaki yeri";
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      kutu.textContent = '';
      kutu.appendChild(f);
      kutu.classList.add('yuklendi');
      f.setAttribute('tabindex', '0');
      f.focus();
    });
  });
})();
