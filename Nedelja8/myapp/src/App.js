import React from 'react';
import './App.css';
import ContactList from './components/ContactList';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contacts: [
                {
                    name: 'Pera',
                    phone: '+123456789'
                },
                {
                    name: 'Boban',
                    phone: '+987654321'
                },
                {
                    name: 'Zoran',
                    phone: '+132457689'
                }
            ],
            filter: '',
            match: false
        }
    }

    filterContacts = e => {
        this.setState({filter: e.target.value});
    }

    addContactHandler = e => {
        e.preventDefault();
        const number = (document.querySelector('#number').value).trim();
        const name = (document.querySelector('#name').value).trim();

        if(number == '' || name == ''){
            document.querySelector('#msg').innerHTML = 'Every field is required!';
            return;
        }

        if(number[0] != '+'){
            document.querySelector('#msg').innerHTML = 'Number must start with + sign!';
            return;
        }
        document.querySelector('#msg').innerHTML = '';
        
        let match = false;
        this.state.contacts.forEach(contact => {
            if(contact.name == name){
                match = true;
                this.setState({match:true});
            }
        });

        // add contact
        if(!match){
            let contacts = this.state.contacts;
            contacts.push({name:name, phone:number});
            this.setState({
                contacts:contacts,
                match:false
            });
        }
    }

    edit = e => {
        e.preventDefault();
        switch(e.target.innerHTML){
            case 'Yes':
                console.log('yes');
                const number = (document.querySelector('#number').value).trim();
                const name = (document.querySelector('#name').value).trim();

                let contacts = this.state.contacts;
                for(let i = 0; i < contacts.length; i++){
                    if(contacts[i].name == name){
                        contacts[i] = {
                            name: name,
                            phone: number
                        }
                        break;
                    }
                }
                this.setState({
                    contacts: contacts,
                    match:false
                });

                // reset inputs
                document.querySelector('#number').value = '';
                document.querySelector('#name').value = '';
                break;
            case 'No':
                console.log('no');
                this.setState({match:false});
                document.querySelector('#number').value = '';
                document.querySelector('#name').value = '';
                break;
        }
    }

    render(){
        let contacts = [];
        this.state.contacts.forEach(contact => {
            if(contact.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase())){
                contacts.push(contact);}
        });

        return(
            <div className="app">
                <h1>Add Contacts</h1>
                <form>
                    <input type="text" id="name" placeholder="Contact name" />
                    <input type="text" id="number" placeholder="Contact number" />
                    <button onClick={this.addContactHandler}>Submit</button>
                    <p id="msg"></p>
                    {
                        this.state.match 
                        &&
                        <div>
                            <p>Contact already exist. Do you want to change the old phone number with one you just entered?</p>
                            <button onClick={this.edit}>Yes</button>
                            <button onClick={this.edit}>No</button>
                        </div>
                    }
                </form>
                <hr />
                <input type="text" placeholder="Search" value={this.state.filter} onChange={this.filterContacts} />
                <ContactList contacts={contacts} />
            </div>
        )
    }
}

export default App;