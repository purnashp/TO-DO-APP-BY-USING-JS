document.addEventListener('DOMContentLoaded', () => {
    const from = document.getElementById('form');
    const tbbody = document.getElementById('tablebody');
    let users = [];
    let currentindex = -1;

    from.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const place = document.getElementById('place').value;
        const userId = document.getElementById('userId').value;

        if (currentindex === -1) {
            addUser(name, age, place);
        } else {
            updateUser(currentindex, name, age, place);
        }

        from.reset();
        currentindex = -1;
    });

    function addUser(name, age, place) {
        users.push({ name, age, place });
        renderUsers();
    }

    function updateUser(index, name, age, place) {
        users[index] = { name, age, place };
        renderUsers();
    }

    function deleteUser(index) {
        users.splice(index, 1);
        renderUsers();
    }

    function renderUsers() {
        tbbody.innerHTML = '';
        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.place}</td>
                <td class="actions">
                    <button class="edit" onclick="editUser(${index})">Edit</button>
                </td>
                 <td class="actions">
                    <button class="delete" onclick="deleteUser(${index})">Delete</button>
                </td>
            `;
            tbbody.appendChild(row);
        });
    }

    window.editUser = (index) => {
        const user = users[index];
        document.getElementById('name').value = user.name;
        document.getElementById('age').value = user.age;
        document.getElementById('place').value = user.place;
        document.getElementById('userId').value = index;
        currentindex = index;
    }

    window.deleteUser = (index) => {
        deleteUser(index);
    }
});
