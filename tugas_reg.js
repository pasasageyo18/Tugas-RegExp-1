function panggilRegexp(value) {
  let str =
    "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";

  //Tulis Code Jawaban Kamu Di Bawah ini
  let ambilDataC = str.match(/c/gi);
  let ambilDataK = str.match(/k/gi);
  let ambilDataL = str.match(/l/gi);
  console.log(ambilDataC);
  console.log(ambilDataK);
  console.log(ambilDataL);
}

panggilRegexp();
