module.exports = {
  'dev': {
    'is_debug': false,
    'jwt': 'aircos.com',
    'mongodb': 'mongodb://127.0.0.1:27017/test_one',
    'qiniu' : {
      'downloadUrl' : 'http://qiniu.mengxiaoban.cn/',
      'bucket': 'xbmhz',
      'accessKey' : 'tS0Ps_cfuuB2TnvjUOiJM8VNkl30vxi8pTN09EcS',
      'secretKey' : 'KhVtLcsnS0ZU52YXltYlm30tNdhOAN1PsWivRivB'
    },
    'send_wechat_user' : [
      'o12hcuM51yGHPgBPTgLlE7BAYCWA',
      'o12hcuDqSJ9Y1Pt2GHVnqOVuU0a0',
      'o12hcuMYRl_WOQQdtgxeniWqSxw0'
    ]
  },
  
  'test': {
    'is_debug': false,
    'jwt': 'aircos.com',
    'mongodb': 'mongodb://127.0.0.1:27017/xbm_crm',
    'qiniu' : {
      'downloadUrl' : 'http://qiniu.mengxiaoban.cn/',
      'bucket': 'xbmhz',
      'accessKey' : 'tS0Ps_cfuuB2TnvjUOiJM8VNkl30vxi8pTN09EcS',
      'secretKey' : 'KhVtLcsnS0ZU52YXltYlm30tNdhOAN1PsWivRivB'
    },
    'send_wechat_user' : [
      'o12hcuM51yGHPgBPTgLlE7BAYCWA',
      'o12hcuDqSJ9Y1Pt2GHVnqOVuU0a0',
      'o12hcuMYRl_WOQQdtgxeniWqSxw0'
    ]
  },

  'production': {
    'is_debug': false,
    'jwt': 'aircos.com',
    'mongodb': 'mongodb://127.0.0.1:27017/xbm_crm',
    'qiniu' : {
      'downloadUrl' : 'http://qiniu.mengxiaoban.cn/',
      'bucket': 'xbmhz',
      'accessKey' : 'tS0Ps_cfuuB2TnvjUOiJM8VNkl30vxi8pTN09EcS',
      'secretKey' : 'KhVtLcsnS0ZU52YXltYlm30tNdhOAN1PsWivRivB'
    },
    'send_wechat_user' : [
      'o12hcuM51yGHPgBPTgLlE7BAYCWA',
      'o12hcuDqSJ9Y1Pt2GHVnqOVuU0a0',
      'o12hcuMYRl_WOQQdtgxeniWqSxw0'
    ]
  }
}[process.env.NODE_ENV || 'dev']