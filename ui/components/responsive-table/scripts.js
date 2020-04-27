const init = () => {
    const tables = document.querySelectorAll('.js-responsive-table');

    for (let i = 0; i < tables.length; i++) {
        const tableRows = tables[i].querySelectorAll('tr');
        const tableHeadings = tables[i].querySelectorAll('th');

        if (typeof tableHeadings === 'undefined' || tableHeadings.length <= 0) return;

        for (let j = 0; j < tableRows.length; j++) {
            const tableCells = tableRows[j].querySelectorAll('td');

            for (let z = 0; z < tableCells.length; z++) {
                const cellLabel = `${tableHeadings[z].innerHTML}:`;

                tableCells[z].innerHTML = `<span data-label="${cellLabel}">${tableCells[z].innerHTML}</span>`;
            }
        }
    }
}

init();