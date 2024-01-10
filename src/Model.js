/** Базовая модель для данных */
export class Model {
  constructor(props = {}, onChange = null) {
    this.#initProps(props);
    this.#onChange = onChange;
  }

  #onChange;
  $props = {};

  /** Инициализируем базовые поля модели которые пришли с сервера */
  #initProps(props) {
    for (let key in props) {
      Object.defineProperty(this.$props, key, {
        get() {
          return this.hasOwnProperty(`#${key}`) ? this[`#${key}`] : props[key];
        },
        set(value) {
          this[`#${key}`] = value;
        }
      });
    }
  }

  /** Получить значение поля */
  get(prop) {
    this.propertyIsExist(prop, true);
    return this.$props[prop];
  }

  /** Устанвоить значение поля */
  set(prop, value) {
    this.propertyIsExist(prop, true);
    this.$props[prop] = value;
    this.#onChange && this.#onChange(prop, value);
  }

  /** Установить сразу несколько полей */
  setProps(props) {
    for (let key in props) {
      this.set(key, props[key]);
    }
  }

  /** Копирвоать модель */
  clone() {
    return Object.create(this);
  }

  /** Проверить наличие поля в модели */
  propertyIsExist(prop, throwError = false) {
    if (!this.$props.hasOwnProperty(prop) && throwError) {
      throw Error(`In Model not exist property named ${prop}`);
    }
  }
}
