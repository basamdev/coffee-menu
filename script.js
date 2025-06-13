window.onload = function () {
  const lang = new URLSearchParams(window.location.search).get("lang") || "en";

  const translations = {
    en: {
      title: "Menu",
      drinks: "Drinks",
      food: "Food",
      shisha: "Shisha",
      sweets: "Sweets",
      drink1: "Espresso",
      drink2: "Orange Juice",
      food1: "Pizza",
      food2: "Burger",
      shisha1: "Mint",
      shisha2: "Double Apple",
      sweet1: "Cake",
      sweet2: "Ice Cream"
    },
    ar: {
      title: "القائمة",
      drinks: "المشروبات",
      food: "الطعام",
      shisha: "الشيشة",
      sweets: "الحلويات",
      drink1: "إسبريسو",
      drink2: "عصير برتقال",
      food1: "بيتزا",
      food2: "برغر",
      shisha1: "نعناع",
      shisha2: "تفاحتين",
      sweet1: "كعكة",
      sweet2: "آيس كريم"
    },
    ku: {
      title: "مێنو",
      drinks: "خواردنەوەکان",
      food: "خواردن",
      shisha: "شیەشە",
      sweets: "شیرینییەکان",
      drink1: "ئەسپرسۆ",
      drink2: "پورتووقال",
      food1: "پیتزا",
      food2: "بەرگر",
      shisha1: "نەنەع",
      shisha2: "دوو سیڤ",
      sweet1: "کەیک",
      sweet2: "ئایس کریم"
    }
  };

  const navTexts = {
    en: {
      drinks: "🥤 Drinks",
      food: "🍔 Food",
      shisha: "💨 Shisha",
      sweets: "🍰 Sweets"
    },
    ar: {
      drinks: "🥤 مشروبات",
      food: "🍔 طعام",
      shisha: "💨 نرگيلە",
      sweets: "🍰 حلويات"
    },
    ku: {
      drinks: "🥤 خواردنەوەکان",
      food: "🍔 خواردن",
      shisha: "💨 نرگيلە",
      sweets: "🍰 شیرینی"
    }
  };

  const welcomeTexts = {
    en: "Please select a category above to view our menu",
    ar: "يرجى اختيار قسم من الأعلى لعرض قائمتنا",
    ku: "تکایە لەسەرەوە پۆلێک هەلبژێرە بۆ بینینی لیستی خواردنەکان"
  };

  const welcomeTitleTexts = {
    en: "Welcome to Oliver Coffee",
    ar: "مرحبًا بكم في أوليفيرا كوفي",
    ku: "بەخێربێن بۆ Oliver Coffee"
  };

  const t = translations[lang];

  // Menu titles
  document.getElementById("menu-title") && (document.getElementById("menu-title").innerText = t.title);
  document.getElementById("drinks-title") && (document.getElementById("drinks-title").innerText = t.drinks);
  document.getElementById("food-title") && (document.getElementById("food-title").innerText = t.food);
  document.getElementById("shisha-title") && (document.getElementById("shisha-title").innerText = t.shisha);
  document.getElementById("sweets-title") && (document.getElementById("sweets-title").innerText = t.sweets);

  // Menu items
  document.getElementById("drink1") && (document.getElementById("drink1").innerText = t.drink1);
  document.getElementById("drink2") && (document.getElementById("drink2").innerText = t.drink2);
  document.getElementById("food1") && (document.getElementById("food1").innerText = t.food1);
  document.getElementById("food2") && (document.getElementById("food2").innerText = t.food2);
  document.getElementById("shisha1") && (document.getElementById("shisha1").innerText = t.shisha1);
  document.getElementById("shisha2") && (document.getElementById("shisha2").innerText = t.shisha2);
  document.getElementById("sweet1") && (document.getElementById("sweet1").innerText = t.sweet1);
  document.getElementById("sweet2") && (document.getElementById("sweet2").innerText = t.sweet2);

  // Top nav buttons (make sure your nav links have these IDs)
  if (navTexts[lang]) {
    document.getElementById('nav-drinks') && (document.getElementById('nav-drinks').textContent = navTexts[lang].drinks);
    document.getElementById('nav-food') && (document.getElementById('nav-food').textContent = navTexts[lang].food);
    document.getElementById('nav-shisha') && (document.getElementById('nav-shisha').textContent = navTexts[lang].shisha);
    document.getElementById('nav-sweets') && (document.getElementById('nav-sweets').textContent = navTexts[lang].sweets);
  }

  // Welcome message (for #menu-welcome section)
  const welcome = document.getElementById('menu-welcome');
  if (welcome && welcomeTexts[lang]) {
    welcome.textContent = welcomeTexts[lang];
    if (lang === 'ar' || lang === 'ku') {
      welcome.style.direction = 'rtl';
      welcome.style.textAlign = 'center';
    } else {
      welcome.style.direction = 'ltr';
      welcome.style.textAlign = 'center';
    }
  }

  // Welcome overlay message (for video overlay)
  const welcomeOverlay = document.querySelector('#videoWelcomeOverlay p');
  if (welcomeOverlay && welcomeTexts[lang]) {
    welcomeOverlay.textContent = welcomeTexts[lang];
    if (lang === 'ar' || lang === 'ku') {
      welcomeOverlay.style.direction = 'rtl';
      welcomeOverlay.style.textAlign = 'center';
    } else {
      welcomeOverlay.style.direction = 'ltr';
      welcomeOverlay.style.textAlign = 'center';
    }
  }

  // Welcome title (for video overlay h1)
  const welcomeTitle = document.querySelector('#videoWelcomeOverlay h1');
  if (welcomeTitle && welcomeTitleTexts[lang]) {
    welcomeTitle.textContent = welcomeTitleTexts[lang];
    if (lang === 'ar' || lang === 'ku') {
      welcomeTitle.style.direction = 'rtl';
      welcomeTitle.style.textAlign = 'center';
    } else {
      welcomeTitle.style.direction = 'ltr';
      welcomeTitle.style.textAlign = 'center';
    }
  }
};

