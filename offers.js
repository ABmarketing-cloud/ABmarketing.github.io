// ************************************* МФО ******************************
const offers = [
  {
    img: 'zaimer',
    rate_day: '0',
    max_sum: '30 000',
    sum: '2 000 ₽ – 30 000 ₽',
    time: '7 – 21 день',
    documents: 'Паспорт, СНИЛС',
    age: '18 - 75 лет',
    types: 'card interest-free best',
    href: 'https://ad.admitad.com/g/p7fj2irdmxf6662fc69e17c8b502f2'
  },
  {
    img: 'ekapysta',
    rate_day: '0',
    max_sum: '30 000',
    sum: '100 ₽ – 30 000 ₽',
    time: '7 – 21 день',
    documents: 'Паспорт',
    age: '18 - 70 лет',
    types: 'card interest-free best',
    href: 'https://ad.admitad.com/g/kd5dkyy8m9f6662fc69e1f5a7758cf'
  },
  {
    img: 'money_man',
    rate_day: '0',
    max_sum: '30 000',
    sum: '1 500 ₽ – 30 000 ₽',
    time: '5 – 21 день',
    documents: 'Паспорт, СНИЛС',
    age: '18 - 70 лет',
    types: 'card interest-free best',
    href: 'https://ad.admitad.com/g/1a4e628034f6662fc69ecb39f7ffa1'
  },
  {
    img: 'ezaem',
    rate_day: '0',
    max_sum: '15 000',
    sum: '3 000 ₽ – 15 000 ₽',
    time: '5 – 35 дней',
    documents: 'Паспорт',
    age: '18 - 65 лет',
    types: 'card interest-free best',
    href: 'https://ad.admitad.com/g/3ojafcxrazf6662fc69e0342eb9e1dcf01fc7899'
  },
  {
    img: 'tyrbo_zaem',
    rate_day: '1',
    max_sum: '50 000',
    sum: '3 000 ₽ – 15 000 ₽',
    time: '7 – 30 дней',
    documents: 'Паспорт, СНИЛС',
    age: '21 - 65 лет',
    types: 'card best',
    href: 'https://ad.admitad.com/g/vcbjsojizuf6662fc69e65ea06dd2f'
  },
  {
    img: 'credit_plus',
    rate_day: '0',
    max_sum: '15 000',
    sum: '1 000 ₽ – 15 000 ₽',
    time: '5 – 30 дней',
    documents: 'Паспорт',
    age: '22 - 70 лет',
    types: 'card best interest-free',
    href: 'https://ad.admitad.com/g/mzp7dy4ikqf6662fc69eab10d1eb5cd07e4baa5f'
  },
  {
    img: 'do_zarplaty',
    rate_day: '0',
    max_sum: '100 000',
    sum: '2 000 ₽ – 100 000 ₽',
    time: '7 дней – 12 месяцев',
    documents: 'Паспорт',
    age: '18 - 60 лет',
    types: 'card best interest-free cash',
    href: 'https://ad.admitad.com/g/7ni5ljvi98f6662fc69ef40f4efead'
  },
  {
    img: 'mig_credit',
    rate_day: '0,26',
    max_sum: '100 000',
    sum: '15 000 ₽ – 100 000 ₽',
    time: '75 – 365 дней',
    documents: 'Паспорт',
    age: '21 - 65 лет',
    types: 'card best',
    href: 'https://ad.admitad.com/g/4ed19c9aedf6662fc69e6f1a920894'
  },
  {
    img: 'lime',
    rate_day: '0',
    max_sum: '20 000',
    sum: '2 000 ₽ – 20 000 ₽',
    time: '10 – 40 дней',
    documents: 'Паспорт, Военный билет (для лиц до 27 лет), СНИЛС, ИНН',
    age: '21 - 65 лет',
    types: 'card best interest-free',
    href: 'https://ad.admitad.com/g/a4e98b7478f6662fc69eaa733ef9fd'
  },
  {
    img: 'konga',
    rate_day: '0,5',
    max_sum: '70 000',
    sum: '6 000 ₽ – 70 000 ₽',
    time: '42 – 168 дней',
    documents: 'Паспорт, Военный билет (для лиц до 27 лет), СНИЛС, ИНН',
    age: '18 - 70 лет',
    types: 'card best',
    href: 'https://ad.admitad.com/g/wz3z0b1rzdf6662fc69e0a6342ecf5'
  },
  {
    img: 'webbankir',
    rate_day: '0',
    max_sum: '20 000',
    sum: '3 000 ₽ – 20 000 ₽',
    time: '7 – 31 день',
    documents: 'Паспорт, СНИЛС, ИНН',
    age: '20 - 70 лет',
    types: 'card interest-free',
    href: 'https://ad.admitad.com/g/h04mx6rj3wf6662fc69e5943012e5fd68568f527'
  },
  {
    img: 'zaymigo',
    rate_day: '1',
    max_sum: '10 000',
    sum: '4 000 ₽ – 30 000 ₽',
    time: '1 – 30 дней',
    documents: 'Паспорт',
    age: '18 - 65 лет',
    types: 'card',
    href: 'https://ad.admitad.com/g/3q5bfxdfwif6662fc69e7e790fd18e'
  },
  {
    img: 'belka_credit',
    rate_day: '0',
    max_sum: '30 000',
    sum: '1 000 ₽ – 30 000 ₽',
    time: '7 – 30 дней',
    documents: 'Паспорт',
    age: '18 - 75 лет',
    types: 'card interest-free',
    href: 'https://ad.admitad.com/g/z4ago5d2tvf6662fc69e4e6180adbe'
  },
  {
    img: 'denga',
    rate_day: '0',
    max_sum: '100 000',
    sum: '1 000 ₽ – 30 000 ₽',
    time: '5 – 180 дней',
    documents: 'Паспорт',
    age: '18 - 75 лет',
    types: 'card interest-free',
    href: 'https://ad.admitad.com/g/otlgr4l3uuf6662fc69eb237df8854'
  },
  {
    img: 'cash_u',
    rate_day: '0',
    max_sum: '15 000',
    sum: '3 000 ₽ – 30 000 ₽',
    time: '5 – 25 дней',
    documents: 'Паспорт',
    age: '21 - 75 лет',
    types: 'card interest-free',
    href: 'https://ad.admitad.com/g/22j1y26r38f6662fc69efa2f01166f'
  },
  {
    img: 'joy_money',
    rate_day: '0',
    max_sum: '30 000',
    sum: '3 000 ₽ – 60 000 ₽',
    time: '10 – 126 дней',
    documents: 'Паспорт',
    age: '21 - 75 лет',
    types: 'card interest-free',
    href: 'https://ad.admitad.com/g/pbby8wqkv5f6662fc69eba03f039791ca502cabf'
  },
  {
    img: 'chestnoe_slovo',
    rate_day: '0',
    max_sum: '10 000',
    sum: '3 000 ₽ – 10 000 ₽',
    time: '10 – 60 дней',
    documents: 'Паспорт',
    age: '18 - 75 лет',
    types: 'card interest-free',
    href: 'https://ad.admitad.com/g/3e1725c17ff6662fc69ee50e1abb43'
  },
  {
    img: 'kredito24',
    rate_day: '1',
    max_sum: '15 000',
    sum: '2 000 ₽ – 15 000 ₽',
    time: '16 – 30 дней',
    documents: 'Паспорт',
    age: '18 - 75 лет',
    types: 'card',
    href: 'https://ad.admitad.com/g/b3892244a7f6662fc69ed68796de78397ba61a49'
  },
  {
    img: 'moneza',
    rate_day: '0',
    max_sum: '15 000',
    sum: '3 000 ₽ – 15 000 ₽',
    time: '5 – 35 дней',
    documents: 'Паспорт',
    age: '20 - 65 лет',
    types: 'card interest-free',
    href: 'https://ad.admitad.com/g/ake6tr13zjf6662fc69ed4a4443fd37c19e8f576'
  }, {
    img: 'kviku',
    rate_day: '0',
    max_sum: '100 000',
    sum: '15 000 ₽ – 100 000 ₽',
    time: '1 – 365 дней',
    documents: 'Паспорт',
    age: '18 - 75 лет',
    types: 'interest-free',
    href: 'https://ad.admitad.com/g/sb3kabr75rf6662fc69e7ea1d259eb'
  },
  {
    img: 'odobrim_ru',
    rate_day: '0',
    max_sum: '100 000',
    sum: '15 000 ₽ – 100 000 ₽',
    time: '1 – 365 дней',
    documents: 'Паспорт',
    age: '18 - 75 лет',
    types: 'card interest-free',
    href: 'https://ad.admitad.com/g/ow43lk3gv9f6662fc69e05f3a4c90e4bcf88444c'
  }
]
// ************************************* Бизнесу ******************************
const business = [
  {
    img: 'yralsib_bank',
    tarif: '«Промо»',
    price: '0',
    platezh: '89 ₽ каждый платеж',
    perevod: 'до 100 000 ₽ в месяц — 0.5% от суммы',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/zkwzhm84g7f6662fc69e0c5d5f3f39'
  },
  {
    img: 'yralsib_bank',
    tarif: '«Промо Лайт»',
    price: '0',
    platezh: 'Всегда бесплатно',
    perevod: 'до 100 000 ₽ в месяц — 0.5% от суммы',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/zkwzhm84g7f6662fc69e0c5d5f3f39'
  },
  {
    img: 'yralsib_bank',
    tarif: '«Промо Лайт»',
    price: '1 400',
    platezh: '28 ₽ за каждый платеж',
    perevod: 'до 150 000 ₽ в месяц — бесплатно',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/zkwzhm84g7f6662fc69e0c5d5f3f39'
  },
  {
    img: 'loko_bank',
    tarif: '«Свой бизнес»',
    price: '0',
    platezh: '89 ₽ за каждый платеж',
    perevod: 'до 150 000 ₽ в месяц — бесплатно',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/zh83l50z7if6662fc69e978c67e1cd501dc068a5'
  },
  {
    img: 'loko_bank',
    tarif: '«Новый старт»',
    price: '490',
    platezh: '59 ₽ за каждый платеж',
    perevod: 'до 500 000 ₽ — 2% от суммы',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/zh83l50z7if6662fc69e978c67e1cd501dc068a5'
  },
  {
    img: 'loko_bank',
    tarif: '«Оптима»',
    price: '990',
    platezh: '29 ₽ за каждый платеж',
    perevod: 'до 500 000 ₽ — 2% от суммы',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/zh83l50z7if6662fc69e978c67e1cd501dc068a5'
  },
  {
    img: 'loko_bank',
    tarif: '«Безлимит»',
    price: '4 990',
    platezh: '50 платежей в месяц — бесплатно',
    perevod: 'до 500 000 ₽ в месяц — бесплатно',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/zh83l50z7if6662fc69e978c67e1cd501dc068a5'
  },
  {
    img: 'sfera_bank',
    tarif: '«S»',
    price: '0',
    platezh: '99 платежей в месяц — бесплатно',
    perevod: 'до 150 000 ₽ в месяц — бесплатно',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/t3m07lxi6jf6662fc69eb304c16832'
  },
  {
    img: 'sfera_bank',
    tarif: '«M»',
    price: '990',
    platezh: '10 платежей в месяц — бесплатно',
    perevod: 'до 400 000 ₽ в месяц — бесплатно',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/t3m07lxi6jf6662fc69eb304c16832'
  },
  {
    img: 'sfera_bank',
    tarif: '«L»',
    price: '4 990',
    platezh: 'Всегда бесплатно',
    perevod: 'до 700 000 ₽ в месяц — бесплатно',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/t3m07lxi6jf6662fc69eb304c16832'
  },
  {
    img: 'vtb_bank',
    tarif: '«На старте»',
    price: '0',
    platezh: '5 платежей в месяц — бесплатно',
    perevod: 'Всегда бесплатно',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/h05t8rzj40f6662fc69e29de5714dfb1892db078'
  },
  {
    img: 'vtb_bank',
    tarif: '«Самое важное»',
    price: '1 200',
    platezh: '30 платежей в месяц — бесплатно',
    perevod: 'Всегда бесплатно',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/h05t8rzj40f6662fc69e29de5714dfb1892db078'
  },
  {
    img: 'vtb_bank',
    tarif: '«Всё включено»',
    price: '1 900',
    platezh: '60 платежей в месяц — бесплатно',
    perevod: 'Всегда бесплатно',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/h05t8rzj40f6662fc69e29de5714dfb1892db078'
  },
  {
    img: 'rfzn_bank',
    tarif: '«Старт»',
    price: '0',
    platezh: '29 ₽ за каждый платеж',
    perevod: 'до 100 000 ₽ в месяц — бесплатно',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/833e3e951ef6662fc69ec94ddec88c27b96fcb67'
  },
  {
    img: 'rfzn_bank',
    tarif: '«Оптимум»',
    price: '1 490',
    platezh: '10 платежей в месяц — бесплатно',
    perevod: 'до 500 000 ₽ в месяц — бесплатно',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/833e3e951ef6662fc69ec94ddec88c27b96fcb67'
  },
  {
    img: 'rfzn_bank',
    tarif: '«Максимум»',
    price: '4 990',
    platezh: '60 платежей в месяц — бесплатно',
    perevod: 'до 700 000 ₽ в месяц — бесплатно',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/833e3e951ef6662fc69ec94ddec88c27b96fcb67'
  },
  {
    img: 'delo_bank',
    tarif: '«ДелоЛайт»',
    price: '690',
    platezh: '5 платежей в месяц — бесплатно',
    perevod: 'до 100 000 ₽ в месяц — бесплатно',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/gj0hxbysl4f6662fc69e560e2222c807f9ca299e'
  },
  {
    img: 'delo_bank',
    tarif: '«ДелоПро»',
    price: '2 590',
    platezh: '50 платежей в месяц — бесплатно',
    perevod: 'до 200 000 ₽ в месяц — бесплатно',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/gj0hxbysl4f6662fc69e560e2222c807f9ca299e'
  },
  {
    img: 'delo_bank',
    tarif: '«ДелоПро»',
    price: '7 990',
    platezh: '500 платежей в месяц — бесплатно',
    perevod: 'до 400 000 ₽ в месяц — бесплатно',
    agent: 'Всегда бесплатно',
    href: 'https://ad.admitad.com/g/gj0hxbysl4f6662fc69e560e2222c807f9ca299e'
  }
]
// ************************************* Кредитные карты ******************************
const credit_cards = [
  {
    img: 'alfa_card_red',
    bank_name: 'Альфа-Банк',
    card_name: 'Кредитная карта «Red»',
    rate_year: '11,99',
    max_sum: '500 000',
    period: 'до 100 дней',
    service: 'Бесплатное',
    cashback: 'Нет',
    sms: 'Бесплатное',
    href: 'https://ad.admitad.com/g/i352cbwpfvf6662fc69e1cb5598fffa4796d88f2'
  },
  {
    img: 'vtb_card_voz',
    bank_name: 'ВТБ Банк',
    card_name: 'Кредитная карта «Карта возможностей»',
    rate_year: '11,6',
    max_sum: '1 000 000',
    period: 'до 110 дней',
    service: 'Бесплатное',
    cashback: 'Бонусная система',
    sms: 'Бесплатное',
    href: 'https://ad.admitad.com/g/9q7skj02ftf6662fc69eeb1925566b915446d310'
  },
  {
    img: 'mts_card_weekend',
    bank_name: 'МТС Банк',
    card_name: 'Кредитная карта «Деньги Weekend»',
    rate_year: '24,9',
    max_sum: '299 999',
    period: 'до 51 дня',
    service: '1 200 руб. в год',
    cashback: 'до 8%',
    sms: '59 руб. в мес.',
    href: 'https://ad.admitad.com/g/wg8q5rp36yf6662fc69e7729367132afa29b73b4'
  },
  {
    img: 'mts_card_zero',
    bank_name: 'МТС Банк',
    card_name: 'Кредитная карта «Zero»',
    rate_year: '10',
    max_sum: '150 999',
    period: 'до 1100 дней',
    service: 'от 0 до 10 950 ₽ в год',
    cashback: 'до 8%',
    sms: '59 руб. в мес.',
    href: 'https://ad.admitad.com/g/wg8q5rp36yf6662fc69e7729367132287e1dccaf'
  },
  {
    img: 'mts_card_cashback',
    bank_name: 'МТС Банк',
    card_name: 'Кредитная карта «Cashback»',
    rate_year: '11,9',
    max_sum: '500 000',
    period: 'до 111 дней',
    service: 'Бесплатное',
    cashback: 'до 25%',
    sms: '59 руб. в мес.',
    href: 'https://ad.admitad.com/g/wg8q5rp36yf6662fc69e772936713241b016e88a'
  },
  {
    img: 'vostok_card_comfort',
    bank_name: 'Восточный банк',
    card_name: 'Кредитная карта «Комфорт»',
    rate_year: '11,5',
    max_sum: '400 000',
    period: 'до 56 дней',
    service: 'Бесплатное',
    cashback: 'Бонусная система',
    sms: '99 руб. в мес.',
    href: 'https://ad.admitad.com/g/q5samsi2s0f6662fc69e5c5038e7bc39e94a4251'
  },
  {
    img: 'rfzn_card_110',
    bank_name: 'Райффайзенбанк',
    card_name: 'Кредитная карта «110 дней»',
    rate_year: '26',
    max_sum: '600 000',
    period: 'до 110 дней',
    service: 'Бесплатное',
    cashback: 'Нет',
    sms: '60 руб. в мес.',
    href: 'https://ad.admitad.com/g/5lc9j54svof6662fc69e7e9a9b85a9e7f5ae4871'
  },
  {
    img: 'atb_card_universalnaya',
    bank_name: 'АТБ',
    card_name: 'Кредитная карта «Универсальная»',
    rate_year: '15',
    max_sum: '500 000',
    period: 'до 120 дней',
    service: 'Бесплатное',
    cashback: 'до 10%',
    sms: '89 руб. в мес.',
    href: 'https://ad.admitad.com/g/0by6fwpjopf6662fc69ef7dc54e84e58dd9d44b5'
  }
]
// ************************************* Дебетовые карты ******************************
const debit_cards = [
  {
    img: 'sber_card_sbercard',
    bank_name: 'СберБанк',
    card_name: 'Дебетовая карта «СберБанка»',
    cashback: '30',
    service: '0 - 1 800',
    ostatok: 'Нет',
    sms: 'от 0 до 60 руб. в мес.',
    bonus: 'Супермаркеты, заправки, для путешествий, сотовые операторы, игры, другое',
    href: 'https://ad.admitad.com/g/8jmoqdn6vyf6662fc69efa586a65e5a9b26882a8'
  },
  {
    img: 'yral_card_pora',
    bank_name: 'Уральский банк',
    card_name: 'Дебетовая карта «ПОРÁ»',
    cashback: '6',
    service: '0 - 1 188',
    ostatok: 'до 6%',
    sms: 'от 0 до 59 руб. в мес.',
    bonus: 'Для путешествий, заправки, игры, супермаркеты, другое',
    href: 'https://ad.admitad.com/g/feilwnp1g1f6662fc69eda419afb670f8f7ed0a0'
  },
  {
    img: 'rosbank_card_vse',
    bank_name: 'Росбанк',
    card_name: 'Дебетовая карта «#МожноВСЁ»',
    cashback: '10',
    service: '599 - 2 987',
    ostatok: 'Нет',
    sms: '89 руб. в мес.',
    bonus: 'Для путешествий',
    href: 'https://ad.admitad.com/g/kg0hbofr85f6662fc69e8560502dd93febb37739'
  },
  {
    img: 'rfzn_card_cashback',
    bank_name: 'Райффайзенбанк',
    card_name: 'Дебетовая карта «Кэшбэк»',
    cashback: '1,5',
    service: '0',
    ostatok: 'Нет',
    sms: '60 руб. в мес.',
    bonus: 'Нет',
    href: 'https://ad.admitad.com/g/5lc9j54svof6662fc69e7e9a9b85a98a3e9f5915'
  },
  {
    img: 'alfa_card_preimu',
    bank_name: 'Альфа-банк',
    card_name: 'Дебетовая карта «С преимуществами»',
    cashback: '2',
    service: '0',
    ostatok: 'до 5%',
    sms: '99 руб. в мес.',
    bonus: 'Нет',
    href: 'https://ad.admitad.com/g/0by6fwpjopf6662fc69ef7dc54e84e47dea1e352'
  }
]
// ************************************* Кредиты в банке ******************************
const credits_banks = [
  {
    img: 'yral_bank',
    rate_year: '6,3',
    max_sum: '5 000 000',
    sum: '14 999 ₽ – 5 000 000 ₽',
    time: '3 – 10 лет',
    age: 'от 19 до 75 лет',
    documents: 'Паспорт РФ, регистрация, подтверждение дохода',
    types: ['На карту'],
    href: 'https://ad.admitad.com/g/feilwnp1g1f6662fc69eda419afb67907ed1d94b'
  },
  {
    img: 'loko_bank',
    rate_year: '7',
    max_sum: '5 000 000',
    sum: '50 000 ₽ – 5 000 000 ₽',
    time: '13 – 84 месяца',
    age: 'от 21 до 75 лет',
    documents: 'Паспорт РФ, регистрация, подтверждение дохода',
    types: ['На карту', 'Наличными'],
    href: 'https://ad.admitad.com/g/zh83l50z7if6662fc69e978c67e1cdbd0ca09907'
  },
  {
    img: 'vtb_bank',
    rate_year: '6,4',
    max_sum: '5 000 000',
    sum: '50 000 ₽ – 5 000 000 ₽',
    time: '12 – 84 месяца',
    age: 'от 21 до 75 лет',
    documents: 'Паспорт РФ, СНИЛС, регистрация, подтверждение дохода',
    types: ['На карту', 'Наличными'],
    href: 'https://ad.admitad.com/g/9q7skj02ftf6662fc69eeb1925566b0ce55263a6'
  },
  {
    img: 'mts_bank',
    rate_year: '6,9',
    max_sum: '5 000 000',
    sum: '20 000 ₽ – 5 000 000 ₽',
    time: '12 – 60 месяца',
    age: 'от 20 до 75 лет',
    documents: 'Паспорт РФ, регистрация, подтверждение дохода',
    types: ['На карту', 'Наличными'],
    href: 'https://ad.admitad.com/g/wg8q5rp36yf6662fc69e7729367132fe00de1c79'
  },
  {
    img: 'vostok_bank',
    rate_year: '9',
    max_sum: '1 500 000',
    sum: '25 000 ₽ – 1 500 000 ₽',
    time: '12 – 60 месяца',
    age: 'от 21 до 75 лет',
    documents: 'Паспорт РФ, СНИЛС, регистрация, подтверждение дохода',
    types: ['На карту', 'Наличными'],
    href: 'https://ad.admitad.com/g/q5samsi2s0f6662fc69e5c5038e7bc44aa2554c4'
  },
  {
    img: 'poydem_bank',
    rate_year: '5,55',
    max_sum: '300 000',
    sum: '50 000 ₽ – 300 000 ₽',
    time: '13 – 36 месяца',
    age: 'от 22 до 75 лет',
    documents: 'Паспорт, регистрация, подтверждение дохода',
    types: ['На карту', 'Наличными'],
    href: 'https://ad.admitad.com/g/q5samsi2s0f6662fc69e5c5038e7bc44aa2554c4'
  },
  {
    img: 'skb_bank',
    rate_year: '6,1',
    max_sum: '1 500 000',
    sum: '51 000 ₽ – 1 500 000 ₽',
    time: '12 – 60 месяца',
    age: 'от 23 до 70 лет',
    documents: 'Паспорт РФ, регистрация, подтверждение дохода',
    types: ['На карту', 'Наличными'],
    href: 'https://ad.admitad.com/g/rbdm41tqs0f6662fc69e4ac130ec8b'
  },
  {
    img: 'rfzn_bank',
    rate_year: '7,99',
    max_sum: '2 000 000',
    sum: '90 000 ₽ – 2 000 000 ₽',
    time: '13 – 60 месяца',
    age: 'от 23 до 67 лет',
    documents: 'Паспорт РФ, регистрация, подтверждение дохода',
    types: ['Наличными'],
    href: 'https://ad.admitad.com/g/5lc9j54svof6662fc69e7e9a9b85a9d24bf08827'
  },
  {
    img: 'alfa_bank',
    rate_year: '6,5',
    max_sum: '5 000 000',
    sum: '90 000 ₽ – 5 000 000 ₽',
    time: '13 – 60 месяца',
    age: 'от 21 до 75 лет',
    documents: 'Паспорт РФ, СНИЛС, подтверждение дохода',
    types: ['На карту', 'Наличными'],
    href: 'https://ad.admitad.com/g/0by6fwpjopf6662fc69ef7dc54e84e6f2b9264db'
  },
  {
    img: 'alfa_bank',
    rate_year: '6,5',
    max_sum: '5 000 000',
    sum: '90 000 ₽ – 5 000 000 ₽',
    time: '13 – 60 месяца',
    age: 'от 21 до 75 лет',
    documents: 'Паспорт РФ, СНИЛС, подтверждение дохода',
    types: ['На карту', 'Наличными'],
    href: 'https://ad.admitad.com/g/0by6fwpjopf6662fc69ef7dc54e84e6f2b9264db'
  }
]
// ************************************* Под залог ******************************
const credits_podzalog = [
  {
    img: 'tinkoff_bank',
    rate_year: '7,9',
    max_sum: '3 000 000',
    sum: '100 000 ₽ – 3 000 000 ₽',
    time: '12 – 60 месяца',
    age: 'от 21 до 75 лет',
    documents: 'Паспорт РФ, СТС, ПТС',
    types: ['Под залог авто'],
    href: 'https://ad.admitad.com/g/gwo1s041yof6662fc69e2ead7bb238c45866d21a'
  },
  {
    img: 'tinkoff_bank',
    rate_year: '6,9',
    max_sum: '15 000 000',
    sum: '200 000 ₽ – 3 000 000 ₽',
    time: '1 – 15 лет',
    age: 'от 21 до 75 лет',
    documents: 'Паспорт РФ, СНИЛС',
    types: ['Под залог недвижимости'],
    href: 'https://ad.admitad.com/g/gwo1s041yof6662fc69e2ead7bb2384e1d3ca730'
  }
]
// ************************************* Рефинансирование кредитов ******************************
const credits_refinancing = [
  {
    img: 'yral_bank',
    rate_year: '6,5',
    max_sum: '5 000 000',
    sum: '100 000 ₽ – 5 000 000 ₽',
    time: '36 – 120 месяца',
    age: 'от 19 до 75 лет',
    documents: 'Паспорт РФ, подтверждение дохода',
    href: 'https://ad.admitad.com/g/feilwnp1g1f6662fc69eda419afb673228bb1aa7'
  },
  {
    img: 'vtb_bank',
    rate_year: '6,4',
    max_sum: '5 000 000',
    sum: '100 000 ₽ – 5 000 000 ₽',
    time: '12 – 84 месяца',
    age: 'от 21 до 75 лет',
    documents: 'Паспорт РФ, СНИЛС, регистрация, подтверждение дохода',
    href: 'https://ad.admitad.com/g/9q7skj02ftf6662fc69eeb1925566bb445572836'
  },
  {
    img: 'mts_bank',
    rate_year: '5,9',
    max_sum: '5 000 000',
    sum: '100 000 ₽ – 5 000 000 ₽',
    time: '12 – 60 месяца',
    age: 'от 20 до 75 лет',
    documents: 'Паспорт РФ, регистрация, подтверждение дохода',
    href: 'https://ad.admitad.com/g/wg8q5rp36yf6662fc69e7729367132bf3d92fd80'
  },
  {
    img: 'ros_bank',
    rate_year: '6,5',
    max_sum: '3 000 000',
    sum: '50 000 ₽ – 3 000 000 ₽',
    time: '13 – 84 месяца',
    age: 'от 21 до 75 лет',
    documents: 'Паспорт РФ, подтверждение дохода',
    href: 'https://ad.admitad.com/g/kg0hbofr85f6662fc69e8560502dd94fdb7d2898'
  },
  {
    img: 'rfzn_bank',
    rate_year: '7,99',
    max_sum: '2 000 000',
    sum: '90 000 ₽ – 2 000 000 ₽',
    time: '13 – 60 месяца',
    age: 'от 23 до 67 лет',
    documents: 'Паспорт РФ, регистрация, подтверждение дохода',
    href: 'https://ad.admitad.com/g/5lc9j54svof6662fc69e7e9a9b85a97b527f254c'
  },
  {
    img: 'alfa_bank',
    rate_year: '6,5',
    max_sum: '5 000 000',
    sum: '90 000 ₽ – 5 000 000 ₽',
    time: '13 – 60 месяца',
    age: 'от 21 до 75 лет',
    documents: 'Паспорт РФ, СНИЛС, подтверждение дохода',
    href: 'https://ad.admitad.com/g/0by6fwpjopf6662fc69ef7dc54e84e05e68495e0'
  },
  {
    img: 'metalinvest_bank',
    rate_year: '6,8',
    max_sum: '5 000 000',
    sum: '90 000 ₽ – 5 000 000 ₽',
    time: '13 – 84 месяца',
    age: 'от 21 до 65 лет',
    documents: 'Паспорт РФ, регистрация, подтверждение дохода',
    href: 'https://ad.admitad.com/g/0by6fwpjopf6662fc69ef7dc54e84e05e68495e0'
  }
]
// ************************************* Автокредиты ******************************
const car_credits = [
  {
    img: 'vtb_bank',
    rate_year: '1',
    max_sum: '7 000 000',
    sum: '100 000 ₽ – 7 000 000 ₽',
    time: '12 – 84 месяца',
    age: 'от 21 до 65 лет',
    documents: 'Паспорт РФ, регистрация, водительское удостоверение',
    href: 'https://ad.admitad.com/g/9q7skj02ftf6662fc69eeb1925566b5c65c37539'
  },
  {
    img: 'tinkoff_bank',
    rate_year: '7,9',
    max_sum: '3 000 000',
    sum: '100 000 ₽ – 3 000 000 ₽',
    time: '1 – 5 лет',
    age: 'от 21 до 75 лет',
    documents: 'Паспорт РФ, водительское удостоверение',
    href: 'https://ad.admitad.com/g/gwo1s041yof6662fc69e2ead7bb2389344e13066'
  }
]
// ************************************* Страхование ******************************
const insurance = [
  {
    img: 'polis',
    title: 'Позволяет получить компенсацию в случае заражения или смерти от COVID-19',
    href: 'https://ad.admitad.com/g/m7xuhz7yswf6662fc69e440db5965d12de6a9a23'
  },
{
    img: 'rosgosstrah',
    title: 'Оформите электронный полис ОСАГО онлайн без очередей и походов в офис',
    href: 'https://ad.admitad.com/g/4yxtfpyjnzf6662fc69ea5fa6cb8508f04ca5db6'
  },
{
    img: 'rosgosstrah',
    title: 'Полис страхования поездок «Поехали!» Для поездок за рубеж и по России',
    href: 'https://ad.admitad.com/g/kbyno4saobf6662fc69e778a607de47d14d1aadb'
  },
{
    img: 'strahovka_ru',
    title: 'Годовой страховой полис для квартир онлайн и без встречи с осмотрщиком',
    href: 'https://ad.admitad.com/g/kbyno4saobf6662fc69e778a607de47d14d1aadb'
  },
{
    img: 'strahovka_ru',
    title: 'Рассчитать и купить полис ОСАГО онлайн для любого авто онлайн',
    href: 'https://ad.admitad.com/g/w2fc6xpexpf6662fc69eed34f7988c19a2ad5182'
  },
{
    img: 'kaplife',
    title: 'Застраховать жизнь и здоровье на международном уровне по программе “Медэксперт”',
    href: 'https://ad.admitad.com/g/mviaibd80tf6662fc69e6512512e41'
  },
{
    img: 'kaplife',
    title: 'Медицинское онлайн-страхование жизни и здоровья «Стоп.Коронавирус»',
    href: 'https://ad.admitad.com/g/rt4dz7i43cf6662fc69ee0d2a432bc37dd6a69af'
  },
{
    img: 'kaplife',
    title: 'Защита на случай осложнений после вакцинации, включая вакцину от COVID-19»',
    href: 'https://ad.admitad.com/g/rt4dz7i43cf6662fc69ee0d2a432bc849ca30e19'
  }
]