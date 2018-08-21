var vm = new Vue({
    el:'#photo_manage',
    data : {
        imageUrl : imageUrl,
        photoForm : {"imgGroup" : []},
        id : undefined,
        loginModal : false,
        username : '',
        password : ''
    },
    methods : {
        dateDefind () {
            var self = this;
            //初始化
            $(".form_datetime").datetimepicker({
                format: 'yyyy-mm-dd',//显示格式
                todayHighlight: 1,//今天高亮
                minView: "month",//设置只显示到月份
                startView:2,
                forceParse: 0,
                showMeridian: 1,
                autoclose: 1//选择后自动关闭
            });
            //当选择器隐藏时，讲选择框只赋值给data里面的time
            $('#photo_date').datetimepicker()
                .on('hide', function (ev) {
                    var value = $("#photo_date").val();
                    var timestamp = Date.parse(new Date(value));
                    self.photoForm.date = timestamp;
                });
        },
        formatDate : function (timestamp) {
            return dateFormat(timestamp, 'Y-m-d');
        },
        savePhoto : savePhoto,
        deleteImg : deleteImg,
        addImg : addImg
    },
    created : function () {
        var id = getQueryString("id");

        if (id != null){
            $.ajax({
                CrossDomain : true,
                type : "GET",
                url : requestAddr + "blog/photo/photoInfo/" + id,
                success : function (result) {
                    vm.photoForm = result.data;
                    vm.photoForm.description = result.data.description.join("\n");
                    vm.id = id;
                }
            })
        }

    },
    mounted: function () {
        this.dateDefind();
    }

});

function savePhoto() {
    var loginData = {};
    loginData.username = vm.username;
    loginData.password = vm.password;
        $.ajax({
            CrossDomain : true,
            type : "POST",
            async : false,
            data : loginData,
            url : requestAddr + "blog/login/checkLogin",
            success : function (result) {
                if (result.code == 200){
                    $('#myModal').modal('hide');
                }else {
                    alert(result.message);
                }
            },
            error : function (XMLHttpRequest) {
                alert("服务器出错了。" + XMLHttpRequest.readyState);
            }
        })
    var description = vm.photoForm.description.split("\n");
    var data = {};
    data.name = vm.photoForm.name;
    data.date = new Date(vm.photoForm.date);
    data.pinyin = vm.photoForm.pinyin;
    data.addr = vm.photoForm.addr;
    data.descriptionJson = JSON.stringify(description);
    data.img = vm.photoForm.img;
    data.gisAddr = vm.photoForm.gisAddr;
    data.imgGroup = vm.photoForm.imgGroup;

    if (vm.id){
        data.id = vm.photoForm.id;

        $.ajax({
            CrossDomain : true,
            type : "POST",
            async : false,
            data : JSON.stringify(data),
            dataType: 'json',
            contentType : 'application/json;charset=utf-8',
            url : requestAddr + "blog/photo/editPhoto",
            success : function (result) {
                window.location.reload();
                alert("编辑成功")
            },
            error : function (XMLHttpRequest) {
                alert("服务器出错了。" + XMLHttpRequest.readyState);
            }
        })
    }else {
        $.ajax({
            CrossDomain : true,
            type : "POST",
            async : false,
            data : JSON.stringify(data),
            dataType: 'json',
            contentType : 'application/json;charset=utf-8',
            url : requestAddr + "blog/photo/addPhoto",
            success : function (result) {
                window.location.reload();
                alert("编辑成功")
            },
            error : function (XMLHttpRequest) {
                alert("服务器出错了。" + XMLHttpRequest.readyState);
            }
        })
    }
}

function deleteImg(index) {
    vm.photoForm.imgGroup.splice(index, 1);
}

function addImg() {
    if (vm.photoForm.imgGroup){
        vm.photoForm.imgGroup.push({"groupId": vm.id});
    }else {
        vm.photoForm.imgGroup = [];
        vm.photoForm.imgGroup.push({});
    }
}




