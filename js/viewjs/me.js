var vm = new Vue({
    el:'#me',
    data : {
        imageUrl : imageUrl,
        meList : []
    },
    methods : {
        formatDate : function (timestamp) {
            return dateFormat(timestamp, 'Y-m-d H:i:s');
        },
        getMeList : getMeList

    },
    created : function () {
        init();
    }
});

function init() {
    getMeList();
}

function getMeList() {
    $.ajax({
        CrossDomain : true,
        type : "GET",
        url : "http://localhost:8080/blog/me/meList",
        success : function (result) {
            vm.meList = result.data;
        }
    })
}



