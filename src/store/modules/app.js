import Cookies from 'js-cookie';

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1);
        $('.left1').hide();
        $('.left2').show();

        $('.res-path').parent('li').parent('ul').parent('div').parent('li').removeClass('left-background');
        $('.res-path').parent('li').removeClass('left-background');
        $('.res-path').parent('div').parent('li').removeClass('left-background');
        for(var i=0;i<$('.res-path').length;i++){
          var path=$('.res-path').eq(i).text();
          if(location.hash.substring(1)==path){
            $('.res-path').eq(i).parent('li').parent('ul').parent('div').parent('li').addClass('left-background');
            $('.res-path').eq(i).parent('li').addClass('left-background');
            $('.res-path').eq(i).parent('div').parent('li').addClass('left-background');
          }
          else{}
        }
      } else {
        Cookies.set('sidebarStatus', 0);
        $('.left2').hide();
        $('.left1').show();
        //leftblue()
        $('.res-path').parent('li').parent('ul').parent('div').parent('li').removeClass('left-background');
        $('.res-path').parent('li').removeClass('left-background');
        $('.res-path').parent('div').parent('li').removeClass('left-background');
        $('.left1 div').find('ul').slideUp(0)
        $('.left1 div a i:last-child').removeClass('fanzhuan')
        for(var i=0;i<$('.left1 .res-path').length;i++){
          var path=$('.res-path').eq(i).text();
          if(location.hash.substring(1)==path){
            console.log($('.res-path').eq(i).parent('li').parent('ul').siblings('a').children('i:last-child')[0]);
            $('.res-path').eq(i).parent('li').parent('ul').siblings('a').children('i:last-child').addClass('fanzhuan');
            $('.res-path').eq(i).parent('li').parent('ul').slideDown(400);
            console.log($('.res-path').eq(i).parent('li').parent('ul').css('display'));
            $('.res-path').eq(i).parent('li').addClass('left-background');
            $('.res-path').eq(i).parent('div').parent('li').addClass('left-background');
          }
          else{}
        }


      }
      state.sidebar.opened = !state.sidebar.opened;
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    }
  }
};

export default app;
// collapse-tramsition v-enter-active v-enter-to
