import React from 'react'

// передаем некоторый массив, в котором содержатся 
// опции сортировки
// defaultValue - надпись, например, по имени, по описанию
const MySelect = ({options, defaultValue, value, onChange}) => {
    return(
        <select 
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>    
            )}
        </select>
    )
}

export default MySelect