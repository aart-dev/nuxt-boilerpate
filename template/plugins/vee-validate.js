import Vue from 'vue'
import ko from 'vee-validate/dist/locale/ko'
import zhCN from 'vee-validate/dist/locale/zh_CN'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import en from 'vee-validate/dist/locale/en'
import ja from 'vee-validate/dist/locale/ja'
import VeeValidate, { Validator } from 'vee-validate'

const customKo = {
  custom: {
    sample: {
      required: '브랜드명 또는 회사명을 입력하세요.'
    }
  }
}

const customZhCn = {
  custom: {
    sample: {
      required: '[CN]请输入品牌名称或公司名称。'
    }
  }
}

const customZhTw = {
  custom: {
    sample: {
      required: '[TW]請輸入品牌名稱或公司名稱'
    }
  }
}

const customEn = {
  custom: {
    sample: {
      required: 'Please enter a brand name or company name.'
    }
  }
}

const customJa = {
  custom: {
    sample: {
      required: 'ブランド名または会社名を入力してください。'
    }
  }
}

// ko의 원래 dic을 먼저 불러오고 그 다음에 custom을 merge 시켜야 컴포넌트에서 extend를 사용할 수 있다.
Validator.localize('ko', ko)
Validator.localize('ko', customKo)
Validator.localize('zh_CN', zhCN)
Validator.localize('zh_CN', customZhCn)
Validator.localize('zh_TW', zhTW)
Validator.localize('zh_TW', customZhTw)
Validator.localize('en', en)
Validator.localize('en', customEn)
Validator.localize('ja', ja)
Validator.localize('ja', customJa)

Vue.use(VeeValidate, {
  locale: 'ko'
})

/* eslint-disable eol-last */