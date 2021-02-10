import TextField from '@material-ui/core/TextField';

export default function InputField (props) {
    return (
        <TextField
            key={props.key}
            error={props.error}
            helperText={props.helperText}
            number
            required
            id={props.id}
            name={props.name}
            label={props.label}
            fullWidth
            value={props.value}
            onChange={e => props.handleInputFormChange(e)}
        />
    )
}
