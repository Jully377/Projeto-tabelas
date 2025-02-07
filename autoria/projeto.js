let usuarios = [];

function gravarDados() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    if (nome && email) {
        usuarios.push({ nome: nome, email: email });
        atualizarTabela();
        document.getElementById('formCadastro').reset();  
    }
}

function atualizarTabela() {
    let tbody = document.querySelector('#tabelaCadastro tbody');
    tbody.innerHTML = '';  

    usuarios.forEach(usuario => {
        let tr = document.createElement('tr');
        let tdNome = document.createElement('td');
        tdNome.textContent = usuario.nome;
        let tdEmail = document.createElement('td');
        tdEmail.textContent = usuario.email;
        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);
        tbody.appendChild(tr);
    });
}

function ordenarTabela(coluna) {
    let tbody = document.querySelector('#tabelaCadastro tbody');
    let rows = Array.from(tbody.rows);

    rows.sort((a, b) => {
        let cellA = a.cells[coluna].textContent;
        let cellB = b.cells[coluna].textContent;
        return cellA.localeCompare(cellB);
    });

    rows.forEach(row => tbody.appendChild(row)); 
}

