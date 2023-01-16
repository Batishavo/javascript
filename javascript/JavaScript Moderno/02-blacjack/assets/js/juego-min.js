const miModulo = (() => {
  "use strict";
  let e = ["C", "D", "H", "S"],
    t = ["A", "J", "Q", "K"],
    l = document.querySelector("#btnPedir"),
    r = document.querySelector("#btnDetener"),
    a = document.querySelector("#btnNuevo"),
    s = document.querySelectorAll("small"),
    d = document.querySelectorAll(".divCartas"),
    n = [],
    i = [],
    o = (e = 1) => {
      (i = c()), (n = []);
      for (let t = 0; t <= e; t++) n.push(0);
      s.forEach(e => (e.innerText = 0)),
        d.forEach(e => (e.innerHTML = "")),
        (l.disabled = !1),
        (r.disabled = !1);
    },
    c = () => {
      i = [];
      for (let l = 2; l <= 10; l++) for (let r of e) i.push(l + r);
      for (let a of e) for (let s of t) i.push(s + a);
      return _.shuffle(i);
    },
    $ = () => {
      if (0 === i.length) throw "No hay cartas el el deck";
      return i.pop();
    },
    u = e => {
      let t = e.substring(0, e.length - 1);
      return isNaN(t) ? ("A" === t ? 10 : 11) : 1 * t;
    },
    f = (e, t) => ((n[t] += u(e)), (s[t].innerText = n[t]), n[t]),
    b = (e, t) => {
      let l = document.createElement("img");
      (l.src = `assets/cartas/${e}.png`),
        l.classList.add("carta"),
        d[t].append(l);
    },
    h = e => {
      setTimeout(() => {
        n[0] === e
          ? alert("empate")
          : n[0] > 21 || (n[0] < e && e <= 21)
          ? alert("perdiste")
          : alert("ganaste");
      }, 25);
    },
    p = e => {
      let t = 0;
      do {
        let l = $();
        if (((t = f(l, n.length - 1)), b(l, n.length - 1), e > 21)) break;
      } while (t < 21 && n[0] > t);
      h(t);
    };
  return (
    l.addEventListener("click", () => {
      let e = $(),
        t = f(e, 0);
      b(e, 0),
        t > 21
          ? ((l.disabled = !0), (r.disabled = !0), p(t))
          : 21 === t && ((l.disabled = !0), (r.disabled = !0), p(t));
    }),
    r.addEventListener("click", () => {
      (l.disabled = !0), (r.disabled = !0), p(n);
    }),
    a.addEventListener("click", () => {
      o(), console.clear();
    }),
    {nuevoJuego: o}
  );
})();
