const posto = (a, b) => {
    let rashodi = a / b * 100;
    let mario = rashodi > 0 ? rashodi.toFixed(2) : rashodi.toFixed(0);
    if(mario == Infinity)
        mario = 100;
    return rashodi;
}

const updateView = signs => {
    const total = document.querySelector('#total');
    const totalPrihodi = document.querySelector('#total-prihodi')
    const totalRashodi = document.querySelector('#total-rashodi');

    potrosnja.reload();

    signs.forEach(x => {
        switch(x){
            case 'Prihodi':
                const prihodiList = document.querySelector('#prihodi-list');
                prihodiList.innerHTML = '';
                zarada.prihodi.forEach(prihod => {
                    prihodiList.innerHTML += `
                        <div class="item-box item-box-flex prihod" data-id="${prihod.id}">
                            <p>${prihod.opis}</p>
                            <p>+ ${prihod.iznos}</p>
                            <div class="del-btn prihodi-del-btn">&#10005;</div>
                        </div>
                    `;
                });
                break;
            case 'Rashodi':
                const rashodiList = document.querySelector('#rashodi-list');
                rashodiList.innerHTML = '';
                potrosnja.rashodi.forEach(rashod => {
                    rashodiList.innerHTML += `
                        <div class="item-box-flex rashod" data-id="${rashod.id}">
                            <p>${rashod.opis}</p>
                            <p>- ${rashod.iznos}<span class="move">${Math.abs(rashod.procenat)}%</span></p>
                            <div class="del-btn rashodi-del-btn">&#10005;</div>
                        </div>
                    `;
                });
                break;
        }
    });

    rashodiDelButtons = document.querySelectorAll('.rashodi-del-btn');
    rashodiDelButtons.forEach(btn => 
        btn.addEventListener('click', e => {
            potrosnja.izbrisiRashod(e.target.parentElement.getAttribute('data-id'));
        })
    );

    prihodiDelButtons = document.querySelectorAll('.prihodi-del-btn');
    prihodiDelButtons.forEach(btn => {
        btn.addEventListener('click', e => {
            zarada.izbrisiPrihod(e.target.parentElement.getAttribute('data-id'));
        });
    });

    const mario = posto(potrosnja.izracunajRashode(), zarada.izracunajPrihode());
    
    totalAmount = zarada.izracunajPrihode() - potrosnja.izracunajRashode();
    total.innerHTML = `Dostupan budzet: ${totalAmount >= 0 ? '+' : ''}${totalAmount}`;
    totalPrihodi.innerHTML = `+ ${zarada.izracunajPrihode()}`;
    totalRashodi.innerHTML = `- ${potrosnja.izracunajRashode()}
                              <span class="move">${potrosnja.izracunajRashode() != 0 ? mario + '%' : ''}</span>`;
}

const toggles = document.querySelectorAll('.toggle');
toggles.forEach(toggle => {
    toggle.addEventListener('click', e => {
        switch(e.target.textContent){
            case 'PRIHODI':
                toggles[0].classList.add('active');
                toggles[1].classList.remove('active');
                document.querySelector('#rashodi').classList.add('hide');
                document.querySelector('#prihodi').classList.remove('hide');
                break;
            case 'RASHODI':
                toggles[0].classList.remove('active');
                toggles[1].classList.add('active');
                document.querySelector('#rashodi').classList.remove('hide');
                document.querySelector('#prihodi').classList.add('hide');
                break;
        }
    });
});

const selectInput = document.querySelector('#select-input');
selectInput.addEventListener('change', e => {
    const h2 = document.querySelector('#idk');
    h2.innerHTML = `Dodaj ${e.target.value == 'Prihodi' ? 'prihod:' : 'rashod:'}`;
});

const addButton = document.querySelector('#add');
addButton.addEventListener('click', e => {
    e.preventDefault();
    const select = (document.querySelector('#select-input').value).trim();
    const opis = (document.querySelector('#opis-input').value).trim();
    const iznos = (document.querySelector('#iznos-input').value).trim();

    if(opis == '' || iznos == ''){
        document.querySelector('#msg').innerHTML = 'Svi inputi su obavezni!';
        return;
    }

    if(isNaN(iznos)){
        document.querySelector('#msg').innerHTML = 'Iznos mora da bude broj!';
        return;
    }

    if(iznos != '' && iznos < 0){
        document.querySelector('#msg').innerHTML = 'Iznos ne moze da bude negativan!';
        return;
    }

    document.querySelector('#msg').innerHTML = '';

    switch(select){
        case 'Prihodi':
                if(0 >= iznos)
                    return;
                zarada.dodajPrihod(opis, Number(iznos));
                updateView(['Prihodi']);
            break;
        case 'Rashodi':
                if(0 >= iznos)
                        return;
                potrosnja.dodajRashod(opis, Number(iznos), zarada.izracunajPrihode());
                updateView(['Rashodi']);
            break;
    }
});

