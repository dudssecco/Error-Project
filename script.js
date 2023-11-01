let select = document.getElementById('idnome')
let user
    
select.addEventListener('change', function(){
    
    user = select.value
    
})








function addError(){

    openScore()
   
}

function addAcerto(){

    openScore()
    
}









function openScore(){

    cadastroErro.style.display = 'none'
    cadastroAcerto.style.display = 'none'
    score.style.display = 'block'

}

function openErro(){

    score.style.display = 'none'
    cadastroAcerto.style.display = 'none'
    cadastroErro.style.display = 'block'

}

function openAcerto(){

    score.style.display = 'none'
    cadastroErro.style.display = 'none'
    cadastroAcerto.style.display = 'block'
}
   


