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
                fields:'10',
                by:'me',
                update:'2016-09-10'
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
                url:'/content_types/'+this.modelItem.id,
                type:'post',
                sync:false,
                cache:false,
                data: JSON.stringify(modelItem2),
                success:function(json){
                    alert('111')
                    console.log(json)
                },
                error:function(){
                    alert('000')
                }
            })

            //end
            var modelItem=this.modelItem;
            this.modelArr.push(modelItem);
            this.modelItem={};

        }
    },
    ready:function(){
        $("myModal").modal();
    }
})


