// importation de l'image

function previewImage(event) {
    const preview = document.getElementById('preview');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function() {
            preview.src = reader.result;
            preview.style.display = 'block';
        }

        reader.readAsDataURL(file);
    } else {
        preview.src = '#';
        preview.style.display = 'none';
    }
}

// add achievement sections

document.addEventListener('DOMContentLoaded', function() {
    const addAchievementButton = document.getElementById('add-achievement');
    const achievementsContainer = document.getElementById('achievements-container');

    addAchievementButton.addEventListener('click', function() {
        const newAchievement = document.createElement('div');
        newAchievement.className = 'mb-4';
        newAchievement.innerHTML = `
            <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4 items-center mb-2">
                <div>
                    <label class="text-gray-700 font-medium">Title</label>
                    <input type="text"
                        class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200"
                        placeholder="Enter title">
                </div>
                <div>
                    <label class="text-gray-700 font-medium">Description</label>
                    <input type="text"
                        class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200"
                        placeholder="Enter description">
                </div>
            </div>
            <div class="flex justify-end pt-4">
                <button class="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200">
                    -
                </button>
            </div>
        `;

        const removeButton = newAchievement.querySelector('button');
        removeButton.addEventListener('click', function() {
            achievementsContainer.removeChild(newAchievement);
        });

        achievementsContainer.appendChild(newAchievement);
    });
});


// add experience sections

document.addEventListener('DOMContentLoaded', function() {
    const addExperienceButton = document.getElementById('add-experience');
    const experienceContainer = document.getElementById('experience-container');

    addExperienceButton.addEventListener('click', function() {
        const newExperience = document.createElement('div');
        newExperience.className = 'mb-4';
        newExperience.innerHTML = `
            <div class="grid sm:grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                <div>
                            <label class="text-gray-700 font-medium">Title</label>
                            <input type="text"
                                class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200"
                                placeholder="e.g. Software Engineer">
                        </div>

                        <!-- Company/Organization -->
                        <div>
                            <label class="text-gray-700 font-medium">Company/Organization</label>
                            <input type="text"
                                class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200"
                                placeholder="e.g. Tech Innovations Inc.">
                        </div>

                        <!-- Location -->
                        <div>
                            <label class="text-gray-700 font-medium">Location</label>
                            <input type="text"
                                class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200"
                                placeholder="e.g. New York, NY">
                        </div>

                        <!-- Start Date -->
                        <div>
                            <label class="text-gray-700 font-medium">Start Date</label>
                            <input type="date"
                                class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200">
                        </div>

                        <!-- End Date -->
                        <div>
                            <label class="text-gray-700 font-medium">End Date</label>
                            <input type="date"
                                class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200">
                        </div>

                        <!-- Description -->
                        <div>
                            <label class="text-gray-700 font-medium">Description</label>
                            <textarea rows="3"
                                class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200"
                                placeholder="e.g. Developed and maintained web applications..."></textarea>
                        </div>
            </div>
            <div class="flex justify-end pt-4">
                <button class="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200">
                    -
                </button>
            </div>
        `;

        const removeButton = newExperience.querySelector('button');
        removeButton.addEventListener('click', function() {
            experienceContainer.removeChild(newExperience);
        });

        // Modification cruciale ici : utiliser appendChild au lieu de insertBefore
        experienceContainer.appendChild(newExperience);
    });
});


// add education sections

