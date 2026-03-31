const { test, expect } = require('@playwright/test');

test('Successful login test - AutomationExercise', async ({ page }) => {
  
  await page.goto('https://automationexercise.com/');

  // Login sayfasına git
  await page.click('a[href="/login"]');

  // === KENDİ HESAP BİLGİLERİNİ BURAYA YAZ ===
  await page.fill('input[data-qa="login-email"]', 'tercihtl.com@gmail.com');   // ← kendi mailin
  await page.fill('input[data-qa="login-password"]', 'arif159159');         // ← kendi şifren
  
  await page.click('button[data-qa="login-button"]');

  // Başarılı giriş kontrolü (en stabil yöntem)
  await expect(page.getByText('Logged in as')).toBeVisible({ timeout: 10000 });

  console.log('✅ Login testi BAŞARILI');
});