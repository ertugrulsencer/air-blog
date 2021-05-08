const state = {
  informations: {},
  socialMediaLinks: [],
  about: [],
};
const getters = {
  personalInfo(state) {
    return state.informations;
  },
  socialMedia(state) {
    return state.socialMediaLinks;
  },
  aboutMe(state) {
    return state.about;
  },
};
const mutations = {
  setInfo(state, data) {
    state.informations = data;
  },
  setSocialMedia(state, data) {
    state.socialMediaLinks = data;
  },
  setAbout(state, data) {
    state.about = data;
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
  getAbout(context) {
    let data = [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim a delectus praesentium commodi perspiciatis voluptas aliquam harum veritatis similique qui dolor deserunt aspernatur eum sed perferendis explicabo, nulla eaque.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi autem est impedit porro nulla! Ratione, itaque labore reprehenderit possimus et sint adipisci sequi debitis accusamus, repellendus magnam expedita ducimus minima cumque quae eius optio eos non exercitationem. Voluptat esunt eveniet ex quos aspernatur repellat similique id odio, iusto facilis expedita rerum consequatur veritatis molestiae eaque quasi, possimus nemo ipsam illum.",
      "Fusce rhoncus facilisis leo nec hendrerit. Mauris faucibus, justo ut consequat posuere, orci sem finibus dolor, in dignissim nisl nisl ac augue. Quisque rutrum dolor sit amet mollis elementum. Praesent posuere nisi placerat interdum bibendum. Nullam elementum pretium aliquam. Vivamus nec nisl eu justo ultricies rhoncus. Vivamus at blandit est, quis gravida ipsum. Ut imperdiet, diam ut pharetra gravida, mauris ex scelerisque sapien, id fringilla risus eros rhoncus urna. Maecenas cursus vulputate justo, at luctus ligula sagittis id. ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat viverra euismod. Nam sollicitudin et mi non consequat. Nullam et condimentum ex, in accumsan nisi. Mauris tempor ante arcu, ut sagittis magna sollicitudin at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse in nunc a neque pretium iaculis non a nisl. Sed hendrerit ex sapien, in pellentesque urna vulputate quis. ",
    ];
    context.commit("setAbout", data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
