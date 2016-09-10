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
        ]
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
        }
    },
    ready:function() {
        this.queryContent();
    }



})