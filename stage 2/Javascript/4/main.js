let SingleRequest = (function () {
    let instance;
    function init() {
        let url = 'https://reqres.in/api/users/';
        let idString = document.getElementById("idString");
        let responseElement = document.getElementById("response");
        let nameString = document.getElementById("nameString");
        let jobString = document.getElementById("jobString");
        function displayResponse(result) {
            let resultStr = "";
            for (let key in result) {
                resultStr += `${key}: ${result[key]}<br>`;
            }
            responseElement.innerHTML = resultStr + responseElement.innerHTML;
        }
        function loggingResponse(wrapped) {
            return function () {
                responseElement.innerHTML = `<hr>${responseElement.innerHTML}`;
                const decor = wrapped.apply(this, arguments);
                responseElement.innerHTML = `#REQUEST AT ${Date()}<br>${responseElement.innerHTML}`;
                return decor;
            }
        }
        const wrappedResponse = loggingResponse(displayResponse);
        return {
            getButton: document.getElementById("btnGet"),
            postButton: document.getElementById("btnPost"),
            xhrGet: async function () {
                try {
                    let sendUrl = url + idString.value;
                    if (!idString.value)
                        throw new Error(`Укажите id юзера в поле ввода.`);
                    let response = await fetch(sendUrl);
                    if (response.status == 404)
                        throw new Error(`Ошибка запроса, пользователь с таким id не найден!`);
                    if (!response.ok)
                        throw new Error(`HTTP request error. Code: ${response.status}`);
                    let result = await response.json();
                    wrappedResponse(result.data);
                } catch (err) {
                    alert(err.message);
                }
            },
            xhrPost: async function () {
                try {
                    if (!nameString.value || !jobString.value)
                        throw new Error(`Ошибка запроса, поля не заполнены!`);
                    let user = {
                        name: nameString.value,
                        job: jobString.value
                    };
                    let response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(user)
                    });
                    if (!response.ok)
                        throw new Error(`HTTP request error. Code: ${response.status}`);
                    let result = await response.json();
                    wrappedResponse(result);
                } catch (err) {
                    alert(err.message);
                }
            }
        }
    };
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

let request = SingleRequest.getInstance();

request.getButton.addEventListener('click', function () {
    request.xhrGet();
})

request.postButton.addEventListener('click', function () {
    request.xhrPost();
})
