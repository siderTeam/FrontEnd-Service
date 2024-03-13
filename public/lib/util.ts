import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name: string, value: string, option?: any) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const deleteCookie = (name: string) => {
  const expireDate = new Date();
  expireDate.setDate(expireDate.getDate() - 1);
  document.cookie = name + '= ' + '; expires=' + expireDate.toUTCString() + '; path=/';
};

export const autoHyphen = (target: any) => {
  return target.value
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
    .replace(/(\-{1,2})$/g, '');
};
