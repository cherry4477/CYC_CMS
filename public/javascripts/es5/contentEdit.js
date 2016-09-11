/**
 * Created by MaxCheng on 2016/9/11.
 */

var contentInfoVm=new Vue({
    el:'.contentEdit-header',
    data:{
        contentInfo:{
            content_type_id:'',
            conName:'',
            description:'',
            fieldsvalue:[]
        },
        contentFields:[],
        fields:[],
    },
    methods:{
        queryContentFieldKey:function(){
            $.ajax({
                url:'/hzf/content_types/'+contentTypeId,
                type:'GET',
                sync:false,
                cache:false,
                success:function(json){
                    // console.log(json.data.fields)
                    contentInfoVm.contentFields=json.data.fields;

                },
                error:function(){
                    alert('查询失败');
                }
            });
        },
        saveContentInfo:function(){
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
            console.log('fieldsValue:',fieldsValue)

            // console.log(fieldsValue)
            var data= {
                content_type_id: this.contentInfo.content_type_id,
                name: this.contentInfo.conName,
                description: this.contentInfo.description,
                fieldsvalue: fieldsValue
            }

            $.ajax({
                url:'/hzf/contents/'+contentId,
                type:'POST',
                sync:false,
                cache:false,
                datatype: 'json',
                contentType: "application/json",
                data:JSON.stringify(data),
                success:function(json){
                    if(json.code==0){
                        alert('添加成功！');
                        contentInfoVm.contentInfo={};
                        for(var i=0;i<$('#content-fields input').length;i++){
                            fieldsValue.push({
                                value:$('#content-fields input').eq(i).val('')
                            });
                        }

                    }
                },
                error:function(){
                    alert('添加失败！');
                }
            })
        }
    },
    ready:function(){
        this.queryContentFieldKey();

    }
})