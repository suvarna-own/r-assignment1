import {people} from './People';
export default function PeopleList() {
    return (
        <div><ul>
           
            {people.map(person => (
                <li key={person.id}>{person.name}: {person.profession}</li>
            ))}
      
        </ul></div>
    );

}

