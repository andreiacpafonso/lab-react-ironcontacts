import './App.css';
import { useState } from 'react';
import contactsJSON from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  const [newContact, setNewContact] = useState(contactsJSON.slice(5, 6));

  // Add random contact
  const addRandomContact = () => {
    setContacts([...contacts, newContact]);
    setNewContact(contactsJSON[Math.floor(Math.random() * contactsJSON.length)]);
  };


  // Sort by name
  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setContacts(sortedContacts);
  };

  // Sort by popularity

  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else if (a.popularity > b.popularity) {
        return -1;
      } else {
        return 0;
      }
    });
    setContacts(sortedContacts);
  };

//  delete contact
const deleteContact = (contactId) => {
  const filteredContacts = contacts.filter((contact) => {
    return contact.id !== contactId;
  });

  setContacts(filteredContacts);
};
   

  
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button class onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>
        <h3>Picture</h3>
            </th>
            <th>
        <h3>Name</h3>
            </th> 
            <th>
        <h3>Popularity</h3>
            </th>
            <th>
              <h3>wonOscar</h3>
            </th>
            <th>
              <h3>wonEmmy</h3>
            </th>
            <th>
              <h3>Actions</h3>
            </th>
            </tr>
           
      
        </thead>
        <thead>
          <tr>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contactsJSON) => {
            return (
              <tr key={contactsJSON.id}>
                <td>
                  <img src={contactsJSON.pictureUrl}
                  alt="contact"
                  className="picture" />
                </td>
                <td>
                  <p>{contactsJSON.name}</p>
                </td>
                <td>
                  <p>{contactsJSON.popularity}</p>
                </td>
                <td>
                  <p>{contactsJSON.wonOscar === true && <td>🏆</td>}</p>
      
                </td>
                <td>
                  <p>{contactsJSON.wonEmmy === true && <td>🏆</td>}</p>
            
                </td>
                <button onClick = {() => deleteContact(contactsJSON.id)}>Delete</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}



export default App;
  

