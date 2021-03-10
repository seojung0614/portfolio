
            // 보이기 이벤트
            $('#btn_show').click(function(){
                $('.item_list').css('height','330px');
                $('#btn_show').hide();
                $('#btn_hide').show();
        
               });
                //    감추기 이벤트
               $('#btn_hide').click(function(){
                $('.item_list').css('height','130px');
                $('#btn_show').show();
                $('#btn_hide').hide();
               });
                