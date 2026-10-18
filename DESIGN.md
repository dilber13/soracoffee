# SORA COFFEE — TASARIM YÖNÜ

> Bu dosya sitenin tek doğru kaynağıdır. Her biçimlendirme kararı buna göre
> verilir. Metin aşağıda sahibinin yazdığı haliyle, değiştirilmeden tutulur.

## FİKİR
"Kemerli bir pencereden gökyüzü": logodaki kemer formu ve güneş ışınları
sitenin tek görsel dili olur; ilk bakışta sakin ve aydınlık, aşağı indikçe
akşama ve geceye döner (02:00'ye kadar açık). Okul yanında oturup kalınan,
geç saate kadar açık bir kafe için doğru: gündüz ferahlığı + gece sıcaklığı.

## TİPOGRAFİ
- Display: Instrument Serif (Regular + Italic). Yedek: "Iowan Old Style",
  Georgia, serif. Dar ve zarif bir serif; kocaman puntoda kaba değil, ince
  durur ve logodaki geniş sans "SORA" ile karşıtlık kurar.
- Metin: Figtree. Yedek: system-ui, -apple-system, "Segoe UI", sans-serif.
  Türkçe karakterlerin (ğ ş ı İ ç ö ü) ikisinde de tam olduğunu kontrol et.
- Kesitler: Figtree 400 = gövde, SSS cevapları, menü açıklamaları, alt
  yazılar. Figtree 600 = tek vurgu kesiti: buton etiketleri, menü kalem
  adları, navigasyon, açık/kapalı göstergesi. 700+ hiç kullanılmaz.
- Display yalnızca: h1, bölüm başlıkları (h2), "02:00" rakamı ve menü
  sayfasında kategori başlıkları. Gövde, buton, etiket, nav, fiyat satırı,
  alt yazı ASLA display değil. Metin öğelerinin en fazla 1/6'sı display.
- Sayılar (masaüstü / telefon):
  h1: 104px / 68px — satır yüksekliği 0,95 — harf aralığı -0,01em
  (telefon değeri 56px'ten 68px'e çıkarıldı: başlık gövdenin en az 4 katı olsun)
  h2: 60px / 38px — satır yüksekliği 1,0
  h3 (Figtree 600): 22px / 20px — satır yüksekliği 1,3
  Gövde: 18px / 17px — satır yüksekliği 1,6
  Alt yazı / etiket: 15px / 15px — satır yüksekliği 1,4
  "02:00" rakamı: 240px / 120px — satır yüksekliği 0,9
  Oranlar: h1/gövde masaüstünde 5,8×, telefonda 4,0×.
- Satır uzunluğu: gövde max-width 66ch (aralık 50–75).
- Site tek dil (Türkçe). Dil değiştirici yok.

## RENK (WCAG kontrastları ölçüldü)
- Krem #F6EBDD — ana zemin (logonun zemini).
- Espresso #2A1C13 — tüm metin; ters bölümün zemini.
  Espresso / krem = 14,0:1.
- Terrakota #A3442A — birincil buton zemini, vurgu bant, linkler.
  Krem metin / terrakota = 5,2:1. Terrakota metin / krem = 5,2:1.
- Karamel #B08656 — logo rengi; sadece çizgiler, ışın çizimi, kemer
  çerçeveleri ve koyu zemin üstünde metin (karamel / espresso = 5,0:1).
  Krem üstünde metin olarak YASAK (2,8:1, geçmez). Krem üstünde küçük
  karamel metin gerekiyorsa koyu ton #8A6235 kullan (4,6:1).
- Hardal #D19A3E — yalnızca koyu bölümde: "02:00" rakamı ve küçük vurgular.
  Hardal / espresso = 6,6:1. Krem zeminde metin olarak kullanılmaz.
- Gri metin yok. İkincil metin = espresso, %100 opak, sadece puntosu küçük.

## BOŞLUK VE DOKUNMA
- Bölüm aralığı: 128px masaüstü / 72px telefon.
- Kenar boşluğu: 24px telefon / 48px tablet / içerik max 1200px, ortada.
- Dokunulabilir her şey en az 48px yükseklik, aralarında en az 8px.
- Birincil eylem = "Yol tarifi al" (Google Haritalar). Terrakota zemin, krem
  Figtree 600 18px, 56px yükseklik, köşe yarıçapı 28px (hap).
  İkincil = "Ara: 0552 731 23 30", tel:+905527312330 bağlantısı, espresso 1.5px
  kenarlıklı, aynı yükseklik.
- Telefonda: ekranın altına sabit eylem çubuğu, 64px + güvenli alan
  (env(safe-area-inset-bottom)). Üç eşit dokunuş alanı, çizgi ikon + etiket:
  Yol Tarifi (terrakota zemin, en solda değil ORTADA ve geniş: %50) · Ara ·
  Instagram. Kaydırınca hep görünür; footer'a gelince footer'ın üstünde kalır,
  içeriği örtmemesi için body'ye alt dolgu ver.
- Masaüstünde: üst başlık sabit (72px), sağda "Yol tarifi al" butonu hep orada.
- Navigasyon: Ana Sayfa · Menü ▾ · Mekan · Hakkımızda · İletişim.
  "Menü" açılır alt menüsü: Sıcak Kahveler, Özel Kahveler, Soğuk İçecekler,
  Tatlılar. Masaüstünde tıklayınca açılır (sadece hover değil), klavyeyle
  gezilebilir. Telefonda tam ekran krem menü, her satır 56px, Menü satırına
  dokununca alt kalemler yerinde açılır. Menünün altında saat ve adres yazar.

## SAYFALAR (sıra)
- Ana Sayfa: Hero → açık/kapalı + adres şeridi → kenardan kenara mekan
  şeridi → "Neden biz" → San Sebastian vurgusu (ters: espresso zemin) →
  kısa SSS (4 soru) → iletişim şeridi → footer.
- Menü: kategoriler; Pumpkin Spice Özel Kahveler tablosunda (ayrı sezonluk
  bölüm yok, sahibin isteği).
  Fiyat yerine "Fiyat için sorunuz", sağa hizalı, Figtree 400.
- Mekan: kenardan kenara dikdörtgen bant (uzun masa) + altında 2×2 kare
  ızgara (cam kenarı, teras, tezgah, giriş). Alt yazı yok.
  Vitrin fotoğrafı sitenin hiçbir yerinde kullanılmaz.
- Hakkımızda: kurucu ortaklar Yasin Nalbant ve Burak Eren Pancaroğlu'nun portreleri + metin. Barista alanı boş bırakılmaz;
  isimler gelene kadar bu blok yayında yok.
- İletişim: adres metin olarak, gömülü harita, saatler cümle olarak, telefon.
- Her sayfada aynı footer: ad, adres, telefon, saatler, Instagram.

## ÖLÇEK — EN BÜYÜK ŞEY
- Sitenin akılda kalan öğesi: ters bölümdeki dev "02:00" rakamı (240px /
  120px, Instrument Serif, hardal, espresso zemin). Yanında küçük Figtree
  metin: "Her gün sabah 9'dan gece 2'ye kadar. Sınav haftasında da."

## KENARDAN KENARA AN
- Ana sayfada mekan şeridi: üç fotoğraf yan yana, ekranın tam genişliğinde,
  aralarında 4px krem boşluk, yükseklik 420px / telefonda yatay kaydırılabilir
  şerit (dokunmayla, otomatik oynamaz), her fotoğraf 78vw genişlikte.
- Ayrıca İletişim'den önce tam genişlik terrakota bant: krem renkte
  "Zeliha Tolunay Yüksekokulu'nun yanı. Okuldan 1 dakika." + Yol tarifi butonu
  (bu bantta buton krem zemin, terrakota metin; kontrast 5,2:1).

## TERS BÖLÜM
- "02:00" bölümü espresso #2A1C13 zemin, krem metin, hardal rakam, karamel
  çizgilerle çizilmiş ince güneş ışınları köşeden taşar.
- Footer da espresso zemin; ikisi arasında krem bölüm olsun ki sayfa nefes alsın.

## HER ŞEY AYNI HİZADA OLMASIN
- Hero 7/5 asimetrik: solda h1 ve butonlar, sağda dikey dikdörtgen foto
  sağ kenara kadar taşar (sağ kenar boşluğunu yok sayar). h1 fotoğrafa
  binmez; son kelime satırın içinde kalır (sahibin isteği).
- Menü sayfasında kategori başlıkları (h2) içerik sütununun 64px solunda,
  kenar boşluğuna sarkar; kalemler normal sütunda.
- Telefonda: hero fotosu tam genişlik, h1'in hemen altında.

## FOTOĞRAF BİÇİMİ — DÜZ KENAR (sahibin kararı, Ekim 2026)
- Sitedeki bütün fotoğraflar düz kenarlı kare ve dikdörtgenlerdir; köşe
  yuvarlatma yok. Önceki "her fotoğraf kemer formunda" kuralı sahibin
  isteğiyle kaldırıldı. Kemer formu yalnızca logoda yaşar.

## FOTOĞRAF (telefonla çekilecek, gün ışığında, flaşsız, HDR kapalı)
1. Hero (dikey 4:5): cam kenarı bar, dışarıda şemsiyeli teras ve ağaçlar
   görünsün. Göz hizasından, tezgahın arkasından değil masadan.
2. Uzun çalışma masası, hardal duvar önünde, 1–2 kişi laptopla (izinli,
   yüzleri yarım ya da arkadan). Yatay.
3. Terakota duvar önünde tezgah; Yasin ya da barista kahve yaparken, eller
   ve yüz profilden. Yatay.
4. Teras, AKŞAM / gece ışıklar yanarken — ters bölümün fotoğrafı bu.
5. San Sebastian dilimi, beyaz tabak, beyaz masa, 45° açı, doğal yan ışık.
6. Buzlu içecek (logolu bardak) terakota duvar önünde, yakın plan.
7. Dış tabela "Soracoffee.co" ağaçlarla birlikte; İletişim sayfası için
   "burayı arayın" fotoğrafı.
8. Yasin Nalbant portresi: terrakota duvar önü, göğüs hizası, doğal gülüş,
   kameraya bakarak. Hakkımızda için.
- Ele alış: hero dikey dikdörtgen; Mekan kenardan kenara bant + kareler;
  ürünler küçük dikdörtgen resim (120×150). Tümü WebP,
  srcset ile, hero dışındakiler loading="lazy". Hero max 180KB.
- Stok fotoğraf: hiç.

## FOTOĞRAF YOKKEN (ör. menü kalemleri)
- Düz dikdörtgen, içi düz karamel #B08656; tepeden krem renkte ince güneş
  ışınları (logodaki gibi, 12 çizgi, 1.5px). Altında Figtree 15px espresso
  alt yazı ürünün adıyla ("San Sebastian, bizim yaptığımız"). İçinde asla
  "görsel" ya da "fotoğraf" yazmaz, gri değil. Aynı yer tutucu iki tonda:
  karamel (krem bölümlerde) ve terrakota (vurgu bölümlerinde).

## HAREKET
Ne hareket ediyor:
- Hero girişi: h1 opacity 0→1 ve translateY(16px→0), 450ms; fotoğraf
  scale(1.04→1) + opacity, 500ms, 80ms gecikmeli. Butonlar animasyonsuz,
  hemen görünür.
- Bölüm içeriği ekrana girince BİR kez: sadece bölüm başlığı ve ilk görsel,
  opacity + translateY(12px), 350ms. Her blok aynı şekilde DEĞİL: liste
  kalemleri, SSS, footer animasyonsuz.
- Üzerine gelme / basma: butonlarda 180ms; hover'da zemin bir ton koyulaşır,
  basınca transform: scale(0.97). Linklerde alt çizgi kalınlığı değil,
  rengi değişir (180ms). Menü kalemlerinde 150ms renk.
- Açılır menü: opacity + translateY(-6px→0), 200ms.
- İMZA AN: "02:00" bölümü göründüğünde arkasındaki güneş ışını çizgileri
  merkezden dışa doğru bir kez "doğar" (scaleY 0→1, transform-origin alt,
  her ışın 30ms arayla, toplam 480ms). Sadece bir kez, sadece burada.

Kurallar:
- Başlangıçta gizli durum YALNIZCA JS ile: head'deki ilk script
  document.documentElement.classList.add('js') yapar; gizli stiller
  html.js seçicisi altında. IntersectionObserver yoksa ya da 2 saniye içinde
  tetiklenmezse her şey görünür hale getirilir.
- Süreler: arayüz 150–250ms, girişler 300–500ms. Easing
  cubic-bezier(0.2, 0, 0, 1). linear hiç yok (döngü yok).
- Sadece transform ve opacity. width/height/top/left/margin asla.
- Tüm giriş/ortaya çıkışlar @media (prefers-reduced-motion: no-preference)
  içinde; azaltılmış harekette sayfa ilk anda tam ve bitmiş görünür.
- Yok: kaydırma ele geçirme, telefonda parallax, otomatik karusel, açılış
  ekranı, metni geciktiren her şey.

## AÇIK/KAPALI GÖSTERGESİ
- Europe/Istanbul saatine göre hesaplanır (09:00–02:00, gece yarısını aşar).
- "Şu an açığız · Gece 2'ye kadar" — 8px dolu terakota daire + Figtree 600.
- "Şu an kapalıyız · Sabah 9'da açıyoruz" — boş daire.
- JS yoksa sadece "Her gün 09:00–02:00" metni görünür.

## YEREL VE YAPISAL
- Adres, telefon, saatler her sayfada düz metin (görselin içinde değil).
- head'de JSON-LD, @type CafeOrCoffeeShop: name "Sora Coffee", address
  (Onaç Mah. 2304. Sokak No:6/1, 15300 Bucak/Burdur, TR), telephone
  "+90 552 731 23 30", openingHoursSpecification Pazartesi–Pazar 09:00–02:00,
  servesCuisine ["Kahve","Tatlı"], founder "Yasin Nalbant",
  sameAs Instagram. Google İşletme Profili açılınca isim/adres/telefon birebir
  aynı yazılmalı.
- Sekme başlığı ve meta açıklama metin adımındaki gibi.

## ASLA
- Gradyan (hero dahil), gradyanlı metin, ortalanmış hero + gri alt başlık +
  yan yana iki buton, üç eşit ikonlu kart, emoji ikon, glassmorphism, neon,
  her şeye gölge, stok fotoğraf, uydurma yorum/puan/sayı/logo şeridi.
- Kelimeler: "premium", "butik", "Keşfet", "Yükselt", "Kusursuz",
  "Dönüştür", "tek adresiniz".
- Gölge yalnızca açılır menüde: 0 8px 24px rgba(42,28,19,0.12). Başka yerde yok.

## GÜNCELLEME (sahibin kararı)
- 02:00 bölümü ve ışın animasyonu kaldırıldı. Ters (espresso) zemin artık
  San Sebastian bölümünde; link rengi orada hardal (6,6:1).
- Soru-cevap (SSS) bölümü ve "Tüm sorular" sayfası sahibin isteğiyle kaldırıldı.
- Sahibin isteği: "San Sebastian'ı kendimiz yapıyoruz / el yapımı" ifadesi kullanılmaz; yerine "günlük taze tatlılarımız". Menüde San Sebastian diğer tatlılar gibi tablo satırı.
- Menüde Sıcak İçecekler ve sonrasındaki tablo ara başlıkları görünmez (yalnızca ekran okuyucular için).
- Display (başlık) fontu sahibin seçimiyle Playfair Display Italic 400 oldu (OFL, yerel woff2); Instrument Serif kaldırıldı.
- Playfair geniş olduğu için başlık ölçeği küçüldü: h1 88px / 52px, h2 52px / 34px.
