function TaskCard(props) {
    return (
        <div >
            <h1>Mi primera tarea realizada!</h1>
            <span style={props.ready ? { color: "green" } : { color: "red" }}>{props.ready ? "tarea realizada" : "tarea aun no esta realizada"}</span>
        </div>
    );
}
export default TaskCard;  