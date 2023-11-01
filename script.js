let select = document.getElementById('idnome')
let user
    
select.addEventListener('change', function(){
    
    user = select.value
    
})


function addError(){

    openScore()
   
}


function openScore(){

    cadastro.style.display = 'none'
    score.style.display = 'block'

}

function openCadastro(){

    score.style.display = 'none'
    cadastro.style.display = 'block'

}
   


