export function Textarea({label, cols, rows, onChange, value}) {
    return (
        <div className="inputField">
        <label>{label}</label>
        <textarea cols={cols} rows={rows} onChange={onChange} value={value}></textarea>
        </div>
    )

    
}
export default function Input({label, value, onChange}) {
    return (
        <div className="inputField">
        <label>
        {label}
        </label>
        <input value={value} onChange={onChange}/>
        </div>
    )
}