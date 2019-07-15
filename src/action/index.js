

export function getData() {
    return function (dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "setApi", payload: json });
            });
    };
}