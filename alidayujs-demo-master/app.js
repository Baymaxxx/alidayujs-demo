 var Alidayu=require('alidayujs');
    //应用密匙 见：http://www.alidayu.com/help?spm=a3142.7802526.1.24.iEB4Yc&_t=1#create
    var config = {
        app_key: '233152xx',
        secret: '17806048239c3831571cf6467f09cxxx'
    };
    var alidayu = new Alidayu(config);
    //参数 见：http://open.taobao.com/doc2/apiDetail.htm?apiId=25450
    var options = {
        sms_free_sign_name: '身份验证',
            sms_param: {
            code: '888888',
            product: '加入狙击未成年人军团'
        },
        rec_num: '18052128412,18052128375,18051372627',  //多个手机号逗号隔开
        sms_template_code: 'SMS_5033947',
    };
    //发送短信
    alidayu.sms(options,function(err,result){
        if(err){
            console.log('ERROR'+err);
        }
        console.log(result);
    });
