// Obtém referências para elementos HTML
const form = document.getElementById("FormAgenda");
const listaDeAtividades = document.getElementById("listaDeAtividades");

// Armazenamento de dados 
const activities = [];

// Função para adicionar uma nova atividade
function addActivity(dado) {
    activities.push(dado);
    displayActivities();
}

// Função para exibir atividades na lista
function displayActivities() {
    listaDeAtividades.innerHTML = "";
    activities.forEach((activity, index) => {
        listaDeAtividades.innerHTML += `
            <li>${activity.disciplina} : ${activity.atividade} - ${activity.data}
                <button class=buttonEdit  onclick="editActivity(${index})">Editar</button>
                <button class=buttonDelete onclick="deleteActivity(${index})">Excluir</button>
            </li>`;
});
}

// Função para editar uma atividade
function editActivity(index) {
    const activity = activities[index];
    document.getElementById("data").value = activity.data;
    document.getElementById("disciplina").value = activity.disciplina;
    document.getElementById("atividade").value = activity.atividade;


    // Atualiza a atividade quando o botão Atualizar é clicado
    document.querySelector("button[type=button]").style.display = "none";
    document.getElementById("btnAtualizar").style.display = "inline";
    document.getElementById("btnAtualizar").onclick = () => {
        activity.data = document.getElementById("data").value;
        activity.disciplina = document.getElementById("disciplina").value;
        activity.atividade = document.getElementById("atividade").value;
        form.reset();
        document.querySelector("button[type=button]").style.display = "inline";
        document.getElementById("btnAtualizar").style.display = "none";
        displayActivities();
    };
}

// Função para excluir uma atividade
function deleteActivity(index) {
    activities.splice(index, 1);
    displayActivities();
}

// adiciona uma nova atividade à agenda
document.querySelector("button[type=button]").addEventListener("click", () => {
    const data = document.getElementById("data").value;
    const disciplina = document.getElementById("disciplina").value;
    const atividade = document.getElementById("atividade").value;
    addActivity({ data, disciplina, atividade });
    form.reset();
});
