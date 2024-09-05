import Cookies from "js-cookie";

export const setCookie = (name: string, data: string, time: number) => {
    Cookies.set(name, data, { expires: time, sameSite: "Strict" });
};

export const getCookie = (name: string) => {
    return Cookies.get(name);
};

export const removeCookie = (name: string) => {
    Cookies.remove(name);
};
