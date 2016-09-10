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
        fields:[],
        fieldShow:true
    },
    methods:{
        saveField:function(){
            // var field={
            //     name:this.field .name;
            // }
        //   存到接口中 start
        //    [PUT] /content_types/:content_type_id
        //     console.log(this.field);

            this.fields.push(this.field);
            $.ajax({
                url:'/hzf/content_types/'+apiName,
                type:'put',
                sync:false,
                datatype: 'json',
                contentType: "application/json",
                data:JSON.stringify({"fieldscount":this.fields.length,'fields':this.fields}),
                success:function(json){
                    alert('添加成功！')

                },
                error:function(){
                    alert('添加失败');
                }
            })
        //    end
            this.field={};
            this.queryFields();

        },
        queryFields:function(){
            // query  content_types/:content_type_id
            $.ajax({
                url:'/hzf/content_types/'+apiName,
                type:'get',
                sync:false,
                cache:false,
                success:function(json){
                   console.log(json);
                    fieldVM.fieldArr=json.data.fields;
                },
                error:function(){
                    alert('查询失败');
                }
            })
            // 查询接口中数据 start
            //end
        }
    },
    ready:function(){
        this.queryFields();
    }
})