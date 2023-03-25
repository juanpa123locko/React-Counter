import { FcButtingIn } from "react-icons/fc";
function Posts() {
    return (
        <div>
            <button
                onClick={() => {
                    fetch("https://jsonplaceholder.typicode.com/posts")
                        .then((response) => response.json())
                        .then((json) => console.log(json))
                        .catch((err) => console.error(err));
                }}
            >
                <FcButtingIn />
            </button>
        </div>
    );
}
export default Posts;
