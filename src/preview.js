// Global logic of my program

document.addEventListener('DOMContentLoaded', function () {
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

    // gestion du formatage de la date
    function formatDate(dateString, defaultValue = "Non spécifié") {
        if (!dateString) return defaultValue;
        const options = { year: "numeric", month: "short" };
        return new Date(dateString).toLocaleDateString("fr-FR", options);
    }

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

    const sections = [
        { buttonId: 'add-achievement', containerId: 'achievements-container', fields: ['achievementTitle', 'achievementDesc'] },
        { buttonId: 'add-experience', containerId: 'experience-container', fields: ['experienceTitle', 'company', 'location', 'startDate', 'endDate', 'experienceDesc'] },
        { buttonId: 'add-education', containerId: 'education-container', fields: ['school', 'degree', 'city', 'eduStartDate', 'eduEndDate', 'eduDesc'] },
        { buttonId: 'add-project', containerId: 'projects-container', fields: ['projectName', 'projectLink', 'projectDesc'] },
        { buttonId: 'add-skill', containerId: 'skills-container', fields: ['skill'] }
    ];

    sections.forEach(section => {
        const addButton = document.getElementById(section.buttonId);
        const container = document.getElementById(section.containerId);

        if (!addButton || !container) return; // Sécurité pour éviter les erreurs si un élément est absent

        addButton.addEventListener('click', function () {
            const lastEntry = container.lastElementChild;
            if (lastEntry && !isLastEntryValid(lastEntry, section.fields)) {
                alert("Veuillez remplir correctement tous les champs avant d'ajouter une nouvelle entrée.");
                return;
            }

            const newEntry = document.createElement('div');
            newEntry.className = 'mb-4';
            newEntry.innerHTML = generateNewEntryHTML(section.fields);
            const removeButton = newEntry.querySelector('.remove-btn');

            removeButton.addEventListener('click', function () {
                container.removeChild(newEntry);
            });

            container.appendChild(newEntry);
        });
    });

    function isLastEntryValid(entry, fields) {

        return fields.every(field => {
            const input = entry.querySelector(`[data-validation-type="${field}"]`);
            if (!input) return false;

            const value = (input.type === 'date') ? input.value : input.value.trim();
            return validationRules[field](value);
        });
    }

    function generateNewEntryHTML(fields) {
        return `
            <div class="grid sm:grid-cols-1 md:grid-cols-${fields.length < 3 ? 2 : 3} gap-4 mb-2">
                ${fields.map(field => `
                    <div>
                        <label class="text-gray-700 font-medium">${getFieldLabel(field)}</label>
                        ${getInputField(field)}
                        <div class="validation-message"></div>
                    </div>
                `).join('')}
            </div>
            <div class="flex justify-end pt-4">
                <button class="remove-btn bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200">
                    -
                </button>
            </div>
        `;
    }

    function getInputField(field) {
        if (field.includes("Desc")) {
            return `<textarea data-validation-type="${field}" rows="3"
                  class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200"
                    placeholder="Saisissez votre description ici..."></textarea>`;
        } else if (field.includes("Date")) {
            return `<input type="date" data-validation-type="${field}" 
                    class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200">`;
        } else {
            return `<input type="text" data-validation-type="${field}" 
                    class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200"
                    placeholder="Saisissez ici...">`;
        }
    }

    function getFieldLabel(field) {
        const labels = {
            achievementTitle: "Title",
            achievementDesc: "Description",
            experienceTitle: "Title",
            company: "Company/Organization",
            location: "Location",
            startDate: "Start Date",
            endDate: "End Date",
            experienceDesc: "Description",
            school: "School",
            degree: "Degree",
            city: "City",
            eduStartDate: "Start Date",
            eduEndDate: "End Date",
            eduDesc: "Description",
            projectName: "Project Name",
            projectLink: "Project Link",
            projectDesc: "Description",
            skill: "Skill"
        };
        return labels[field] || "Field";
    }

    // Fonction pour mettre à jour la prévisualisation de la section "À propos"
    function updateAboutPreview() {
        document.getElementById('image_dsp').src = document.getElementById('preview').src;
        document.getElementById('fullname_dsp').textContent = document.getElementById('firstname').value + ' ' + document.getElementById('lastname').value;
        document.getElementById('designation_dsp').textContent = document.getElementById('designation').value;
        document.getElementById('phoneno_dsp').textContent = 'Phone: ' + document.getElementById('phoneno').value;
        document.getElementById('email_dsp').textContent = 'Email: ' + document.getElementById('email').value;
        document.getElementById('address_dsp').textContent = 'Address: ' + document.getElementById('address').value;
        document.getElementById('summary_dsp').textContent = document.getElementById('summary').value;
    }

    // Ajout d'écouteurs d'événements pour les champs de la section "À propos"
    ['image', 'firstname', 'lastname', 'designation', 'phoneno', 'email', 'address', 'summary'].forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', updateAboutPreview);
            input.addEventListener('change', updateAboutPreview); // Pour les fichiers (image)
        }
    });

    // Appel initial pour afficher les valeurs par défaut
    updateAboutPreview();

    // Fonction pour mettre à jour les sections dynamiques (Achievements, Experience, etc.)
    function updateDynamicSectionsPreview(containerId, previewId, fieldKeys, displayFunction) {
        const container = document.getElementById(containerId);
        const preview = document.getElementById(previewId);
        if (!container || !preview) {
            console.warn(`Container (${containerId}) ou preview (${previewId}) introuvable.`);
            return;
        }
        
        // Effacer la prévisualisation existante
        preview.innerHTML = '';
    
        // Parcourir chaque entrée ajoutée dans la section
        Array.from(container.children).forEach(entry => {
            // Pour chaque champ, récupérer la valeur en s'assurant que l'input existe
            const values = fieldKeys.map(key => {
                const input = entry.querySelector(`[data-validation-type="${key}"]`);
                return input ? input.value.trim() : '';
            });
            // Ajouter le contenu généré dans le conteneur preview
            preview.innerHTML += displayFunction(values);
        });
    }
    

    // Fonctions d'affichage pour chaque section dynamique
    function displayAchievement(values) {
        return `<div class="text-sm">- ${values[0]}: ${values[1]}</div>`;
    }

    function displayEducation(values) {
        return `
          <div class="mb-4">
            <h4 class="font-semibold">${values[1] || 'Diplôme non spécifié'}</h4>
            <div class="text-gray-600">${[values[0], values[2]].filter(Boolean).join(' - ')}</div>
            <div class="text-sm text-gray-500">${formatDate(values[3])} → ${formatDate(values[4], 'Présent')}</div>
            <p class="mt-1 text-gray-700">${values[5] || ''}</p>
          </div>
        `;
    }
      
    function displayExperience(values) {
    return `
        <div class="mb-4">
        <h4 class="font-semibold">${values[0] || 'Titre non spécifié'}</h4>
        <div class="text-gray-600">${[values[1], values[2]].filter(Boolean).join(' - ')}</div>
        <div class="text-sm text-gray-500">${formatDate(values[3])} → ${formatDate(values[4], 'Présent')}</div>
        <p class="mt-1 text-gray-700">${values[5] || ''}</p>
        </div>
    `;
    }

    function displayProject(values) {
        return `<div class="text-sm">- ${values[0]}: <a href="${values[1]}" target="_blank">${values[1]}</a>: ${values[2]}</div>`;
    }

    function displaySkill(values) {
        return `<div class="text-sm">- ${values[0]}</div>`;
    }

    // Écouteurs d'événements pour les sections dynamiques
    sections.forEach((section) => {
        const container = document.getElementById(section.containerId);
        if (container) {
            container.addEventListener("input", () => {
                let displayFunction;
                switch (section.containerId) {
                    case "experience-container":
                        displayFunction = displayExperience;
                        break;
                    case "education-container":
                        displayFunction = displayEducation;
                        break;
                    case "achievements-container":
                        displayFunction = displayAchievement;
                        break;
                    case "projects-container":
                        displayFunction = displayProject;
                        break;
                    case "skills-container":
                        displayFunction = displaySkill;
                        break;
                    default:
                        return;
                }
                updateDynamicSectionsPreview(
                    section.containerId,
                    section.containerId === 'education-container' ? 'preview-educations' : section.containerId === 'experience-container' ? 'preview-experiences' : `${section.containerId.replace('-container', '')}_dsp`,
                    section.fields,
                    displayFunction
                );
            });
            container.addEventListener("change", () => {
                let displayFunction;
                switch (section.containerId) {
                    case "experience-container":
                        displayFunction = displayExperience;
                        break;
                    case "education-container":
                        displayFunction = displayEducation;
                        break;
                    case "achievements-container":
                        displayFunction = displayAchievement;
                        break;
                    case "projects-container":
                        displayFunction = displayProject;
                        break;
                    case "skills-container":
                        displayFunction = displaySkill;
                        break;
                    default:
                        return;
                }
                updateDynamicSectionsPreview(
                    section.containerId,
                    section.containerId === 'education-container' ? 'preview-educations' : section.containerId === 'experience-container' ? 'preview-experiences' : `${section.containerId.replace('-container', '')}_dsp`,
                    section.fields,
                    displayFunction
                );
            });
        }
    });

    // Appel initial pour les sections dynamiques
    sections.forEach(section => {
        let displayFunction;
        switch (section.containerId) {
            case 'achievements-container': displayFunction = displayAchievement; break;
            case 'education-container': displayFunction = displayEducation; break;
            case 'experience-container': displayFunction = displayExperience; break;
            case 'projects-container': displayFunction = displayProject; break;
            case 'skills-container': displayFunction = displaySkill; break;
        }
        updateDynamicSectionsPreview(
            section.containerId,
            section.containerId === 'education-container' ? 'preview-educations' : section.containerId === 'experience-container' ? 'preview-experiences' : `${section.containerId.replace('-container', '')}_dsp`,
            section.fields,
            displayFunction
        );
    });

    // Ajouter à la fin du DOMContentLoaded, avant le dernier });
    document.querySelectorAll('[data-validation-type*="Date"]').forEach(dateInput => {
        dateInput.classList.toggle('filled-date', !!dateInput.value);
    });

});
