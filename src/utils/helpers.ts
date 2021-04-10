export function convertMapToObject(map: Map<any, any>) {
  let obj: { [key: string]: any } = {};
  for (let [key, value] of map) {
    let data: any;
    switch (value) {
      case isNumber(value) || isString(value):
        data = value;
        break;
      case isArray(value):
        data = [...value];
        break;
      default:
        // we'll assume it is an object is none of the prev
        data = { ...value };
    }

    obj[key] = data;
  }

  return obj;
}

function isNumber(val: any) {
  return typeof val === 'number';
}

function isString(val: any) {
  return typeof val === 'string';
}

function isArray(val: any) {
  return Array.isArray(val);
}
