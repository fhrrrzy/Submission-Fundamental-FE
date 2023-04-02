const getElement = (id) => document.getElementById(id);

export const showBackdrop = () => {
  getElement("backdrop").classList.add("flex");
  getElement("backdrop").classList.remove("hidden");
  document.querySelector("html").classList.add("overflow-y-hidden");
};

export const hideBackdrop = () => {
  getElement("backdrop").classList.add("hidden");
  getElement("backdrop").classList.remove("flex");
  document.querySelector("html").classList.remove("overflow-y-hidden");
};

export const showSpinner = () => {
  getElement("spinner").classList.remove("hidden");
};

export const hideSpinner = () => {
  getElement("spinner").classList.add("hidden");
};

export const showModalDetail = () => {
  getElement("modal-detail").classList.remove("hidden");
};

export const hideModalDetail = () => {
  getElement("modal-detail").classList.add("hidden");
};
