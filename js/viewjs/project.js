var vm = new Vue({
    el:'#project',
    data : {
        imageUrl : imageUrl,
        projectList : undefined
    },
    methods : {
        getProjectList : getProjectList
    },
    created : function () {
        getProjectList();
    }
});

function getProjectList() {
    $.ajax({
        CrossDomain : true,
        type : "GET",
        url : "http://localhost:8080/blog/project/projectList",
        success : function (result) {
            vm.projectList = result.data;
        }
    })
}



