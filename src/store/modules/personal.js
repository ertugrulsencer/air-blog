const state = {
  informations: {},
};
const getters = {
  personalInfo(state) {
    return state.informations;
  },
};
const mutations = {
  setInfo(state, data) {
    state.informations = data;
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
};

export default {
  state,
  getters,
  mutations,
  actions,
};
