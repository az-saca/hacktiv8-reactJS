/*
name: string, 
role: string, 
availability: string, 
age: number, 
location: string, 
yoe: number, 
email: string,
*/

// Fungsi untuk menyimpan data ke localStorage
function saveToLocalStorage(data) {
    // Simpan data sebagai string JSON ke localStorage
    localStorage.setItem('USER_PROFILE', JSON.stringify(data));
}

// Fungsi untuk mengambil data dari localStorage
function loadFromLocalStorage() {
    // Ambil data dari localStorage dan parse JSON-nya
    const storedData = localStorage.getItem('USER_PROFILE');
    return storedData ? JSON.parse(storedData) : null;
}

// Fungsi untuk mengedit profil menggunakan SweetAlert
function editProfile() {
    Swal.fire({
        title: 'Edit Profile',
        html: `
            <input type="text" id="name" class="swal2-input" placeholder="Name" value="${document.getElementById('myName').textContent}">
            <input type="text" id="role" class="swal2-input" placeholder="Role" value="${document.getElementById('myRole').textContent}">
            <input type="text" id="availability" class="swal2-input" placeholder="Availability" value="${document.getElementById('myAvaible').textContent}">
            <input type="number" id="age" class="swal2-input" placeholder="Age" value="${document.getElementById('myAge').textContent}">
            <input type="text" id="location" class="swal2-input" placeholder="Location" value="${document.getElementById('myLocation').textContent}">
            <input type="number" id="yoe" class="swal2-input" placeholder="Years of Experience" value="${document.getElementById('myYears').textContent}">
            <input type="email" id="email" class="swal2-input" placeholder="Email" value="${document.getElementById('myEmail').textContent}">
        `,
        confirmButtonText: 'Save',
        focusConfirm: false,
        preConfirm: () => {
            const name = document.getElementById('name').value;
            const role = document.getElementById('role').value;
            const availability = document.getElementById('availability').value;
            const age = parseInt(document.getElementById('age').value);
            const location = document.getElementById('location').value;
            const yoe = parseInt(document.getElementById('yoe').value);
            const email = document.getElementById('email').value;

            // Validasi input
            if (!name || !role || !availability || !age || !location || !yoe || !email) {
                Swal.showValidationMessage('Please fill out all fields.');
                return false;
            }

            return { name, role, availability, age, location, yoe, email };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Update profile values in the HTML
            document.getElementById('myName').textContent = result.value.name;
            document.getElementById('myRole').textContent = result.value.role;
            document.getElementById('myAvaible').textContent = result.value.availability;
            document.getElementById('myAge').textContent = result.value.age;
            document.getElementById('myLocation').textContent = result.value.location;
            document.getElementById('myYears').textContent = result.value.yoe;
            document.getElementById('myEmail').textContent = result.value.email;

            // Simpan data ke localStorage
            saveToLocalStorage(result.value);

            Swal.fire('Profile updated successfully!', '', 'success');
        }
    });
}

// Fungsi untuk load data dari localStorage saat halaman dimuat
function loadProfile() {
    const data = loadFromLocalStorage();
    if (data) {
        document.getElementById('myName').textContent = data.name;
        document.getElementById('myRole').textContent = data.role;
        document.getElementById('myAvaible').textContent = data.availability;
        document.getElementById('myAge').textContent = data.age;
        document.getElementById('myLocation').textContent = data.location;
        document.getElementById('myYears').textContent = data.yoe;
        document.getElementById('myEmail').textContent = data.email;
    }
}

// Panggil loadProfile saat halaman dimuat
window.onload = loadProfile;
