// src/heroservices.js
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('[role="tab"]');
    const panels = document.querySelectorAll('[role="tabpanel"]');

     // Hide all panels except the first one
  panels.forEach((panel, index) => {
    if (index !== 0) {
      panel.classList.add('hidden');
    }
  });
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Hide all panels
        panels.forEach(panel => panel.classList.add('hidden'));
        
        // Remove active state from all tabs
        tabs.forEach(tab => tab.classList.remove('border-indigo-500', 'text-indigo-600'));
        tabs.forEach(tab => tab.classList.add('border-transparent', 'text-gray-500', 'hover:border-gray-300', 'hover:text-gray-700'));
  
        // Add active state to the clicked tab
        tab.classList.add('border-indigo-500', 'text-indigo-600');
        tab.classList.remove('border-transparent', 'text-gray-500', 'hover:border-gray-300', 'hover:text-gray-700');
        
        // Show the corresponding panel
        const targetPanel = document.getElementById(tab.getAttribute('aria-controls'));
        targetPanel.classList.remove('hidden');
      });
    });
  });
  