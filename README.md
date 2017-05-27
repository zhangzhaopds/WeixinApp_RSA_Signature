title: 【小程序】RSA签名
type: categories
date: 2017-05-27 17:01:15
categories: 小程序
tags: [RSA, 签名]
---

> 一个适用于微信小程序的RSA签名库。

RSA签名的小程序DEMO：[https://github.com/zhangzhaopds/WeixinApp_RSA_Signature.git](https://github.com/zhangzhaopds/WeixinApp_RSA_Signature.git)

#### 使用

1、引入文件 

```javascript
var RSA = require('../../utils/wx_rsa_signature.js')
```

2、调用

```javascript
var privateKey_pkcs1 = '-----BEGIN RSA PRIVATE KEY-----MIICXQIBAAKBgQCk7WKdggwBOtteLL5sPom8RYCjuw0hy6R1jH39tCaep1Dns02bi4CYHk2dSR / t0ABgF5pHYeMxHa74Dp6Z6SjfAKMUu53BbTR615ehK + 03BjtzJzviTF1 / NtLmGaR3aawrDp7oQgq33dfIYbWLuAMkHNiWaoXaGyHh3a8jS2vxfQIDAQABAoGAIKRnLzts + tVWU5ZRfgUGp7 + tzToZSEYQ378VtJ / yQNZmueUQCCgdJH5i6C1v51aSrHIfc99Y4wC3/ 5qNI3M1RlRpIakmcaiEv1m6huDPLKFq6Y1e+ AZ0Cb0xo3bny + VTOvfGgcAdSa6++K47bGaxyKzwGeNZQkltm5sgbVcKvkECQQDVjWbSU8P8nDb+TP5Aqr + DaMVA425wv2ra2jhxd6KqKxgHHB7yYWlODiYNrtALOEG9zfSpHVQWhZpiKq8XcWwRAkEAxbWzPAqZxaZ / XTs65uCL0 + iqif0qCSDUNis61wYm2UwOh4LqBZIFop94B3ybEXbCvUl0v26H0fgXjFUErvlKrQJBAKjbAe5U5accLi + t2WxwlrXlZfME4hKsiGU8H10455n+ MSWOCrpEY + ugLF6tVztH5FOcQlRmKFMWmRf + ACxdNsECQDBjkEKZtZkSbwm6fWgUfSSYRWUQeUFSr52yZuxJrShx3Px9phlG6 + opbY8niCx2DKOXXuObgdJ6DglipYrNqOECQQCndP + zU / jwlvjQzEabKdP05uFc5JV6ySFBQwuoENbEvW3uz + Yz31xDYbrwIzrysVDovlj0ExL6LC + JRvpJmHcN-----END RSA PRIVATE KEY-----'
    var publicKey_pkcs1 = '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCk7WKdggwBOtteLL5sPom8RYCjuw0hy6R1jH39tCaep1Dns02bi4CYHk2dSR / t0ABgF5pHYeMxHa74Dp6Z6SjfAKMUu53BbTR615ehK + 03BjtzJzviTF1/ NtLmGaR3aawrDp7oQgq33dfIYbWLuAMkHNiWaoXaGyHh3a8jS2vxfQIDAQAB-----END PUBLIC KEY-----'

    var rsa = new RSA.RSAKey(); // 新建RSA对象
    rsa = RSA.KEYUTIL.getKey(privateKey_pkcs1); // 设置私钥
    console.log(rsa)
    var hashAlg = 'sha1'; // 设置sha1 sha256
    var hSig = rsa.signString("signData", hashAlg); // 加签
    hSig = RSA.hex2b64(hSig); // hex 转 b64
    console.log("签名结果：" + hSig)
```

需要注意的是：区分RSA私钥的类型，有pkcs1何pkcs8。pkcs8格式的私钥主要用于java中。

```javascript
// pkcs1格式：
-----BEGIN RSA PRIVATE KEY-----
-----END RSA PRIVATE KEY------

// pkcs8格式：
-----BEGIN PRIVATE KEY-----
-----END PRIVATE KEY-----
```