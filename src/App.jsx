import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* NavBar */}
      <div class="bottom-row">
        <div class="container t-flex">
          <a href="./main-page.php" class="logo t-flex nav">
            <img src="./public/inli.png" alt="" />
          </a>

          <ul class="t-flex nav-bar">
            <li class="nav">
              <a href="./about.php">درباره </a>
            </li>

            <li class="nav">
              <a href="./contact-us.php">تماس</a>
            </li>

            <li class="nav">
              <a href="./products.php">محصولات</a>
            </li>

            <li class="nav">
              <a href="./services.php">خدمات</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End NavBar */}

      {/* ******************************* */}

      {/* Header */}
      <header class="header">
        <div class="banner">
          <p> {/* نمایش نام کاربر و خوش آمد گویی */} </p>

          <h1>زبانکده ملی ایران</h1>
          <h2>آموزشگاه شعبه حکیمیه زبانکده ملی ایران</h2>

          <a class="btn btn-banner" href="./news.php">
            اطلاعیه ها
          </a>
        </div>
      </header>
      <div class="content-divider"></div>
      {/* End Header */}

      {/* ******************************* */}
    </>
  )
}

export default App
