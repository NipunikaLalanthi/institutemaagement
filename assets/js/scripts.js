(function () {
  document.getElementById('studentForm').addEventListener('submit', function (event) {
    function showToastMessage(message) {
      $('#toast_msg .toast-body').text(message);
      $('#toast_msg').toast('show');
    }

    $('#toast_msg').toast({ delay: 3000 });
    event.preventDefault();

    const studentName = event.target.student_name.value;
    const emailAddress = event.target.email_address.value;
    const telephoneNumber = event.target.tp_number.value;
    const studentDob = event.target.student_dob.value;
    const studentCourse = event.target.student_course.value;
    const cardHTML = `
            <div class="mt-4">
                <div class="card-body ">
                    <h4 class="card-title">${studentName}</h4>
                    <p class="card-text"><strong>Email:</strong> ${emailAddress}</p>
                    <p class="card-text"><strong>Phone:</strong> ${telephoneNumber}</p>
                    <p class="card-text"><strong>Date of Birth:</strong> ${studentDob}</p>
                    <p class="card-text"><strong>Course:</strong> ${studentCourse}</p>
                </div>
            </div>
        `;
    document.getElementById('studentCardContainer').innerHTML = cardHTML;
    showToastMessage('Record Saved Successfully.');
    event.target.reset();
  });
  
})()

  (function () {
    document.getElementById('searchForm').addEventListener('submit', function (event) {
      event.preventDefault();
      let input = document.getElementById('searchInput').value.toLowerCase();
      let rows = document.querySelectorAll('#studentTable tr');

      rows.forEach(row => {
        let text = row.textContent.toLowerCase();
        if (text.indexOf(input) > -1) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  })()

  (function () {
    document.getElementById('resetButton').addEventListener('click', function () {
      document.getElementById('searchInput').value = '';
      let rows = document.querySelectorAll('#studentTable tr');

      rows.forEach(row => {
        row.style.display = '';
      });
    });
  })()

  (function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.querySelector('.close');

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = item.src;
      });
    });
    close.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  })()
