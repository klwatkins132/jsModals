'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const changeModalContent = function (event) {
    const id = event.target.id;
    let content = '';
    if (id === 'modal1') {
        content = `Bring to the table win-win survival strategies to ensure proactive domination. 
        At the end of the day, going forward, a new normal that has evolved from generation X is on the runway 
        heading towards a streamlined cloud solution. User generated content in real-time will have multiple 
        touchpoints for offshoring.`
    } else if (id === 'modal2') {
        content = `Leverage agile frameworks to provide a robust synopsis for high level overviews. 
        Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. 
        Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment..`
    } else {
        content = `Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. 
        Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along 
        the information highway will close the loop on focusing solely on the bottom line.`
    }
    document.getElementById("modal-content").innerHTML = content
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal)
    btnsOpenModal[i].addEventListener('click', changeModalContent)
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
