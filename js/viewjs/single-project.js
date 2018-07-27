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
        $.getJSON("././json/project_file.json", function (data){
            projectList = data;
        });
        var id = getQueryString("id");

        var interval = setInterval(function () {
            if (projectList){
                clearInterval(interval);

                projectList.forEach(function (item, index, list) {
                    if (item.id == id){
                        vm.project = item;
                        vm.id = id;
                    }
                })
            }
        }, 500);
    }

});



