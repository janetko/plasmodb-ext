const expandBtn = document.createElement('button');

expandBtn.setAttribute('type', 'button');


expandBtn.textContent = 'Expand All';

expandBtn.style.margin = '10px';
expandBtn.style.backgroundColor = '#44a6c6';
expandBtn.style.color = 'white';
expandBtn.style.border = 'none';
expandBtn.style.padding = '10px 20px';
expandBtn.style.fontSize = '16px';
expandBtn.style.cursor = 'pointer';
expandBtn.style.borderRadius = '8px';
expandBtn.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
expandBtn.style.transition = 'background-color 0.2s, box-shadow 0.2s';

expandBtn.addEventListener('mouseover', () => {
  expandBtn.style.backgroundColor = '#87ceeb';
});
expandBtn.addEventListener('mouseout', () => {
  expandBtn.style.backgroundColor = '#44a6c6';
});
expandBtn.addEventListener('mousedown', () => {
  expandBtn.style.boxShadow = 'none';
});
expandBtn.addEventListener('mouseup', () => {
  expandBtn.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
});

expandBtn.addEventListener("click", () => {
  let selectors = [
    '.wdk-CollapsibleSection__collapsed',
    '.wdk-RecordTableContainer__collapsed',
    '.wdk-CollapsibleSectionContent__collapsed',
    '.wdk-RecordAttributeSectionItemContent__collapsed',
    '.wdk-CollapsibleSectionHeader__collapsed',
    '.wdk-RecordAttributeSectionItemHeader__collapsed'
  ];

  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      element.click();
    });
  });
})

document.querySelector('.wdk-RecordSidebarContainer').append(expandBtn);


