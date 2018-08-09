var vm = new Vue({
    el:'#project_detail',
    data : {
        imageUrl : imageUrl,
        project : {},
    },
    methods : {
        formatDate : function (timestamp) {
            return dateFormat(timestamp, 'Y.m.d');
        }
    },
    created : function () {
        var projectList;

        var id = getQueryString("id");

        $.ajax({
            CrossDomain : true,
            type : "GET",
            url : "http://localhost:8080/blog/project/projectInfo/" + id,
            success : function (result) {
                vm.project = result.data;
            }
        })

        // var interval = setInterval(function () {
        //     if (projectList){
        //         clearInterval(interval);
        //
        //         projectList.forEach(function (item, index, list) {
        //             if (item.id == id){
        //                 vm.project = item;
        //                 vm.id = id;
        //             }
        //         })
        //     }
        // }, 500);
    }

});



