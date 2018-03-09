$.ajax({
    "url": "/car-management/menu/showMenu.action",
    "type": "get",
    "data": {},
    "dataType": "jsonp", //数据类型为jsonp  
    "jsonp": "jsonpCallback", //服务端用于接收callback调用的function名的参数
    "success": function(res) {
        console.log(res);
        var menuli = "";
        for (var i = 0; i < res.length; i++) {
            menuli =
                '<li class="sidebar-dropdown">' +
                '<a class="sidebar_dropdown_hover" href="#"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-' + res[i].url + '"></use></svg> <span>' +
                res[i].name + '</span><span class="badge">' + res[i].childrenMenus.length + '</span></a>' +
                '<div class="sidebar-submenu">' +
                '<ul class="menuli_ulli' + i + '">' +
                '</ul>' +
                '</div>' +
                '</li>';
            $("#myTab").append(menuli);
            var menuli_ulli = "";
            for (var k = 0; k < res[i].childrenMenus.length; k++) {
                // console.log("i=" + i, "k=" + k);
                menuli_ulli += '<li class="' + res[i].childrenMenus[k].url + '"><a href="#' + res[i].childrenMenus[k].url + '" data-toggle="tab">' + res[i].childrenMenus[k].name + '</a> </li>';
                $(".menuli_ulli" + i).html(menuli_ulli);
            }
            // console.log(menuli_ulli);
        }

        // console.log(menuli);
        $(".sidebar-dropdown > a").click(function() {
            console.log(this);
            $(".sidebar-submenu").slideUp(250);
            if ($(this).parent().hasClass("active")) {
                $(".sidebar-dropdown").removeClass("active");
                $(this).parent().removeClass("active");
            } else {
                $(".sidebar-dropdown").removeClass("active");
                $(this).next(".sidebar-submenu").slideDown(250);
                $(this).parent().addClass("active");
            }
        });
        $("#toggle-sidebar").click(function() {
            $(".page-wrapper").toggleClass("toggled");
        });
        // $(".carTrack").click(function() {
        //     $("#carTrack").append("<iframe class='iframebg' src='../map/cartrack.html' width='100%' height='800px' scrolling='no' frameborder='no' border='0'></iframe>");
        // });
    },
    "error": function(data) {
        console.log(data);
        console.log("cuo" + data);
    }
})