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
