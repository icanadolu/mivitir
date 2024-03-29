import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';



i18n.use(initReactI18next).init({
  resources:{
    en:{
      translations:{
        'Sign Up':'Sign Up',
        'Password mismatch':'Password mismatch',
        'Username': 'Username',
        'Display Name': 'Display Name',
        'Password': 'Password',
        'Password Repeat': 'Password Repeat',
        'Login': 'Login',
        'logout':'logout',
        'Users':'Users',
        'Next': 'next>',
        'Previous' : '< previous',
        'Load Failure':'Load Failure'
      }
    },
    tr:{
      translations:{
        'Sign Up':'Kayıt Ol',
        'Password mismatch':'Aynı sifreyi giriniz.',
        'Username': 'Kullanıcı Adı',
        'Display Name': 'İsim',
        'Password': 'Şifre',
        'Password Repeat': 'Şifreyi Tekrarla',
        'Login': 'Giriş Yap',
        'logout': 'Çıkış Yap',
        'Users':'Kullanıcılar',
        'Next' : "sonraki >",
        'Previous' : '< önceki',
        'Load Failure':'Liste Alınamadı'
      }
    }
  },
  fallbackLng: 'tr',
  ns:['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  interpolation:{
    escapeValue: false,
    formatSeparator: ','
  },
  react:{
    wait:true
  }
});


export default i18n;
