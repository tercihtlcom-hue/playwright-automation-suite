const { test, expect } = require('@playwright/test');

test('Basit ürün arama testi', async ({ page }) => {
  // 1. Sayfaya git ve yüklenmesini bekle
  await page.goto('https://automationexercise.com/', { waitUntil: 'domcontentloaded' });

  // 2. Ürünler sayfasına git
  await page.getByRole('link', { name: ' Products' }).click(); 

  // NOT: Eğer tam sayfa reklam açılırsa sayfayı yenilemek en basit çözümdür
  if (page.url().includes('#google_vignette')) {
    await page.goto('https://automationexercise.com/products');
  }

  // 3. Arama kutusunu daha spesifik bir seçiciyle bekle
  // 'input[name="search"]' veya 'input#search_product' ikisi de denenebilir
  const searchBox = page.locator('#search_product');
  
  // Elemanın DOM'da olduğundan ve görünür olduğundan emin olalım
  await expect(searchBox).toBeVisible({ timeout: 15000 });

  // 4. Arama yap
  await searchBox.fill('dress');
  await page.locator('#submit_search').click();

  // 5. Sonuç sayfasının geldiğini doğrula
  const searchTitle = page.locator('.title.text-center');
  await expect(searchTitle).toContainText('Searched Products', { timeout: 15000 });

  console.log('✅ Basit arama testi BAŞARILI');
});