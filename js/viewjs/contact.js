var vm = new Vue({
    el:'#contact',
    data : {
        imageUrl : imageUrl,
        name : undefined,
        email : undefined,
        content : undefined
    },
    methods : {
        formatDate : function (timestamp) {
            return dateFormat(timestamp, 'Y-m-d H:i:s');
        },
        submit : submit

    },
    created : function () {

    }
});




function submit() {

        //alert("a");
        var data = {
            "name" : vm.name,
            "email" : vm.email,
            "content" : vm.content
        };

        $.ajax({
            CrossDomain : true,
            type : "POST",
            data : data,
            url : requestAddr + "blog/contact/sendMessage",
            success : function (result) {
                alert("发送成功");
            },
            error : function () {
                alert("发送失败");
            }
        })

}



