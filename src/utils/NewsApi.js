import { checkResponse } from './MainApi';

const date = new Date();
const last = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
const day = last.getDate();
const month = last.getMonth() + 1;
const year = last.getFullYear();

const BaseUrl = 'https://nomoreparties.co/news/v2/everything';
const from = year + '/' + month + '/' + day;
const to = date;
const API_KEY = 'd31dde7958144bc6a80308252f4c4ee7';
const pageSize = '100';

export const getInitialCards = (keyWord) => {
  return fetch(
    `${BaseUrl}?q=${keyWord}&apiKey=${API_KEY}&from=${from}&to=${to}&pageSize=${pageSize}`
  ).then((res) => checkResponse(res));
};
