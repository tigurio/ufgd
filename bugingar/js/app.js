// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

// habilitar itens em editar perfil

  $(".toggleDisable").on("click", function(){
    
    var $that = $(this),
        $inputs = $that.prev('input');
        disabled = $inputs.attr('disabled');
    
    if (disabled) {
        $inputs.removeAttr('disabled').addClass('inputTextFocus').focus();
        $that.val('salvar');
        
    }
            
     
});
