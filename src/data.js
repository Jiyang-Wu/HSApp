const getData = (url) => {
    const data = fetch(url, {
        method: "GET",
        headers: {
            "x-rapidapi-key":
                "8d1b506e85msh3be41d90ea597f1p10ba3cjsne755d463810c",
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
    })
        .then((response) => response.json())
        .then((res) => {
            return res;
        });

    data.then((data) => {
        return data;
    });
};
export default getData;
