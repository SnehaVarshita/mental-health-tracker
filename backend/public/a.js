const affirmations = [
    "I am worthy of love and respect.",
    "I am capable of achieving my goals.",
    "I believe in myself and my abilities.",
    "I am confident and courageous.",
    "I am deserving of happiness and success.",
    "I am surrounded by positive energy.",
    "I am grateful for the good things in my life.",
    "I am at peace with who I am.",
    "I am constantly growing and improving.",
    "I am strong and resilient.",
    "I trust myself and my intuition.",
    "I am in control of my thoughts and emotions.",
    "I am worthy of all the good things that come my way.",
    "I am creating a life I love.",
    "I am open to new experiences and opportunities.",
    "I am surrounded by love and support.",
    "I am capable of overcoming any challenge.",
    "I am proud of who I am becoming.",
    "I am a positive thinker and only attract positivity.",
    "I am a magnet for miracles.",
    "I am thankful for today.",
    "I am in charge of how I feel and today I am choosing happiness.",
    "I am brimming with energy and overflowing with joy.",
    "I am free of worry and regret.",
    "I am living my best life.",
    "I am worthy of all the wonderful things that life has to offer.",
    "I am an unstoppable force of nature.",
    "I am a unique and valuable person.",
    "I am attracting wonderful opportunities into my life.",
    "I am at peace with my past and excited for my future.",
    "I am grateful for the lessons life has taught me.",
    "I am more than enough.",
    "I am a beautiful person, inside and out.",
    "I am proud of all my accomplishments.",
    "I am worthy of my dreams.",
    "I am in control of my destiny.",
    "I am a kind and compassionate person.",
    "I am attracting abundance into my life.",
    "I am worthy of respect from others.",
    "I am open to giving and receiving love.",
    "I am constantly learning and growing.",
    "I am full of positive thoughts and ideas.",
    "I am worthy of taking time to recharge.",
    "I am confident in my ability to solve problems.",
    "I am becoming a better version of myself every day.",
    "I am surrounded by positive, supportive people.",
    "I am worthy of forgiveness and healing.",
    "I am a powerful creator.",
    "I am a beacon of love and light.",
    "I am deserving of all the good things in life."
];

document.getElementById('affirmationButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmation = affirmations[randomIndex];
    document.getElementById('affirmationText').innerText = `"${affirmation}"`;
});
