//Ativando e desativando modal
const Modal = {
    open(){
        //Abrir o modal
        //Adicionar a class active ao modal
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close (){
        // fechar o modal
        // remover a class active do modal
         document.querySelector('.modal-overlay').classList.remove('active')
    }
}

//Dados das transações
const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/201'
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/201'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/201'
    },
]

//Resultados das transações
const Transaction = {
    incomes(){
        //somar as entradas
    },
    expenses(){
        //somar as saídas
    },
    total(){
        //entradas - saídas
    }
}

//Substituir os dados do HTML com os dados do JS
const DOM = {

    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)     
        
        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction) {

        const html = `        
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
        
        `

        return html
    }
}

transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})