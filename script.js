/**
 * Password Generator - Portfolio Project
 * Generatore di Password - Progetto Portfolio
 */

// DOM Elements
const passwordOutput = document.getElementById('passwordOutput');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

// Character Sets
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// Update length display
lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

// Generate Password
generateBtn.addEventListener('click', () => {
    let charset = lowercaseChars;
    if (uppercaseCheckbox.checked) charset += uppercaseChars;
    if (numbersCheckbox.checked) charset += numberChars;
    if (symbolsCheckbox.checked) charset += symbolChars;
    
    let password = '';
    for (let i = 0; i < lengthSlider.value; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    passwordOutput.textContent = password;
});

// Copy to Clipboard
copyBtn.addEventListener('click', () => {
    if (passwordOutput.textContent === 'CLICK GENERATE') return;
    
    navigator.clipboard.writeText(passwordOutput.textContent)
        .then(() => {
            passwordOutput.textContent = 'Copiato!';
            setTimeout(() => {
                passwordOutput.textContent = password;
            }, 1000);
        })
        .catch(err => {
            console.error('Copy failed:', err);
        });
});

// Click password to copy
passwordOutput.addEventListener('click', () => {
    if (passwordOutput.textContent !== 'CLICK GENERATE') {
        navigator.clipboard.writeText(passwordOutput.textContent);
        const originalText = passwordOutput.textContent;
        passwordOutput.textContent = 'Copiato!';
        setTimeout(() => {
            passwordOutput.textContent = originalText;
        }, 1000);
    }
});