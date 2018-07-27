var vm = new Vue({
    el:'#me',
    data : {
        imageUrl : imageUrl,
        meList : []
    },
    methods : {
        formatDate : function (timestamp) {
            return dateFormat(timestamp, 'Y-m-d H:i:s');
        }

    },
    created : function () {
        $.getJSON("././json/me.json", function (data){
            vm.meList = data;
        });
    }
});



