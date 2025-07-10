// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  /*scrollbar: {
    el: '.swiper-scrollbar',
  },*/
});

let swiperTitleEl = document.getElementById('swiper-title');

let textEl = document.createTextNode('スライド1を表示しています。');

swiperTitleEl.appendChild(textEl);

swiper.on('slideChange', function () {
  const currentSliderIndex = swiper.realIndex + 1;
  //console.log(currentSliderIndex);
  const text = 'スライド' + currentSliderIndex + 'を表示しています。';
  //console.log(text);

  textEl.remove();

  textEl = document.createTextNode(text);
  swiperTitleEl.appendChild(textEl);
});

const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//↓↓二個目のswiper↓↓

let titles = [
  'ぴえんのイラスト（男性）',
  '浮かれる人のイラスト（女性）',
  '怖くて腰が抜ける人のイラスト（女性）',
  '悔しくてハンカチを噛む人のイラスト（男性）',
];

let swiperTitleEl2 = document.getElementById('swiper-title-2');

let textEl2 = document.createTextNode(titles[0]);

swiperTitleEl2.appendChild(textEl2);

swiper2.on('slideChange', function () {
  const currentSliderIndex = swiper2.realIndex;
  //console.log(currentSliderIndex);
  const text = titles[currentSliderIndex];
  //console.log(text);

  textEl2.remove();

  textEl2 = document.createTextNode(text);
  swiperTitleEl2.appendChild(textEl2);
});

import JustValidate from 'just-validate';

const validator = new JustValidate('#basic_form');

validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: '入力必須項目です。',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: '3文字以上で入力してください。',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: '最大入力文字数は15文字です。',
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
      errorMessage: '入力必須項目です。',
    },
    {
      rule: 'email',
      errorMessage: '形式が正しくありません。',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
      errorMessage: '入力必須項目です。',
    },
    {
      rule: 'password',
      errorMessage:
        'パスワードは8文字以上で入力してください。その際に数字を1文字以上含める必要があります。',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
      errorMessage: '入力必須項目です。',
    },
    {
      rule: 'number',
      errorMessage: '数字で入力して下さい。',
    },
    {
      rule: 'minNumber',
      value: 18,
      errorMessage: '18以上の数字を入力してください。',
    },
    {
      rule: 'maxNumber',
      value: 150,
      errorMessage: '150以下の数字を入力してください。',
    },
  ])
  .addField('#basic_address', [
    {
      rule: 'required',
      errorMessage: '入力必須項目です。',
    },
  ])
  .onSuccess(function (event) {
    const formData = new FormData(event.target);
    console.log(formData.get('name'));
    console.log(formData.get('email'));
    console.log(formData.get('password'));
    console.log(formData.get('age'));
    console.log(formData.get('address'));
  });
