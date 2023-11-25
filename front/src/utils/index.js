const APP_ENV = "development";

export const url =
  APP_ENV === "development" ? "http://localhost:8080" : "www.example.com";

export const getHostname = (imgFile) => {
  return `${url}/${imgFile}`;
};

export const limitString = (str, limit) => {
  if (str.length > limit) {
    return str.slice(0, limit).concat("...");
  }
  return str;
};
