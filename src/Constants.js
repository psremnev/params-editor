import { ProductModel } from './ProductModel';

// ответ с сервера по настройкам продукта
const serverResponse = {
  // список вариантов
  paramValues: {
    selected: {
      style: 1,
      size: 1
    },
    data: {
      style: [
        { id: 1, value: 'Повседневный' },
        { id: 2, value: 'Деловой' },
        { id: 3, value: 'Молодежный' }
      ],
      size: [
        { id: 1, value: 'Макси' },
        { id: 2, value: 'Средний' },
        { id: 3, value: 'Мини' }
      ]
    }
  }
};

// создаем модель продукта, заполняем полями с сервера
const productModel = new ProductModel(serverResponse);

// ВАЖНО: отображаемые настройки продукта из опции по сути можно убрать, если с сервера будут приходит только нужные настройки по товару
const visibleParams = [
  { id: 1, name: 'style', type: 'string' },
  { id: 1, name: 'size', type: 'string' }
];

const paramsTitles = {
  style: 'Стиль',
  size: 'Размер'
};

export { serverResponse, productModel, visibleParams, paramsTitles };
