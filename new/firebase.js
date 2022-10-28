function mostrar(){

let Nome = document.getElementById('formNome')
let Sobrenome = document.getElementById('formSobrenome')
let Curso = document.getElementById('formCurso')

Nome = String(Nome.value)
Sobrenome = String(Sobrenome.value)
Curso = String(Curso.value)
alert(`o nome é : $(Nome} $(Sobrenome}. \n e pertence ao curso : $(Curso}.`)
}