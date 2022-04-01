const btn = document.getElementById('button');
const alert = document.getElementById('alert');
const table = document.getElementById('table');

const name1 = document.getElementById('name');
const date = document.getElementById('date');
const amount = document.getElementById('amount');


document.addEventListener('keyup', (k) => {
    event.preventDefault();
    if (k.keyCode === 13) {
        console.log('das')

        btn.click();
    }

});
btn.addEventListener('click', () => {

    if (name1.value === '' || date.value === '' || amount.value === '') {
        if (name1.value === '') {
            const smallName = document.getElementById('smallName');
            smallName.classList.add('error');

        } else if (name1.value !== '') {
            const smallName = document.getElementById('smallName');
            smallName.classList.remove('error');

        }

        if (date.value === '') {
            const smallDate = document.getElementById('smallDate');
            smallDate.classList.add('error');

        } else if (date.value !== '') {
            const smallDate = document.getElementById('smallDate');
            smallDate.classList.remove('error');

        }
        if (amount.value === '') {
            const smallAmount = document.getElementById('smallAmount');
            smallAmount.classList.add('error');

        } else if (amount.value !== '') {
            const smallAmount = document.getElementById('smallAmount');
            smallAmount.classList.remove('error');

        }

    } else if (name1.value !== '' && date.value !== '' && amount.value !== '') {
        alert.classList.add('active');

        //create row
        const row = table.insertRow(1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        // add item to row
        cell1.innerHTML = name1.value;
        cell2.innerHTML = date.value;
        cell3.innerHTML = `$${amount.value} `;

        //create delete button
        const delBtn = document.createElement('button');
        delBtn.classList.add('delBtn');
        delBtn.innerHTML = 'x';
        row.appendChild(delBtn);

        $(document).ready(function() {
            delBtn.addEventListener('click', () => {
                var rowCount = $('table tr').length;
                row.remove();
                rowCount--;

                if (rowCount < 2) {
                    alert.classList.remove('active');
                }
            });
        });

        clear();
    }
});




function clear() {

    name1.value = ''
    date.value = ''
    amount.value = ''

    const smallName = document.getElementById('smallName');
    smallName.classList.remove('error');

    const smallDate = document.getElementById('smallDate');
    smallDate.classList.remove('error');

    const smallAmount = document.getElementById('smallAmount');
    smallAmount.classList.remove('error');
}