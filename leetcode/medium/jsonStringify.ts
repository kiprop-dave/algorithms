// Create a json string without using the builtin JSON.stringify()

function jsonStringify(object: any): string {
  if (typeof object !== 'object' || object === null) {
    if (typeof object === 'string') {
      return `"${object}"`; // Add quotation marks for string values
    }
    return String(object); // Convert non-object values to string
  }
  
  if (Array.isArray(object)) {
    const elements = object.map(element => jsonStringify(element));
    return `[${elements.join(',')}]`; // Convert array elements recursively
  }

  const properties = Object.keys(object).map(key => {
    const value = jsonStringify(object[key]);
    return `"${key}":${value}`;
  });

  return `{${properties.join(',')}}`;
};
