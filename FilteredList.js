import React, { useMemo } from "react";

export function FilteredList(props) {
    const filter = (age) => {
        const filtered = age.filter((person) => person.age > 18);
        return filtered;
    };
    const memo = useMemo(() => filter(props.persons));
    return (
        <>
            <h2>
                {memo.map((x, i) => {
                    return (<li key={i}>{memo[i].name} : {memo[i].age}</li>)
                })}
            </h2>
        </>
    );
}
