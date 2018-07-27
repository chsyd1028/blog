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

        $.getJSON("././json/project.json", function (data){
            projects = data;
            vm.projectList = data;
        });
        $.getJSON("././json/photo.json", function (data){
            photos = data;
            vm.photoList = data;
        });
        $.getJSON("././json/me.json", function (data){
            meAll = data;
            vm.meList = data;
        });

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



