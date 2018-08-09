var projects = undefined;
var photos = undefined;
var meAll = undefined;
var vm = new Vue({
    el:'#project',
    data : {
        imageUrl : imageUrl,
        projectList : undefined,
        photoList : undefined,
        meList : undefined
    },
    methods : {
        moveTo : function () {
            if (panelIndex == 1){
                window.location.href='project.html';
            }
            if (panelIndex == 2){
                window.location.href='me.html';
            }
            if (panelIndex == 3){
                window.location.href='photo.html';
            }
            if (panelIndex == 4){
                window.location.href='contact.html';
            }
        }
    },
    created : function () {

        $.ajax({
            CrossDomain : true,
            type : "GET",
            url : "http://localhost:8080/blog/project/projectList",
            success : function (result) {
                projects = result.data;
                vm.projectList = result.data;
            }
        })
        $.ajax({
            CrossDomain : true,
            type : "GET",
            url : "http://localhost:8080/blog/photo/photoList",
            success : function (result) {
                photos = result.data;
                vm.photoList = result.data;
            }
        })
        $.ajax({
            CrossDomain : true,
            type : "GET",
            url : "http://localhost:8080//blog/me/meList",
            success : function (result) {
                meAll = result.data;
                vm.meList = result.data;
            }
        })

    },
    mounted : function () {
        var interval = setInterval(function () {
            if (projects && photos && meAll){
                initImg();
                clearInterval(interval);
            }
        }, 500)
    }
});



