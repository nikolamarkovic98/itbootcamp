class Potrosnja{
    constructor(){
        this.rashodi = [];
        this.readLocalStorage();
    }

    readLocalStorage = () => {
        const rashodi = JSON.parse(localStorage.getItem('rashodi'));
        if(rashodi != undefined || rashodi != null)
            this.rashodi = rashodi;
    }

    writeLocalStorage = () => localStorage.setItem('rashodi', JSON.stringify(this.rashodi));

    dodajRashod = (opis, iznos, trenutnoStanje) => {
        const rashod = {
            id: Math.random(),
            opis: opis,
            iznos: iznos,
            procenat: posto(iznos, trenutnoStanje)
        }
        this.rashodi.push(rashod);
        this.writeLocalStorage();
    }

    izbrisiRashod = id => {
        for(let i = 0; i < this.rashodi.length; i++)
            if(this.rashodi[i].id == id)
                this.rashodi.splice(i, 1);

        this.writeLocalStorage();
        updateView(['Rashodi'])
    }

    izracunajRashode = () => {
        let sum = 0;
        this.rashodi.forEach(rashod => sum+=rashod.iznos);
        return sum;
    }

    reload = () => {
        this.rashodi.forEach(rashod => {
            rashod.procenat = posto(rashod.iznos, zarada.izracunajPrihode());
        });
    }
}

class Zarada{
    constructor(){
        this.prihodi = [];
        this.readLocalStorage();
    }

    readLocalStorage = () => {
        const prihodi = JSON.parse(localStorage.getItem('prihodi'));
        if(prihodi != undefined || prihodi != null)
            this.prihodi = prihodi;
    }

    writeLocalStorage = () => localStorage.setItem('prihodi', JSON.stringify(this.prihodi));

    dodajPrihod = (opis, iznos) => {
        const prihod = {
            id: Math.random(),
            opis: opis,
            iznos: iznos
        }
        this.prihodi.push(prihod);
        this.writeLocalStorage();
    }

    izbrisiPrihod = id => {
        for(let i = 0; i < this.prihodi.length; i++)
            if(this.prihodi[i].id == id)
                this.prihodi.splice(i, 1);

        this.writeLocalStorage();
        updateView(['Prihodi'])
    }

    izracunajPrihode = () => {
        let sum = 0;
        this.prihodi.forEach(prihod => sum+=prihod.iznos);
        return sum;
    }
}

let potrosnja = new Potrosnja();
let zarada = new Zarada();

updateView(['Prihodi', 'Rashodi']);