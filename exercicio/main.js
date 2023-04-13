$(document).ready(function(){

    $('form').on('submit', function(e){

        

        const tarefa = $('#tarefa').val();
        const novaTarefa = $(`<li></li>`);

        $(`<li>${tarefa}</li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
                
        $('li').click(function(){

        
            $(this).addClass("riscado");
            
            //$(this).toggleClass("riscado");
    
        });

        
        $('#tarefa').val('');
        
        e.preventDefault();
    })

    

})