document.addEventListener('DOMContentLoaded', function() {
    const addEducationButton = document.getElementById('add-education');
    const educationContainer = document.getElementById('education-container');

    addEducationButton.addEventListener('click', function() {
        const newEducation = document.createElement('div');
        newEducation.className = 'mb-4';
        newEducation.innerHTML = `
            <div class="grid sm:grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                 <!-- School -->
                        <div>
                            <label class="text-gray-700 font-medium">School</label>
                            <input type="text"
                                class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200"
                                placeholder="e.g. Software Engineer">
                        </div>

                        <!-- Degree -->
                        <div>
                            <label class="text-gray-700 font-medium">Degree</label>
                            <input type="text"
                                class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200"
                                placeholder="e.g. Tech Innovations Inc.">
                        </div>

                        <!-- City -->
                        <div>
                            <label class="text-gray-700 font-medium">City</label>
                            <input type="text"
                                class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200"
                                placeholder="e.g. New York, NY">
                        </div>

                        <!-- Start Date -->
                        <div>
                            <label class="text-gray-700 font-medium">Start Date</label>
                            <input type="date"
                                class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200">
                        </div>

                        <!-- End Date -->
                        <div>
                            <label class="text-gray-700 font-medium">End Date</label>
                            <input type="date"
                                class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200">
                        </div>

                        <!-- Description -->
                        <div>
                            <label class="text-gray-700 font-medium">Description</label>
                            <textarea rows="3"
                                class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200"
                                placeholder="e.g. Developed and maintained web applications..."></textarea>
                        </div>
            </div>
            <div class="flex justify-end pt-4">
                <button class="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200">
                    -
                </button>
            </div>
        `;

        const removeButton = newEducation.querySelector('button');
        removeButton.addEventListener('click', function() {
            educationContainer.removeChild(newEducation);
        });

        educationContainer.appendChild(newEducation);
    });
});


// add project sections

document.addEventListener('DOMContentLoaded', function() {
    const addProjectButton = document.getElementById('add-project');
    const projectsContainer = document.getElementById('projects-container');

    addProjectButton.addEventListener('click', function() {
        const newProject = document.createElement('div');
        newProject.className = 'mb-4';
        newProject.innerHTML = `
            <div class="grid sm:grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                <div>
                    <label class="text-gray-700 font-medium">Project Name</label>
                    <input type="text"
                        class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200">
                </div>
                <div>
                    <label class="text-gray-700 font-medium">Project Link</label>
                    <input type="text"
                        class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200">
                </div>
                <div>
                    <label class="text-gray-700 font-medium">Description</label>
                    <textarea rows="3"
                        class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200"></textarea>
                </div>
            </div>
            <div class="flex justify-end pt-4">
                <button class="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200">
                    -
                </button>
            </div>
        `;

        const removeButton = newProject.querySelector('button');
        removeButton.addEventListener('click', function() {
            projectsContainer.removeChild(newProject);
        });

        projectsContainer.appendChild(newProject);
    });
});

// add skill sections

document.addEventListener('DOMContentLoaded', function() {
    const addSkillButton = document.getElementById('add-skill');
    const skillsContainer = document.getElementById('skills-container');

    addSkillButton.addEventListener('click', function() {
        const newSkill = document.createElement('div');
        newSkill.className = 'mb-4';
        newSkill.innerHTML = `
            <div class="relative">
                <input type="text"
                    class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200"
                    placeholder="e.g. JavaScript, Python, React">
                <div class="flex justify-end pt-4">
                    <button class="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200">
                        -
                    </button>
                </div>
            </div>
        `;

        const removeButton = newSkill.querySelector('button');
        removeButton.addEventListener('click', function() {
            skillsContainer.removeChild(newSkill);
        });

        skillsContainer.appendChild(newSkill);
    });
});


// Configuration des règles de validation pour toutes les sections
const validationRules = {
    firstname: value => value.trim().length >= 2,
    lastname: value => value.trim().length >= 2,
    designation: value => value.trim().length >= 5,
    address: value => value.trim().length >= 5,
    summary: value => value.trim().length >= 10,
    email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    phoneno: value => /^\+?[\d\s-]{8,}$/.test(value),
    
    // Achievements
    achievementTitle: value => value.trim().length >= 3,
    achievementDesc: value => value.trim().length >= 5,

    // Experience
    experienceTitle: value => value.trim().length >= 3,
    company: value => value.trim().length >= 3,
    location: value => value.trim().length >= 3,
    startDate: value => value !== "",
    endDate: value => value !== "",
    experienceDesc: value => value.trim().length >= 10,

    // Education
    school: value => value.trim().length >= 3,
    degree: value => value.trim().length >= 3,
    city: value => value.trim().length >= 3,
    eduStartDate: value => value !== "",
    eduEndDate: value => value !== "",
    eduDesc: value => value.trim().length >= 10,

    // Projects
    projectName: value => value.trim().length >= 3,
    projectLink: value => /^https?:\/\/.+$/.test(value),
    projectDesc: value => value.trim().length >= 10,

    // Skills
    skill: value => value.trim().length >= 2,

    // Image validation
    image: file => !file || (['image/jpeg', 'image/png'].includes(file.type) && file.size <= 2097152)
};

