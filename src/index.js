import ReactDOM from "react-dom/client"
import a from "./assets/img/perfume1.png"
import b from "./assets/img/perfume2.png"
import c from "./assets/img/perfume3.png"
import d from "./assets/img/perfume4.png"
import e from "./assets/img/perfume5.png"
import f from "./assets/img/perfume6.png"
import g from "./assets/img/perfume7.png"
import h from "./assets/img/perfume8.png"

import "./style.css"
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
<div class="perfume">
  <h1>Perfume Gallery</h1>
  <hr></hr>
  <div class="gallery1">
  <img src={a} alt="pone"></img>
  <img src={b} alt="ptwo"></img>
  <img src={c} alt="pthree"></img>
  <img src={d} alt="pfour"></img>
  <img src={e} alt="pfive"></img>
  <img src={f} alt="psix"></img>
  <img src={g} alt="pseven"></img>
  <img src={h} alt="peight"></img>
</div>
</div>)