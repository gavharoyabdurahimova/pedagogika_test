let test = [
  {
    savollar: "kommunikatsiya nima ?",
    variantlar: [
      "a.Kommunikatsiya, bir necha odamlar o'rtasida ma'lumot almashish va o'zaro muloqot qilish jarayonidir",
      "b.(lot. communicatio — umumlashtiraman, bogʻlayman) — 1) kibernetikada — informatsiya (axborot)larni almashish jarayoni. ",
      "c.bu narsa haqida bilmiyman",
      "d.togri javob b bandda berilgan",
    ],
    javobi: "b",
  },
  {
    savollar:
      "Jismoniy nuqtayi nazardan yondoshiladigan Kommunikatsiyani biz nima  deb ataymiz ?",
    variantlar: ["a.ma'lumot", "b.aloqa", "c.so'zlashuv", "d.togri javob yoq"],
    javobi: "b",
  },
  {
    savollar:
      "Inson yaratgan texnikaviy tizimlarda nechta asosiy Kommunikatsiya turi bor ?",
    variantlar: ["a.4 ta", "b.7 ta", "c.3 ta", "d.o'zi bittaku"],
    javobi: "a",
  },
  {
    savollar: "Ommaviy kommunikatsiya nima ?",
    variantlar: [
      "a.Ommaviy kommunikatsiya deganda ommaviy axborot vositalari orqali keng miqyosdagi xabarlar yoki maʼlumotlarni yuborish, qabul qilish, almashish jarayoni tushunilishi mumkin",
      "b.Ommaviy kommunikatsiyada mazmunlar, fikrlar, ma'lumotlar, xabarlar va boshqa ma'lumotlar bo'lishi mumkin.",
      "c.endi bilib olaman ",
      "d.bu savol xato",
    ],
    javobi: "a",
  },
  {
    savollar: "qani kursdoshlar testga bolgan fikringiz qanday",
    variantlar: [
      "a.umuman yoqmadi",
      "b.savoli kam bolib qolibdiku",
      "c.boladi , uncha yaxshi emas",
      "d.juda ajoyib chiqibdi zo'r",
    ],
    javobi: "d",
  },
];
//   let qoshimcha_savol = +prompt(
//     "savol sonini kiriting kiritmasangiz 0 ni kiriting"
//   );
//   let question;
//   let obj;
//   for (let i = 0; i < qoshimcha_savol; i++) {
//     obj = {
//       savollar: prompt("savol kiriting"),
//       variantlar: [],
//       javobi: prompt("Togri javob qaysi"),
//     };
//     for (let i = 0; i < 4; i++) {
//       question = prompt("variantlarini yozing");
//       obj.variantlar.push(question);
//     }
//     test.push(obj);
//   }

let set_set = new Set();
let text_one = test.length;
let text_two;
let sum = 0;
do {
  sum = Math.floor(Math.random() * test.length);
  set_set.add(test[sum]);
  text_two = set_set.size;
} while (set_set.size != text_one);
let newarr = Array.from(set_set);

let ochko = 0;
for (let i = 0; i < test.length; i++) {
  let newarr = Array.from(set_set);
  let nimadir = prompt(
    newarr[i].savollar + "\n" + newarr[i].variantlar.join("\n")
  );

  if (nimadir == "exit" || nimadir == "cancel" || nimadir == "quit") {
    break;
  }
  if (
    nimadir == newarr[i].javobi ||
    nimadir == newarr[i].javobi.toUpperCase()
  ) {
    ochko++;
  }
  if (nimadir === null || nimadir === "") {
    alert("siz hech narsa yozmadingiz");
    i = i - 1;
  }
}

alert(
  " Siz " +
    test.length +
    " ta  savoldan " +
    ochko +
    " tasiga javob berdingiz va " +
    ochko * 5 +
    " ballga ega bo'ldingiz "
);
// 1-o'zgarish,javob orniga hech narsa yozmasa keyingi savolga o'tmaydi
// 2-ozgarish yangi savol qosha oladi
// 3-ozgarish savollar almashadi
