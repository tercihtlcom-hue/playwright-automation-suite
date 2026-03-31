🛒 Playwright E-Commerce Automation Suite
Bu proje, Automation Exercise web sitesi üzerinde uçtan uca (E2E) test senaryolarını otomatize etmek için geliştirilmiştir. Playwright framework'ü kullanılarak modern web testi pratikleri uygulanmıştır.

🚀 Özellikler
Cross-Browser Test: Chromium, Firefox ve Webkit üzerinde test imkanı.

Hızlı Arama Testi: Ürün arama fonksiyonunun doğrulanması.

Hata Yönetimi: Beklenmedik reklamlar (Google Vignette) için özel kontroller.

Raporlama: Test sonuçlarının HTML formatında görsel sunumu.

🛠️ Kurulum
Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

Depoyu klonlayın:

Bash
git clone https://github.com/kullaniciadi/playwright-ecommerce-tests.git
Proje dizinine gidin:

Bash
cd playwright-ecommerce-tests
Bağımlılıkları yükleyin:

Bash
npm install
Playwright tarayıcılarını kurun:

Bash
npx playwright install
🧪 Testleri Çalıştırma
Tüm testleri koşturmak için:

Bash
npx playwright test
Testleri tarayıcıyı görerek (headed mode) çalıştırmak için:

Bash
npx playwright test --headed
Test raporunu görüntülemek için:

Bash
npx playwright show-report
📁 Proje Yapısı
Plaintext
├── tests/              # Test senaryoları (.spec.js dosyaları)
├── playwright.config.js # Playwright ana yapılandırma dosyası
├── package.json        # Bağımlılıklar ve scriptler
└── .gitignore          # Gereksiz dosyaların (node_modules vb.) engellenmesi
👤 Yazar
Arif Yazıcı Junior Full Stack Developer & QA Automation Enthusiast
