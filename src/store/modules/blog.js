const state = {
  blogList: [],
};
const getters = {
  blogList(state) {
    return state.blogList;
  },
  recentlyAddedBlog(state) {
    return state.blogList.slice(0, 3);
  },
};
const mutations = {
  updateBlogList(state, blog) {
    state.blogList = blog;
  },
};
const actions = {
  getBlogList(context) {
    let data = [
      {
        key: "-jiuy9Yh98hg7tyG",
        header: "C Sharp Console Uygulaması",
        description:
          "C Sharp Console Uygulaması Lorem ipsum dolar sit amet ile Visual Studio kullanarak bir uygulama oluşturmamız gerekmektedir. Ama Visual Studio ve C Sharp hiç güzel bir dil değil.. C Sharp Console Uygulaması Lorem ipsum dolar sit amet ile Visual Studio kullanarak bir uygulama oluşturmamız gerekmektedir. Ama Visual Studio ve C Sharp hiç güzel bir dil değil..",
      },
      {
        key: "-jiuy9Yh98hg7tyG",
        header: "Php Oturum Kontrol Uygulaması",
        description:
          "Php ile Lorem ipsum dolar sit amet PhpStorm kullanarak bir proje oluşturmamız gerekmektedir. Daha sonra php taglarını açarak kodlamaya başlayalım. Php ile Lorem ipsum dolar sit amet PhpStorm kullanarak bir proje oluşturmamız gerekmektedir. Daha sonra php taglarını açarak kodlamaya başlayalım. ",
      },
      {
        key: "-jiuy9Yh98hg7tyG",
        header: "C Sharp Console Uygulaması",
        description:
          "C Sharp Console Uygulaması Lorem ipsum dolar sit amet ile Visual Studio kullanarak bir uygulama oluşturmamız gerekmektedir. Ama Visual Studio ve C Sharp hiç güzel bir dil değil.. C Sharp Console Uygulaması Lorem ipsum dolar sit amet ile Visual Studio kullanarak bir uygulama oluşturmamız gerekmektedir. Ama Visual Studio ve C Sharp hiç güzel bir dil değil..",
      },
      {
        key: "-jiuy9Yh98hg7tyG",
        header: "Php Oturum Kontrol Uygulaması",
        description:
          "Php ile Lorem ipsum dolar sit amet PhpStorm kullanarak bir proje oluşturmamız gerekmektedir. Daha sonra php taglarını açarak kodlamaya başlayalım. Php ile Lorem ipsum dolar sit amet PhpStorm kullanarak bir proje oluşturmamız gerekmektedir. Daha sonra php taglarını açarak kodlamaya başlayalım. ",
      },
      {
        key: "-jiuy9Yh98hg7tyG",
        header: "C Sharp Console Uygulaması",
        description:
          "C Sharp Console Uygulaması Lorem ipsum dolar sit amet ile Visual Studio kullanarak bir uygulama oluşturmamız gerekmektedir. Ama Visual Studio ve C Sharp hiç güzel bir dil değil.. C Sharp Console Uygulaması Lorem ipsum dolar sit amet ile Visual Studio kullanarak bir uygulama oluşturmamız gerekmektedir. Ama Visual Studio ve C Sharp hiç güzel bir dil değil..",
      },
    ];
    context.commit("updateBlogList", data);
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
