jQuery(document).ready(function () {
    var count = 0;
            $.ajax({
                type: "GET",
                url: "./assets/php/donate.php",
                dataType: "json",
                success:function(data){
                    var str = "";
                    data.forEach(function(item,i,arr){
                        count = count+1;
                        str+="<tr><td>"+count+"</td><td>"+data[i].name+"</td><td>"+data[i].graduate_year+"</td><td>"+data[i].donate_number+"</td><td></tr>"
                    })
                    $('tbody').html(str);
                }

            })
        })
