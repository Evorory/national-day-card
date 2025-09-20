const regions = ['najd', 'east', 'north', 'west'];
const regionNames = {
  'najd': 'نجد',
  'east': 'المنطقة الشرقية',
  'north': 'المنطقة الشمالية',
  'west': 'المنطقة الغربية'
};

regions.forEach(id => {
  document.getElementById(id).addEventListener('click', () => {
    document.getElementById('region-name').innerText = regionNames[id];
    document.getElementById('card').classList.remove('hidden');
  });
});

document.getElementById('save-card').addEventListener('click', () => {
  alert('تم حفظ البطاقة!'); // لاحقًا ممكن نضيف تحميل الصورة
});
