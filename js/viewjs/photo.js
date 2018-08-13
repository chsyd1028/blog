var vm = new Vue({
    el:'#photo',
    data : {
        imageUrl : imageUrl,
        photoList : undefined
    },
    methods : {
        formatDate : function (timestamp, formats) {
            return dateFormat(timestamp, formats);
        }

    },
    created : function () {
        $.ajax({
            CrossDomain : true,
            type : "GET",
            url : requestAddr + "blog/photo/photoList",
            success : function (result) {
                vm.photoList = result.data;
            }
        })
    }
});



