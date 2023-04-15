<template>
  <footer>
    <marquee>
      <span>Chet Baker</span>
      <span>Bill Evans</span>
      <span>Miles David</span>
      <span>John Coltrane</span>
      <span>Charlie Parker</span>
      <span>Thelonious Monk</span>
      <span>Herbie Hancock</span>
      <span>Stan Getz</span>
      <span>John Coltrane</span>
      <span>Ella Fitzgerald</span>
      <span>Billie Holiday</span>
      <span>Nat King Cole</span>
    </marquee>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-6 text-center">
          <span class="logo">Jazz is everywhere</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex eos
            quod est minima illum expedita dolore rem, sed possimus at incidunt
            vitae, ipsa sapiente. Voluptatibus aliquam doloremque distinctio
            officiis hic.
          </p>
          <ul>
            <li><a href="">Twitter</a></li>
            <li><a href="">Google</a></li>
            <li><a href="">LinkedIn</a></li>
          </ul>
          <p class="bottom-text">
            © 2012-2021 Jazz is everywhere Co.
            <br />
            All rights reversed
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
$white: #fffefe;
$black: #000000;
footer {
  position: relative;
  padding: 8rem 0 1rem;
  font-size: 1rem;
  color: $white;
  background: $black;

  marquee {
    position: absolute;
    top: 1.25rem;
    left: 0;
    width: 100%;
    font-size: 1.25rem;
    line-height: 1;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: "Basis Grotesque Pro", sans-serif;
    span {
      margin: 0 0.75rem;

      &:nth-child(even) {
        font-weight: 900;
      }
    }
  }
  .logo {
    display: inline-flex;
    font-family: "Imperator", sans-serif;
    text-transform: uppercase;
    font-size: 2.3rem;
    max-width: 18.375rem;
    margin-bottom: 1.5rem;
  }
  ul {
    display: flex;
    margin: 2rem 0 2.5rem -2rem;
    list-style: none;
    justify-content: center;
  }

  a {
    display: inline-block;
    padding: 1rem;
    font-size: 1rem;
    color: $white;
    font-weight: 750;
    text-decoration: none;
    font-family: "Basis Grotesque Pro", sans-serif;
    &::after {
      content: "";
      display: block;
      margin: 0 auto;
      width: 0;
      height: 2px;
      background: $white;
      transition: width 0.2s;
    }
  }
  a:hover,
  a:focus {
    &::after {
      width: 2rem;
    }
  }
  .bottom-text {
    font-size: 0.75rem;
    font-weight: 650;
    opacity: 0.8;
    font-family: "Basis Grotesque Pro", sans-serif;
  }
}
</style>

