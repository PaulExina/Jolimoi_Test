

$('#number').on('input',function(){;


    $("#form").validate({
        rules: {
            number: {
                required : true,
                min: 1,
                max: 100,
                digits: true
            }
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
     });
    
  if( $("#form").valid() )
       $('#number').attr('class', ' valid');
  else 
      $('#number').attr('class', ' invalid');
     
  
});