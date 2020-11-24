const BASE_URL = 'https://thinkful-list-api.herokuapp.com/ryanconley'

function getItems() {
    return apiFetch(`${BASE_URL}/items`)
}

function createItem(name){
    let newItem = JSON.stringify({name});

    return apiFetch(`${BASE_URL}/items`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: newItem
    });
}

function updateItem(id, updateData){
    let newData = JSON.stringify(updateData);
    return apiFetch(`${BASE_URL}/items/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'apllication/json',
        },
        body: newData
    });
}

function deleteItem(id){
    return apiFetch(`${BASE_URL}/items/${id}`, {
        method: 'DELETE'
    });
}

function apiFetch(argument){
    let error;
    return fetch(argument)
      .then(res => {
        if (!res.ok) {
          error = { code: res.status };
  
          if (!res.headers.get('content-type').includes('json')) {
            error.message = res.statusText;
            return Promise.reject(error);
          }
        }
        return res.json();
    })
    .then(data => {
        if(error){
            error.message = data.message;
            return Promise.reject(error);
        }
        return data;
    });
}

export default {
    getItems,
    createItem,
    updateItem,
    deleteItem
};