import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, Spinner } from './index';

const Home = lazy(() => import('Pages/Home/Home'));
const ContactsProducer = lazy(() =>
  import('Pages/ContactsProducer/ContactsProducer')
);
const OneProductPage = lazy(() =>
  import('Pages/OneProductPage/OneProductPage')
);
const ProductsPage = lazy(() => import('Pages/ProductsPage/ProductsPage'));
/*
1. Обгорнути весь App в компонент BrowserRouter
2. Прописати маршрути та компоненти Link|NavLink
3. Підготувати компоненти Route для кожноъ сторінки за певною адресою.
4. Якщо нам потрібно зробити шаблонну сторінку для багатьох однотипних даних,
    нам потрібно використовувати динамічні параметри '/products/:productId'
5. Щоб у користувача була змога потрабити на конкретну шаблонну сторінку 
    ми у компоненті Link або NavLink вказуємо маршрут наступним чином <Link to={`/products/${product.id}`}>


Етапи роботи з маршрутеризацією:
1. Змінити адресний рядок браузера за допомогою компонти Link або NavLink маршрут вказуємо 
   в (пропс to).
2. Підготувати компонент Route для відображення конкретної сторінки за певним 
   шляхом(пропс path).

РЕМАРКА!!!
Тег <a href="..." target="_blank" rel="noopener noreferrer"></a> Ми використовуємо для 
   всіх зовнішніх посиланнь(фейсбук, гугель, ютубе, інтаграми).
Тег <NavLink to="..."></NavLink> або <Link to="..."></Link> Ми використовуємо виключно 
   для навігації всередині нашого додатку.
*/

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route
            path="/products/:productId/*"
            element={<OneProductPage />}
          ></Route>
          <Route path="/contactProducer" element={<ContactsProducer />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
};
