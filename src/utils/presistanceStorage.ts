export function getItem(key: string)  {
  const value = localStorage.getItem(key)
  if (typeof value === 'string') {
    try {
      return JSON.parse(value)
    } catch(e) {
      console.log('getItem', e);
      return null;
    }
  }
  return null;
}

export function setItem(key: string, data: any) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch(e) {
    console.log('setItem', e);
  }
}
