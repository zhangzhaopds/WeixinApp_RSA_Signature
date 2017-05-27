var RSA = require('../../utils/wx_rsa_signature.js')

//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')

    var privateKey_pkcs1 = '-----BEGIN RSA PRIVATE KEY-----MIICXQIBAAKBgQCk7WKdggwBOtteLL5sPom8RYCjuw0hy6R1jH39tCaep1Dns02bi4CYHk2dSR / t0ABgF5pHYeMxHa74Dp6Z6SjfAKMUu53BbTR615ehK + 03BjtzJzviTF1 / NtLmGaR3aawrDp7oQgq33dfIYbWLuAMkHNiWaoXaGyHh3a8jS2vxfQIDAQABAoGAIKRnLzts + tVWU5ZRfgUGp7 + tzToZSEYQ378VtJ / yQNZmueUQCCgdJH5i6C1v51aSrHIfc99Y4wC3/ 5qNI3M1RlRpIakmcaiEv1m6huDPLKFq6Y1e+ AZ0Cb0xo3bny + VTOvfGgcAdSa6++K47bGaxyKzwGeNZQkltm5sgbVcKvkECQQDVjWbSU8P8nDb+TP5Aqr + DaMVA425wv2ra2jhxd6KqKxgHHB7yYWlODiYNrtALOEG9zfSpHVQWhZpiKq8XcWwRAkEAxbWzPAqZxaZ / XTs65uCL0 + iqif0qCSDUNis61wYm2UwOh4LqBZIFop94B3ybEXbCvUl0v26H0fgXjFUErvlKrQJBAKjbAe5U5accLi + t2WxwlrXlZfME4hKsiGU8H10455n+ MSWOCrpEY + ugLF6tVztH5FOcQlRmKFMWmRf + ACxdNsECQDBjkEKZtZkSbwm6fWgUfSSYRWUQeUFSr52yZuxJrShx3Px9phlG6 + opbY8niCx2DKOXXuObgdJ6DglipYrNqOECQQCndP + zU / jwlvjQzEabKdP05uFc5JV6ySFBQwuoENbEvW3uz + Yz31xDYbrwIzrysVDovlj0ExL6LC + JRvpJmHcN-----END RSA PRIVATE KEY-----'
    var publicKey_pkcs1 = '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCk7WKdggwBOtteLL5sPom8RYCjuw0hy6R1jH39tCaep1Dns02bi4CYHk2dSR / t0ABgF5pHYeMxHa74Dp6Z6SjfAKMUu53BbTR615ehK + 03BjtzJzviTF1/ NtLmGaR3aawrDp7oQgq33dfIYbWLuAMkHNiWaoXaGyHh3a8jS2vxfQIDAQAB-----END PUBLIC KEY-----'

    var rsa = new RSA.RSAKey(); // 新建RSA对象
    rsa = RSA.KEYUTIL.getKey(privateKey_pkcs1); // 设置私钥
    console.log(rsa)
    var hashAlg = 'sha1'; // 设置sha1 sha256
    var hSig = rsa.signString("signData", hashAlg); // 加签

    var verify = new RSA.RSAKey();
    verify = RSA.KEYUTIL.getKey(publicKey_pkcs1);
    var ver = verify.verifyString("signData", hSig) // 验签
    console.log(ver)

    hSig = RSA.hex2b64(hSig); // hex 转 b64
    console.log("签名结果：" + hSig)





    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
