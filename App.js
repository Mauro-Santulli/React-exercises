import { FilteredList } from './FilteredList';

export default function App() {

    return (
        <div>
        <FilteredList
          persons={[
            { id: 0, name: "Andrea", age: "17" },
            { id: 1, name: "Simone", age: "33" },
            { id: 2, name: "Marco", age: "14" },
            { id: 3, name: "Chiara", age: "78" },
            { id: 4, name: "Giuseppe", age: "57" },
            { id: 5, name: "Alessandro", age: "26" },
          ]}
        />
        </div>
    )

}

