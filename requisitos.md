## REQUISITOS FUNCIONAIS ##

# PROFESSORES
# [X] Deve ser possível cadastrar novos professores
# [X] O cadastro deve seguir a seguinte estrutura: 
{
    rm: number
    nome: string
    area: string
    disciplinas: Array<string>
    email: string
    aceitaOrientar: boolean
    aceitaAvaliar: boolean
}
# [X] Não deve ser possível cadastrar mais de um professor com o mesmo rm

# [X] Não deve ser possível cadastrar novos professores sem que sejam informados os dados de: rm, nome, area e disciplina, ficando como opcional apenas o email. Os valores de aceita orientar e aceita avaliar, quando não informados, serão false por padrão


# [X] Deve ser possível listar os professores cadastrados no sistema.

# [X] FCP-01: Deve ser possível listar os professores cadastrados no sistema por area.

# [] Ao cadastrar um professor, a área deve ser sempre cadastrada com os caracteres em lower case.

# [] FCP-02: Deve ser possível listar os professores cadastrados no sistema por disciplina.

# [] Deve ser possível listar os professores cadastrados no sistema por aceite de orientação.

# [] Deve ser possível listar os professores cadastrados no sistema por aceite de avaliação.

