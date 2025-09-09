const tasksByGoal = {
    communication: [
        "Give a genuine compliment to a colleague.",
        "Practice small talk with a stranger.",
        "Ask a friend about their day.",
        "Record yourself speaking for 1 minute and listen to it.",
        "Initiate a conversation in your next meeting."
    ],
    social: [
        "Smile at a stranger today.",
        "Attend a group event, even if briefly.",
        "Practice introducing yourself in the mirror.",
        "Join an online discussion group and post once.",
        "Take part in a group game or activity."
    ],
    confidence: [
        "Write down 3 things you like about yourself.",
        "Stand tall and practice positive body language for 1 minute.",
        "Take 5 deep breaths and remind yourself of your strengths.",
        "List your achievements from the past week.",
        "Dress in a way that makes you feel confident today."
    ]
};

const affirmations = [
    "I am confident in my abilities.",
    "Every small step I take improves me.",
    "I deserve positive relationships.",
    "I am proud of my progress.",
    "I radiate confidence and positivity.",
    "My voice matters.",
    "I am enough as I am.",
    "I grow stronger every day."
];

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function saveGoal() {
    const selectedGoal = document.getElementById('goal').value;
    localStorage.setItem('userGoal', selectedGoal);
    document.getElementById('setup-form').style.display = 'none';
    document.getElementById('task-box').style.display = 'block';
    document.getElementById('affirmation-box').style.display = 'block';
    generateTask();
}

function generateTask() {
    const storedGoal = localStorage.getItem('userGoal');
    if (!storedGoal || !tasksByGoal[storedGoal]) return;

    const randomTask = getRandomItem(tasksByGoal[storedGoal]);
    const randomAffirmation = getRandomItem(affirmations);

    document.getElementById('task').textContent = randomTask;
    document.getElementById('affirmation').textContent = randomAffirmation;
}

function initializeApp() {
    const storedGoal = localStorage.getItem('userGoal');
    if (storedGoal) {
        document.getElementById('setup-form').style.display = 'none';
        document.getElementById('task-box').style.display = 'block';
        document.getElementById('affirmation-box').style.display = 'block';
        generateTask();
    }
}

// On page load
window.onload = initializeApp;
