const state = {
  informations: {},
  socialMediaLinks: [],
};
const getters = {
  personalInfo(state) {
    return state.informations;
  },
  socialMedia(state) {
    return state.socialMediaLinks;
  },
};
const mutations = {
  setInfo(state, data) {
    state.informations = data;
  },
  setSocialMedia(state, data) {
    state.socialMediaLinks = data;
  },
};
const actions = {
  getInfo(context) {
    let data = {
      name: "Ertuğrul Sencer UZUN",
      about:
        "Merhaba arkadaşlar, 11 yaşımda C Sharp ile başladığım yazılım kariyerime son 5 denedir Front End yaparak devam ediyorum. Edindiğim bilgileri sizlere aktrmak için bu bloğu açtım. Çok güzel dersler planlıyorum, beklemede kalın :)",
      avatar:
        "https://ertugrulsencer.github.io/sencertugrul.com/images/avatar.jpg",
    };
    context.commit("setInfo", data);
  },
  getSocialMediaLinks(context) {
    let data = [
      {
        url: "https://instagram.com/ertugrulsencer_/",
        icon: "fab fa-instagram",
      },
      {
        url: "https://youtube.com/",
        icon: "fab fa-youtube",
      },
      {
        url: "https://sencertugrul.online/",
        icon: "fas fa-globe",
      },
    ];
    context.commit("setSocialMedia", data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
