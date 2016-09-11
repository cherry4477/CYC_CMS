/**
 * Created by MaxCheng on 2016/9/10.
 */
var contentVM=new Vue({
    el:'#content',
    data:{
        contentArr:[
            {
                content_id:'',
                content_type_id:'',
                name:'',
                description:'',
                updatetime:'',
                createuser:''

            }
        ],
        content_types_Arr:[],
        creatContent:{
            content_type_id:'',
            content_id:'',
            name:'',
            description:'',
            fieldsvalue:[]
        },
        contentFields:[],
        content_type_id_sel:''

    },
    methods:{
        queryContent:function(){
            $.ajax({
                url:'/hzf/contents',
                type:'get',
                sync:false,
                cache:false,
                success:function(json){
                    console.log(json);
                    contentVM.contentArr=json.data.results;
                },
                error:function(){
                    alert('请求失败！');
                }
            })
            $.ajax({
                url:'/hzf/content_types',
                type:'get',
                sync:false,
                cache:false,
                success:function(json){
                    console.log(json);
                    contentVM.content_types_Arr=json.data.results;
                    console.log('%%%%')
                    console.log(contentVM.content_types_Arr)
                },
                error:function(){
                    alert('请求失败！');
                }
            })

        },
        creatDocument:function(){
            // alert(this.content_type_id_sel)
            $.ajax({
                url:'/hzf/content_types/'+this.content_type_id_sel,
                type:'GET',
                sync:false,
                cache:false,
                success:function(json){
                    // console.log(json.data.fields)
                    contentVM.contentFields=json.data.fields;

                },
                error:function(){
                    alert('查询失败');
                }
            });
        },
        saveContent:function(){
            // [POST] /contents/:content_id
            var fieldsValue=[];
            for(var i=0;i<$('#content-fields input').length;i++){
                fieldsValue.push({
                    id:$('#content-fields input').eq(i).attr('id'),
                    name:$('#content-fields p').eq(i).text(),
                    value:$('#content-fields input').eq(i).val(),
                    type:$('#content-fields p').eq(i).attr('id')
                });
            }
            var data= {
                content_type_id: this.creatContent.content_type_id,
                name: this.creatContent.name,
                description: this.creatContent.description,
                fieldsvalue: fieldsValue
            }

            $.ajax({
                url:'/hzf/contents/'+this.creatContent.content_id,
                type:'POST',
                sync:false,
                cache:false,
                datatype: 'json',
                contentType: "application/json",
                data:JSON.stringify(data),
                success:function(json){
                    if(json.code==0){
                        alert('添加成功！');
                        // contentInfoVm.contentInfo={};
                        // for(var i=0;i<$('#content-fields input').length;i++){
                        //     fieldsValue.push({
                        //         value:$('#content-fields input').eq(i).val('')
                        //     });
                        // }

                    }
                },
                error:function(){
                    alert('添加失败！');
                }
            })
            this.queryContent();
        }
    },
    ready:function() {
        this.queryContent();
    }



})