import { cloneDeep } from 'lodash';

export const updateProperty = (item, property, newValue) => {
  let updatedItem = cloneDeep(item);
  updatedItem[`${property}`] = newValue;

  return updatedItem;
};
