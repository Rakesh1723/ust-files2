const baseUrl = "http://localhost:3000/trainees";

async function getTrainees() {
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data);
    return data;
}

async function getTraineeById(id) {
    const response = await fetch(`${baseUrl}/${id}`);
    const data = await response.json();
    return data;
}
//getTraineeById(3).then(d=>console.log(d))
async function getTraineesByName(name) {
    const response = await fetch(`${baseUrl}?name=${name}`);
    const data = await response.json();
    return data;
}

async function addTrainee(trainee) {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(trainee)
    });
    const data = await response.json();
    return data;
}

// getTrainees()
async function deleteTrainee(id) {
    const response = await fetch(`${baseUrl}/${id}`,
        {
            method: 'DELETE'
        });
    const data = await response.json();
    return data;
}

async function updateTrainee(id, trainee) {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(trainee)
    });
    const data = await response.json();
    return data;
}

