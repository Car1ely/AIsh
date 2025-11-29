# Деплой на GitHub Pages

## Способ 1: Автоматический деплой через GitHub Actions (Рекомендуется)

1. **Создайте репозиторий на GitHub:**
   - Перейдите на https://github.com/new
   - Назовите репозиторий (например, `AIsh`)
   - Создайте репозиторий

2. **Инициализируйте git и загрузите код:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/ВАШ_USERNAME/AIsh.git
   git push -u origin main
   ```

3. **Включите GitHub Pages:**
   - Перейдите в Settings → Pages
   - В разделе "Source" выберите "GitHub Actions"
   - Сохраните

4. **Автоматический деплой:**
   - При каждом push в ветку `main` проект автоматически соберется и задеплоится
   - Сайт будет доступен по адресу: `https://ВАШ_USERNAME.github.io/AIsh/`

## Способ 2: Ручной деплой через gh-pages

1. **Установите gh-pages:**
   ```bash
   npm install
   ```

2. **Создайте репозиторий на GitHub** (если еще не создан)

3. **Инициализируйте git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/ВАШ_USERNAME/AIsh.git
   git push -u origin main
   ```

4. **Задеплойте:**
   ```bash
   npm run deploy
   ```

5. **Включите GitHub Pages:**
   - Перейдите в Settings → Pages
   - В разделе "Source" выберите ветку `gh-pages` и папку `/ (root)`
   - Сохраните

## Важно!

Если ваш репозиторий называется не `AIsh`, измените `base` в `vite.config.ts`:

```typescript
base: process.env.NODE_ENV === 'production' ? '/НАЗВАНИЕ_РЕПОЗИТОРИЯ/' : '/',
```

Если используете GitHub Pages для пользователя (username.github.io), измените на:
```typescript
base: '/',
```

