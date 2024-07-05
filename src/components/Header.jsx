function Header() {
  return (
    <>
      <header>
        <div class="container">
          <div class="main_header">
            <img src="./assets/images/tea.png" alt="" />
            <ul class="content">
              <li>
                <a href="#">Black</a>
              </li>
              <li>
                <a href="#">Green</a>
              </li>
              <li>
                <a href="#">White</a>
              </li>
              <li>
                <a href="#">Oolong</a>
              </li>
              <li>
                <a href="#">Pu-erh</a>
              </li>
            </ul>
            <div>
              <button>Backet</button>
              <button>Login</button>
              <button>Search</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