// Section show/hide logic
document.addEventListener('DOMContentLoaded', function () {
  // Hide all sections initially
  const sections = document.querySelectorAll('.menu-section');
  sections.forEach(sec => {
    sec.style.display = 'none';
  });

  // Map nav links to section IDs
  const navMap = {
    'drinks-title': 'drinks-section',
    'food-title': 'food-section',
    'shisha-title': 'shisha-section',
    'sweets-title': 'sweets-section'
  };

  // Handle nav link clicks (top navigation)
  document.querySelectorAll('.top-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      // Hide video background
      var videoBg = document.getElementById('videoBg');
      if (videoBg) videoBg.style.display = 'none';
      // Show menu content
      var menuContent = document.getElementById('menuContent');
      if (menuContent) menuContent.style.display = 'block';
      // Hide all menu sections
      sections.forEach(function(sec) {
        sec.style.display = 'none';
      });
      // Show only the selected section
      const hash = this.getAttribute('href').replace('#', '');
      const sectionId = navMap[hash];
      if (sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
          section.style.display = 'block';
        }
      }
    });
  });

  // Handle category button clicks (if you have .category-btn buttons)
  document.querySelectorAll('.category-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Hide video background and overlay
      var videoBg = document.getElementById('videoBg');
      if (videoBg) videoBg.style.display = 'none';
      var menuContent = document.getElementById('menuContent');
      if (menuContent) menuContent.style.display = 'block';

      // Hide all menu sections
      sections.forEach(function(sec) {
        sec.style.display = 'none';
      });

      // Show only the section for this button
      var cat = btn.textContent.trim().toLowerCase();
      var sectionId = '';
      if (cat === 'drinks' || cat === 'drink') sectionId = 'drinks-section';
      if (cat === 'food') sectionId = 'food-section';
      if (cat === 'shisha') sectionId = 'shisha-section';
      if (cat === 'sweets' || cat === 'sweet') sectionId = 'sweets-section';
      if (sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
          section.style.display = 'block';
        }
      }
    });
  });

  // Optionally, show the first section by default on page load
  // Uncomment the next 3 lines if you want to show the first menu by default:
  // var firstSection = document.getElementById('drinks-section');
  // var menuContent = document.getElementById('menuContent');
  // if (firstSection && menuContent) { menuContent.style.display = 'block'; firstSection.style.display = 'block'; }
});