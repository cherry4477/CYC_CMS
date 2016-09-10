/**
 * Created by MaxCheng on 2016/9/10.
 */

var contentModelVM=new Vue({
    el:'#content-model',
    data:{
        modelArr:[
            {
                id:'1',
                name:'solution',
                description:'product solution',
                fieldscount:'10',
                // by:'me',
                updatetime:'2016-09-10'
            }
            ],
        modelItem:{
            name:'',
            description:'',
            // fields:'',
            // by:'',
            // update:''
        }

    },
    methods:{
        addModel:function(){

        },
        modelSave:function () {
            console.log(this.modelItem);
            var modelItem2={
                name:this.modelItem.name,
                description:this.modelItem.description
            }

            //调用接口传content model参数 start
            $.ajax({
                url:'/hzf/content_types/'+this.modelItem.id,
                type:'post',
                sync:false,
                cache:false,
                data: JSON.stringify(modelItem2),
                success:function(json){
                    if(json.code==0){
                        alert('添加成功！')
                    }
                },
                error:function(){
                    alert('添加失败');
                }
            })
            //end
            var modelItem=this.modelItem;
            this.modelArr.push(modelItem);
            this.modelItem={};
            this.queryModel();
        },
        queryModel:function(){
            //] /content_types
            $.ajax({
                url:'/hzf/content_types',
                type:'get',
                sync:false,
                cache:false,
                success:function(json){
                    contentModelVM.modelArr=json.data.results;
                },
                error:function(){
                    alert('请求失败！');
                }
            })
        }
    },
    ready:function(){
        $("myModal").modal();
        this.queryModel();
    }
})


