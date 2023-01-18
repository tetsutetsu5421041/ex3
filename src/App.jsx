function Header() {
    return (
       <div class="card">
         <div class="card-content">
           <span class="card-title">Random Duck</span>
         </div>
       </div>
     );
  }

  function Main() {
    return (
      <main>
        <div class="container red lighten-5">
            <div>
              <img src = "https://random-d.uk/api/randomimg"/ >
            </div>       
        </div>
      </main>
    );
  }

  function Footer() {
    return (
      <footer class="page-footer">
        <div class="container">
          <div class="center-align">
            <p>Duck images are retrieved from RandomDuck API</p>
            <p>
              <a href="https://random-d.uk/api">Donate to RandomDuck API</a>
            </p>
          </div>  
        </div>
        <div class="footer-copyright">
          <div class="container">
            <div class="center-align">
              日本大学文理学部情報科学科 Webプログラミング 演習3
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  
  export default App;