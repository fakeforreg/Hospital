
function __addPuTianTag(container, count) {
    // 删除评价链接
    while (container.childNodes.length > 1 && count > 0) {
        container.removeChild(container.childNodes[container.childNodes.length-1]);
        count--;
    }
    // 添加莆田标记
    var img = document.createElement("img");
    img.setAttribute("style", "margin-left:8px; vertical-align:middle;");
    img.height = "14";
    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAhCAMAAABqZpwPAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAS1BMVEXySj7ySj7ySj7ySj7ySj7ySj7ySj7ySj7ySj7ySj70bGT2lZDzXFL2iIL5ubb////4rqr82df7zsz84+H+9vX97Oz3op36xMH1e3RlwXBDAAAACXRSTlMDfuiAguXnf+kql3NWAAAAAWJLR0QPGLoA2QAAAAd0SU1FB+AFAxAfGMLVpAQAAAHhSURBVEjH3ZbbtuIgDEA59wMBAgWE///SCRCVtnhZa+zDTB5KRdnCTgoV4u1dvjzeP4R4ez22xqf4Ogb8LY7hSvk/gRXUqwb9l2BDsWJYrB8B4RmM1hoAnLVmB0YK7gVbw2O9Lri0T0qasAlX/936ehuRI53ugV0bl7A1/RoMzb3fRW7R0k+XerfYGC1NWOlhySuw2qhQoElFdn0dLCU0RVI3cM9GwNz6TrfAK21giQ3KFhv9XbCLqX+T0d8HX2yyjZRCuAmGEC2PwmU2Y38FK8vhOXMUN8BAwzKluDqPJynvgwfNQ61NwYVGxbY21jwFp0tvXqnolQU8/YR9DV0F1EqgefsiXb4FvqoPOKpY+qpxE+fkFcJCz51+DNaDCmCwgxoBWwMMNkvH0sPnMKg9OK/BKxUMnjh2qTtulqvvsgO7xyomYMPcJp42C4xqC1bGlAE8UzGrY6WV5s6axmsC59vm0zOmNgTdO0MaN8L5I/20Y1kiOu40EfNj8EzFZHdzMcJlgPZDWTwC0w5OZeQG8DkIrDOGQoeMKSlyaUXYgj3FBKxaESm5O0uqCh3qttOeHJbgLs/IPHk5tAbo4OjHh9yffkC93fZ4Iu0dvzr+QfBh724/x4A/hfg54P3490P8AYNPeuD5tMFUAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE2LTA1LTAzVDE2OjMxOjI0KzA4OjAwJ94EEgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNi0wNS0wM1QxNjozMToyNCswODowMFaDvK4AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC";
    container.appendChild(img);

    console.log(container);
}

// 移动版
var __results_container = document.getElementById("results");
if (__results_container != null) {
    // 不带推广标记
    var results = __results_container.getElementsByClassName("result");
    for (var i=0; i<results.length; i++) {
        var showurl_divs = results[i].getElementsByClassName("c-showurl");
        if (showurl_divs.length > 0) {
            var spans = showurl_divs[0].getElementsByTagName("span");
            if (spans.length > 0) {
                var url = spans[0].innerText;
                console.log(url);
                if (url != null && BlackHospital.isBlackHospital(url)) {
                    __addPuTianTag(showurl_divs[0], 1);
                }
            }
        }
    }
    // 带推广标记
    var ads = __results_container.getElementsByClassName('ec_urlline');
    for (var i=0; i<ads.length; i++) {
        var site = ads[i].getElementsByClassName("ec_site");
        if (site.length > 0) {
            var url = site[0].innerText;
            console.log(url);
            if (url != null && BlackHospital.isBlackHospital(url)) {
                __addPuTianTag(ads[i], 3);
            }
        }
    }
}
