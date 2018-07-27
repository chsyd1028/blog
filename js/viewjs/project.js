var vm = new Vue({
    el:'#project',
    data : {
        imageUrl : imageUrl,
        projectList : undefined
    },
    methods : {

    },
    created : function () {
        $.getJSON("././json/project.json", function (data){
            vm.projectList = data;
        });
    }
});



