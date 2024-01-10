import { useState } from 'react';
import { paramsTitles } from './Constants';

/** Компонент редактора настроек продукта */
export default ({ params, model }) => {
  const paramValues = model.get('paramValues');

  /** Выбранные настройки */
  const [selectedParams, setSelectedParams] = useState(paramValues.selected);

  /** Изменяем значение параметра */
  const changeParam = (paramName, e) => {
    const value = e.target.value;

    // меняем выбранную опцию
    const newSelected = { ...selectedParams };
    newSelected[paramName] = value;
    setSelectedParams(newSelected);

    // обновляем значение в модели
    model.set('selectedParams', { id: value, name: paramName });
  };

  /** Вроде не нужен но оставляю по заданию */
  const getModel = () => {
    return model;
  };

  return (
    <div id="root">
      <div className="paramsEditor">
        {params.map((param, index) => {
          return (
            <div
              key={index}
              className="paramsEditor__param"
              style={{
                padding: 6,
                width: 180,
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <span className="paramsEditor__param_name">
                <b>{`${paramsTitles[param.name]}:`}</b>
              </span>
              <select
                className="paramsEditor__param_selector"
                onChange={(e) => changeParam(param.name, e)}
              >
                {paramValues.data[param.name].map((paramValue) => (
                  <option key={paramValue.id} value={paramValue.id}>
                    {paramValue.value}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
};
