/** URL адрес API */
export const API_URL = process.env.VUE_APP_API_URL;

/**
 * Возвращает ссылку на изображение по идентификатору, например, изображение митапа
 * @param imageId {number} - идентификатор изображения
 * @return {string} - ссылка на изображение
 */
export function getImageUrlByImageId(imageId) {
  return `${API_URL}/images/${imageId}`;
}

/**
 * Получает список митапов с API
 * @return {Promise}
 */
export async function fetchMeetups() {
  return fetch(`${API_URL}/meetups`).then((res) => res.json());
}
