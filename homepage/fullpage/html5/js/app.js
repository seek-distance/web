$(function () {


    //page-Color
    $('#dowebok').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90', '#3ebcd9', '#c57adb', '#cc4b8b'],
        'navigation': true
    });

    //clothe
    $('#puton').click(function () {
        $('#noclothe').addClass('clothe').text('我穿上衣服啦！');
        $('#clothe_code').show();
        $('#class_clothe').show();
    });
    $('#putoff').click(function () {
        $('#noclothe').removeClass('clothe').text('把衣服还给我T_T~');
        $('#class_clothe').hide();
    });

    //function  test()
    function test(a, b, str) {
        $(a).toggle(
            function () {
                $(a).addClass('btn-purp').attr('name-active', 'true');
                $('#test').addClass(b);
                $('.tip').text(str);
            },
            function () {
                $(a).removeClass('btn-purp').attr('name-active', 'false');
                $('#test').removeClass(b);
                $('.tip').html('<b>&nbsp;</b>');
            });

    }

    test('#text-block', 'disblock', 'display: block;  span是块元素  div是行元素');
    test('#text1', 'f60', 'font-size:60px');
    test('#text2', 'bg', 'background:#d9534f;   url(img.jpg) rgba(1,1,1,1)');
    test('#text3', 'c', 'color: #fff');
    test('#text4', 'fb', 'font-weight: bold');
    test('#text5', 'border', 'border: 5px solid #5cb85c');
    test('#text6', 'border-r', '-webkit-border-radius: 15px; -moz-border-radius: 15px;border-radius: 15px;');
    test('#text7', 'w', 'width: 200px;');
    test('#text8', 'h', 'height:200px;');
    test('#text9', 'lh', 'line-height: 200px;');
    test('#text10', 'tl', 'text-align: left;');
    test('#text11', 'tc', 'text-align: center;');
    test('#text12', 'tr', 'text-align: right;');
    test('#text13', 'fl', 'float: left;');
    test('#text14', 'fr', 'float: right;');
    test('#text15', 'dis', 'display: none;');
    test('#text16', 'rota', '-webkit-transform: rotate(45deg); -moz-transform: rotate(45deg);transform: rotate(45deg);');
    test('#text17', 'animated bounce', '@keyframes{...} animation{...}');
    test('#text18', 'm50', 'margin: 50px;  margin:50px 50px; margin:50px 50px 50px 50px;');
    test('#text19', 'p50', 'padding: 50px;  padding:50px 50px; padding:50px 50px 50px 50px;');
    test('#text20', 'posi', 'posiition:relative; position: absolute;');
    test('#text21', 'l', 'left: 50px;');
    test('#text22', 't', 'top: 50px;');
    test('#text23', 'r', 'right: 50px;');
    test('#text24', 't', 'bottom: 50px;');
    test('#text25', 'boxing', '-webkit-box-sizing:border-box;-mozi-box-sizing:border-box;box-sizing:border-box;');

    //reset
    $('#reset').click(
        function () {
            $('.function-btn .btn[name-active=true]').click();
            $('.tip').text('清除完毕！');
        }
    );

    //note
    $('#note').toggle(
        function () {
            $('#content').show();
        },
        function () {
            $('#content').hide();
        }
    );
});