# 📦 Inventory — Orders & Products SPA

> Тестовое задание: SPA-приложение для управления приходами и продуктами.

## 🌐 Демо

- **Frontend:** https://frontend-ruddy-eight-91.vercel.app/orders
- **Backend API:** https://frontend-production-5bc0.up.railway.app/api

---

## 🚀 Функциональность

- 📋 **Приходы (Orders)** — список всех приходов с информацией:
    - Название прихода
    - Количество продуктов
    - Дата создания в двух форматах
    - Сумма прихода в USD и UAH
    - Удаление прихода через модальное окно
    - Клик на приход открывает панель с продуктами рядом

- 📦 **Продукты (Products)** — список всех продуктов с фильтрацией по типу:
    - Название и тип продукта
    - Даты гарантии в разных форматах
    - Цена в USD и UAH
    - Название прихода
    - Статус продукта

- 🕐 **Header** — текущая дата и время в реальном времени
- 🔌 **WebSocket** — счётчик активных сессий (вкладок) в реальном времени
- 🎨 **Анимации** — переходы между страницами и компонентами

---

## 🛠 Технологии

| Категория | Технологии |
|-----------|------------|
| Frontend | React 18, Redux Toolkit, React Router v6 |
| Стили | SCSS, BEM, Bootstrap 5 |
| HTTP | Axios |
| WebSocket | Socket.io |
| Backend | Node.js, Express |
| DevOps | Docker, Docker Compose |
| Deploy | Vercel (frontend), Railway (backend) |

---

## 📁 Структура проекта

```
project/
├── backend/
│   ├── data/db.js
│   ├── routes/
│   │   ├── orders.js
│   │   └── products.js
│   ├── server.js
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── hooks/
│   │   └── helpers/
│   ├── Dockerfile
│   └── nginx.conf
├── database/
│   └── database_schema.sql
└── docker-compose.yml
```

---

## ⚙️ Установка и запуск

### Вариант 1 — Docker (рекомендуется)

```bash

1.в терминале запустить команду: git clone https://github.com/AtremLysuk/frontend

2. запустить Docker на вашем пк

3. Перед запуском убедитесь что Docker Desktop запущен 
и внизу отображается статус "Engine running"

4. после клонирования в терминале запустить команду: docker-compose up --build

5. убедитесь что в Docker container запущен, если нет нажмите run


6. проект будет доступен по адрессу: http://localhost

```

- Фронт: http://localhost
- Бэкенд: http://localhost:3001

---

### Вариант 2 — Локально

**Бэкенд:**
```bash
cd backend
npm install
node server.js
```
Сервер запустится на http://localhost:3001

**Фронтенд** (в новом терминале):
```bash
cd frontend
npm install
npm run dev
```
Приложение запустится на http://localhost:5173

---

## 🗄 Схема БД

Файл схемы: `/database/database_schema.sql`

Открыть в MySQL Workbench:
1. Открой MySQL Workbench
2. `File` → `Open SQL Script`
3. Выбери файл `database_schema.sql`

---

## 📡 API Endpoints

| Метод | URL | Описание |
|-------|-----|----------|
| GET | `/api/orders` | Все приходы |
| GET | `/api/orders/:id` | Приход по ID |
| DELETE | `/api/orders/:id` | Удалить приход |
| GET | `/api/products` | Все продукты |
| GET | `/api/products/types` | Типы продуктов |
| GET | `/api/products/order/:id` | Продукты по приходу |

---

## 🌿 Git ветвление

```
master
└── develop
    ├── feature/backend
    ├── feature/header
    ├── feature/layout-complete
    ├── feature/modal
    ├── feature/navbar
    ├── feature/orders-page
    ├── feature/products-page
    └── feature/page-transitions
```