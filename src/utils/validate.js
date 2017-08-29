import Vue from 'vue';
import VeeValidate , { Validator } from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';


/* 是否是公司邮箱*/
export function isWscnEmail(str) {
  const reg = /^[a-z0-9](?:[-_.+]?[a-z0-9]+)*@wallstreetcn\.com$/i;
  return reg.test(str.trim());
}
export function use_vee_validate() {


  Validator.addLocale(zh_CN);

  const dictionary = {
    zh_CN: {
      messages: {
        required: (field) => {
          if (field == 'password')
            return '密码不能为空'
          else
            return field + '不能为空'
        }
      }
    }
  };
  Validator.updateDictionary(dictionary);

  const config = {
    locale: 'zh_CN'
  };
  Vue.use(VeeValidate,config);
}
