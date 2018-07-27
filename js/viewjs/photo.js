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
        $.getJSON("././json/photo.json", function (data){
            vm.photoList = data;
        });
    }
});



