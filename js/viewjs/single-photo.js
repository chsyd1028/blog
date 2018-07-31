var vm = new Vue({
    el:'#photo_detail',
    data : {
        imageUrl : imageUrl,
        photo : {},
    },
    methods : {
        formatDate : function (timestamp) {
            return dateFormat(timestamp, 'Y.m.d');
        }
    },
    created : function () {
        var photoList;
        $.getJSON("././json/photo.json", function (data){
            photoList = data;
        });
        var id = getQueryString("id");

        var interval = setInterval(function () {
            if (photoList){
                clearInterval(interval);

                photoList.forEach(function (item, index, list) {
                    if (item.id == id){
                        vm.photo = item;
                    }
                })
            }
        }, 500);
    }

});



