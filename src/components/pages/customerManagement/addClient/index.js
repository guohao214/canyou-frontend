/**
 * Created by ASUS on 2017/8/15.
 */
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        p: '',
        pr: '',
        value3:　'',
        accountInfoChecked: true
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
