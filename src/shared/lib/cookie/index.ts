export const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();

  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

  const expiresString = `expires=${expires.toUTCString()}`;

  document.cookie = `${name}=${value}; ${expiresString}; path=/`;
};

export const getCookie = (name: string): string | undefined => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return undefined;
};

export const deleteCookie = (name: string) => {
  setCookie(name, "", -1); // Устанавливаем срок действия cookie на прошлую дату
};
