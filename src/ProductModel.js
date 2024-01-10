import { Model } from './Model';

/** Модель продукта */
export class ProductModel extends Model {
  // для расширения модели переопределяем $props
  $props = Object.defineProperties(this.$props, {
    selectedParams: {
      set(value) {
        // тут можно огранизовать обновление значения на сервере
        console.log(
          `Значение на сервере обновлено на ${JSON.stringify(value)}`
        );
      }
    }
  });
}
