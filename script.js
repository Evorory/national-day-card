function showInfo(city) {
  let infoText = "";

  switch(city) {
    case 'riyadh':
      infoText = "الرياض: عاصمة المملكة العربية السعودية وأكبر مدنها، مركز سياسي واقتصادي رئيسي.";
      break;
    case 'jeddah':
      infoText = "جدة: العاصمة الاقتصادية وبوابة الحرمين الشريفين، تقع على ساحل البحر الأحمر.";
      break;
    case 'dammam':
      infoText = "الدمام: مدينة كبرى في المنطقة الشرقية، مركز مهم لصناعة النفط والغاز.";
      break;
    case 'makkah':
      infoText = "مكة المكرمة: أقدس مدينة في الإسلام، تضم المسجد الحرام والكعبة المشرفة.";
      break;
    case 'madinah':
      infoText = "المدينة المنورة: تحتضن المسجد النبوي الشريف وهي ثاني أقدس مدينة في الإسلام.";
      break;
    case 'alula':
      infoText = "العلا: مدينة تاريخية مشهورة بمدائن صالح ومناظر طبيعية مبهرة.";
      break;
    case 'abha':
      infoText = "أبها: عروس الجنوب ومدينة سياحية شهيرة بطبيعتها الجبلية ومناخها المعتدل.";
      break;
    case 'tabuk':
      infoText = "تبوك: مدينة شمالية ذات تاريخ طويل، قريبة من موقع مشروع نيوم العالمي.";
      break;
    case 'taif':
      infoText = "الطائف: مدينة جبلية مشهورة بمزارع الرمان والورد الطائفي ومناخها البارد.";
      break;
    case 'hail':
      infoText = "حائل: مدينة تراثية تقع في شمال المملكة، معروفة بجبل أجا وسلمى.";
      break;
    case 'najran':
      infoText = "نجران: مدينة جنوبية ذات تراث عريق وموقع أثري مهم على طريق البخور القديم.";
      break;
    case 'jazan':
      infoText = "جازان: مدينة ساحلية في الجنوب، تشتهر بجزر فرسان وبزراعة المانجو.";
      break;
    case 'qassim':
      infoText = "القصيم: منطقة زراعية غنية، مشهورة بزراعة التمور وإقامة مهرجان التمور السنوي.";
      break;
    case 'khobar':
      infoText = "الخبر: مدينة حديثة على الخليج العربي، معروفة بكورنيشها وأسواقها الحديثة.";
      break;
  }

  const infoBox = document.getElementById('infoBox');
  infoBox.innerText = infoText;
  infoBox.style.display = "block";
}