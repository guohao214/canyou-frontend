/**
 * Created by ASUS on 2017/8/15.
 */
import $ from 'jquery';
export default {
  data() {
    //手机号验证规则
    var checkTel = (rule, value, callback) => {
      if (!value) {
        callback(new Error('手机不能为空'));
        return false;
      }
    };
    return {
      form: {
        clientName: '',
        clientGrade: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        p: '',
        pr: '',
        value3:　'',
        accountInfoChecked: true,
        bankAccount: '',
        tel : ''
      },
      clientGradeOptions: [{
        value: '选项1',
        label: '黄金糕'
        }, {
        value: '选项2',
        label: '双皮奶'
        }, {
        value: '选项3',
        label: '蚵仔煎'
        }, {
        value: '选项4',
        label: '龙须面'
        }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      rules: {
        clientName: [
          { required: true, message: '客户名称不能为空', trigger: 'blur', focusInvalid:true },
          { min: 0, max: 40, message: '客户名称不能大于40个字符', trigger: 'blur' }
        ],
        clientGrade:[
          { required: true, message: '客户级别不能为空', trigger: 'change' },
        ],
        personalName:[
          { required: true, message: '!personalName', trigger: 'blur' },
        ],
        bankAccount:[
          { required: false, message: '!bankAccount', trigger: 'blur' },
        ],
        tel:[
          { validator: checkTel, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        //console.log(formName)
        var self = this;
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          //console.log(this.$refs[formName])
          //return false;
         setTimeout(function () {
           var positionElement = $('.is-error');
           var content = $('.content');
           if(positionElement[0]){
             var d = positionElement[0];
           }else {
             var d = positionElement;
           }
           var f = d.offsetTop - 30

           var contentScrollTop = content.scrollTop;
           var contentHeight = content.offsetHeight+45;
           if (f >= contentScrollTop || f >(contentScrollTop+contentHeight)) {
             ////////////////////////////////////////////////////////////////
             //验证成功调用Ajax
           }else{
             content.scrollTop(f)
           }

         },10)
        }
      });
    },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // }
  }
}
