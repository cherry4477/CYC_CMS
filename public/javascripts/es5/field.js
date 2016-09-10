/**
 * Created by MaxCheng on 2016/9/10.
 */

Vue.filter('objStr',function(val){
    console.log('11'+val)
    var val2=JSON.stringify(val);
    console.log(val2)
    return val2;
})
var fieldVM=new Vue({
    el:'#content-field',
    data:{
        field:{
            type:'',
            id:'',
            name:''
        },
        fieldArr:[
            {
                name:'chengkj',
                type:'String',
                id:'1'
            },
            {
                name:'chengkj',
                type:'String',
                id:'2'
            },
            {
                name:'chengkj',
                type:'String',
                id:'3'
            }
        ],
        fieldShow:true
    },
    methods:{
        saveField:function(){
            var field=this.field;
        //   存到接口中 start

        //    end
            this.field={};

        },
        queryFields:function(){
           var fieldArr=this.fieldArr;
            // query

            // 查询接口中数据 start

            //end
        }
    },
    ready:function(){

    }
})