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
    localStorage.setItem('USER_PROFILE', JSON.stringify(data));
}

// Fungsi untuk mengambil data dari localStorage
function loadFromLocalStorage() {
    const storedData = localStorage.getItem('USER_PROFILE');
    return storedData ? JSON.parse(storedData) : null;
}

// Fungsi untuk mengedit profil menggunakan SweetAlert
function editProfile() {
    Swal.fire({
      title: "Edit Profile",
      width: "60%",
      html: `
                <div class="profiles">
                    <label for="name" class="edit-label">Name</label>
                    <input type="text" id="name" class="swal2-input" placeholder="Name" value="${
                      document.getElementById("myName").textContent
                    }">
                </div>
                
                <div class="profiles">
                    <label for="role" class="edit-label">Role</label>
                    <input type="text" id="role" class="swal2-input" placeholder="Role" value="${
                      document.getElementById("myRole").textContent
                    }">
                </div>
                
                <div class="profiles">
                    <label for="availability" class="edit-label">Availability</label>
                    <input type="text" id="availability" class="swal2-input" placeholder="Availability" value="${
                      document.getElementById("myAvaible").textContent
                    }">
                </div>
                
                <div class="profiles">
                    <label for="age" class="edit-label">Age</label>
                    <input type="number" id="age" class="swal2-input" placeholder="Age" value="${
                      document.getElementById("myAge").textContent
                    }">
                </div>
                
                <div class="profiles">
                    <label for="location" class="edit-label">Location</label>
                    <input type="text" id="location" class="swal2-input" placeholder="Location" value="${
                      document.getElementById("myLocation").textContent
                    }">
                </div>
                
                <div class="profiles">
                    <label for="yoe" class="edit-label">Years of Experience</label>
                    <input type="number" id="yoe" class="swal2-input" placeholder="Years of Experience" value="${
                      document.getElementById("myYears").textContent
                    }">
                </div>
                
                <div class="profiles">
                    <label for="email" class="edit-label">Email</label>
                    <input type="email" id="email" class="swal2-input" placeholder="Email" value="${
                      document.getElementById("myEmail").textContent
                    }">
                </div>
        `,
      confirmButtonText: "Save",
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById("name").value;
        const role = document.getElementById("role").value;
        const availability = document.getElementById("availability").value;
        const age = parseInt(document.getElementById("age").value);
        const location = document.getElementById("location").value;
        const yoe = parseInt(document.getElementById("yoe").value);
        const email = document.getElementById("email").value;

        // Validasi input
        if (
          !name ||
          !role ||
          !availability ||
          !age ||
          !location ||
          !yoe ||
          !email
        ) {
          Swal.showValidationMessage("Please fill out all fields.");
          return false;
        }

        return { name, role, availability, age, location, yoe, email };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        document.getElementById("myName").textContent = result.value.name;
        document.getElementById("myRole").textContent = result.value.role;
        document.getElementById("myAvaible").textContent =
          result.value.availability;
        document.getElementById("myAge").textContent = result.value.age;
        document.getElementById("myLocation").textContent =
          result.value.location;
        document.getElementById("myYears").textContent = result.value.yoe;
        document.getElementById("myEmail").textContent = result.value.email;

        saveToLocalStorage(result.value);

        Swal.fire("Profile updated successfully!", "", "success");
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

window.onload = loadProfile;