// Messages d'erreur
const errorMessages = {
    firstname: 'Minimum 2 caractères requis',
    lastname: 'Minimum 2 caractères requis',
    designation: 'Minimum 5 caractères requis',
    address: 'Adresse trop courte',
    summary: 'Minimum 10 caractères requis',
    email: 'Format email invalide',
    phoneno: 'Format téléphone invalide',
    image: 'Image >2MB ou format non supporté',

    achievementTitle: 'Titre trop court',
    achievementDesc: 'Description trop courte',

    experienceTitle: 'Titre trop court',
    company: 'Nom de l\'entreprise trop court',
    location: 'Lieu trop court',
    startDate: 'Veuillez sélectionner une date de début',
    endDate: 'Veuillez sélectionner une date de fin',
    experienceDesc: 'Description trop courte',

    school: 'Nom de l\'école trop court',
    degree: 'Nom du diplôme trop court',
    city: 'Nom de la ville trop court',
    eduStartDate: 'Veuillez sélectionner une date de début',
    eduEndDate: 'Veuillez sélectionner une date de fin',
    eduDesc: 'Description trop courte',

    projectName: 'Nom du projet trop court',
    projectLink: 'Lien du projet invalide (doit être une URL valide)',
    projectDesc: 'Description trop courte',

    skill: 'Compétence trop courte'
};

// Fonction de debounce pour limiter les vérifications
const debounce = (func, wait = 500) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

// Fonction de validation générique
const createValidator = (id) => {
    const input = document.getElementById(id);
    if (!input) return; // Évite les erreurs si l'élément n'existe pas

    const msgElement = document.getElementById(`${id}-msg`);
    if (!msgElement) return; // Évite les erreurs si le message d'erreur n'existe pas

    const validate = debounce(() => {
        const value = input.type === 'file' ? input.files[0] : input.value;
        const isValid = validationRules[id](value);
        
        msgElement.textContent = isValid ? '✓ Valide' : errorMessages[id];
        msgElement.className = `validation-message ${isValid ? 'valid' : 'invalid'}`;
    });

    input.addEventListener(input.type === 'file' ? 'change' : 'input', validate);
};

// Initialisation de la validation sur tous les champs définis
document.addEventListener('DOMContentLoaded', () => {
    Object.keys(validationRules).forEach(createValidator);
    
    // Prévisualisation de l'image dans la section "À propos"
    const imageInput = document.getElementById('image');
    if (imageInput) {
        imageInput.addEventListener('change', function(e) {
            const preview = document.getElementById('preview');
            const file = e.target.files[0];
            if (file && validationRules.image(file)) {
                preview.src = URL.createObjectURL(file);
            }
        });
    }
});

// Validation dynamique pour les entrées ajoutées (achievements, experience, education, projects, skills)
document.addEventListener('input', debounce((e) => {
    if (!e.target.matches('input[data-validation-type], textarea[data-validation-type]')) return;

    const input = e.target;
    const validationType = input.dataset.validationType;
    const msgElement = input.nextElementSibling;
    const value = input.value.trim();

    const isValid = validationRules[validationType](value);

    msgElement.textContent = isValid ? '✓ Valide' : errorMessages[validationType];
    msgElement.className = `validation-message ${isValid ? 'valid' : 'invalid'}`;
}));
